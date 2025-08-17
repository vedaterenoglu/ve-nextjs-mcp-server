import { randomBytes } from 'crypto'
import type { UserApiKey as PrismaUserApiKey } from '../generated/prisma'
import { PrismaService } from './prisma'

export interface UserApiKey {
  id: string
  userId: string
  name: string
  key: string
  createdAt: string
  lastUsed?: string
  scopes: string[]
}

const prisma = PrismaService.getInstance()

// Helper function to convert Prisma model to interface
function convertPrismaToInterface(prismaKey: PrismaUserApiKey): UserApiKey {
  return {
    id: prismaKey.id,
    userId: prismaKey.userId,
    name: prismaKey.name,
    key: prismaKey.key,
    createdAt: prismaKey.createdAt.toISOString(),
    lastUsed: prismaKey.lastUsed?.toISOString(),
    scopes: JSON.parse(prismaKey.scopes),
  }
}

// Helper function to generate unique API key
export function generateApiKey(): string {
  return `mcp_${randomBytes(32).toString('hex')}`
}

// Helper function to get user's API keys
export async function getUserApiKeys(userId: string): Promise<UserApiKey[]> {
  const keys = await prisma.userApiKey.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  })
  
  return keys.map(convertPrismaToInterface)
}

// Helper function to create a new API key
export async function createUserApiKey(
  userId: string,
  name: string,
  scopes: string[]
): Promise<UserApiKey> {
  const key = generateApiKey()
  
  const newKey = await prisma.userApiKey.create({
    data: {
      userId,
      name,
      key,
      scopes: JSON.stringify(scopes),
    },
  })

  // Store activity event directly
  try {
    await prisma.webhookEvent.create({
      data: {
        userId,
        eventType: 'api_key_created',
        payload: {
          keyId: newKey.id,
          keyName: name,
          scopes,
          timestamp: new Date().toISOString(),
        },
        processed: false,
      },
    })
  } catch (error) {
    console.error('Failed to create webhook event for API key creation:', error)
    // Don't throw - continue with API key creation even if activity logging fails
  }
  
  return convertPrismaToInterface(newKey)
}

// Helper function to find API key by ID and user
export async function findUserApiKey(
  keyId: string,
  userId: string
): Promise<UserApiKey | null> {
  const key = await prisma.userApiKey.findFirst({
    where: {
      id: keyId,
      userId,
    },
  })
  
  return key ? convertPrismaToInterface(key) : null
}

// Helper function to delete API key
export async function deleteUserApiKey(
  keyId: string,
  userId: string
): Promise<boolean> {
  try {
    // Get key info before deletion for webhook
    const keyToDelete = await prisma.userApiKey.findFirst({
      where: { id: keyId, userId },
      select: { name: true, scopes: true },
    })

    await prisma.userApiKey.delete({
      where: {
        id: keyId,
        userId,
      },
    })

    // Store activity event directly for API key deletion
    if (keyToDelete) {
      try {
        await prisma.webhookEvent.create({
          data: {
            userId,
            eventType: 'api_key_deleted',
            payload: {
              keyId,
              keyName: keyToDelete.name,
              scopes: JSON.parse(keyToDelete.scopes),
              timestamp: new Date().toISOString(),
            },
            processed: false,
          },
        })
      } catch (error) {
        console.error('Failed to create webhook event for API key deletion:', error)
        // Don't throw - continue with deletion even if activity logging fails
      }
    }

    return true
  } catch (error) {
    console.error('deleteUserApiKey failed:', error)
    return false
  }
}

// Helper function to update API key
export async function updateUserApiKey(
  keyId: string,
  userId: string,
  updates: { name?: string; scopes?: string[] }
): Promise<UserApiKey | null> {
  try {
    const updatedKey = await prisma.userApiKey.update({
      where: {
        id: keyId,
        userId,
      },
      data: {
        ...(updates.name && { name: updates.name }),
        ...(updates.scopes && { scopes: JSON.stringify(updates.scopes) }),
      },
    })

    // Store activity event directly for API key update
    try {
      await prisma.webhookEvent.create({
        data: {
          userId,
          eventType: 'api_key_updated',
          payload: {
            keyId,
            keyName: updatedKey.name,
            updates,
            timestamp: new Date().toISOString(),
          },
          processed: false,
        },
      })
    } catch (error) {
      console.error('Failed to create webhook event for API key update:', error)
      // Don't throw - continue with update even if activity logging fails
    }

    return convertPrismaToInterface(updatedKey)
  } catch {
    return null
  }
}

// Function to validate API keys and log requests
export async function validateUserApiKey(
  key: string,
  requestInfo?: {
    endpoint?: string
    userAgent?: string
    ipAddress?: string
  }
): Promise<{
  valid: boolean
  userId?: string
  scopes?: string[]
  keyId?: string
}> {
  const apiKey = await prisma.userApiKey.findUnique({
    where: { key },
  })

  if (!apiKey) {
    return { valid: false }
  }

  // Log the request and update last used timestamp
  await Promise.all([
    // Update last used timestamp only
    prisma.userApiKey.update({
      where: { id: apiKey.id },
      data: { 
        lastUsed: new Date(),
      },
    }),
    // Create request log entry (single source of truth for request counting)
    prisma.apiKeyRequestLog.create({
      data: {
        apiKeyId: apiKey.id,
        userId: apiKey.userId,
        endpoint: requestInfo?.endpoint,
        userAgent: requestInfo?.userAgent,
        ipAddress: requestInfo?.ipAddress,
      },
    }),
  ])

  // Store activity event directly
  try {
    await prisma.webhookEvent.create({
      data: {
        userId: apiKey.userId,
        eventType: 'api_key_used',
        payload: {
          keyId: apiKey.id,
          keyName: apiKey.name,
          endpoint: requestInfo?.endpoint,
          ipAddress: requestInfo?.ipAddress,
          timestamp: new Date().toISOString(),
        },
        processed: false,
      },
    })
  } catch (error) {
    console.error('Failed to create webhook event for API key usage:', error)
    // Don't throw - continue with API validation even if activity logging fails
  }

  return {
    valid: true,
    userId: apiKey.userId,
    scopes: JSON.parse(apiKey.scopes),
    keyId: apiKey.id,
  }
}

// Function to get user request statistics
export async function getUserRequestStats(userId: string): Promise<{
  totalRequests: number
  requestsThisMonth: number
  requestsToday: number
}> {
  const now = new Date()
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  startOfDay.setHours(0, 0, 0, 0)

  try {
    // Use userId-based queries to include ALL requests (from active and deleted keys)
    const [totalRequests, requestsThisMonth, requestsToday] = await Promise.all([
      // All requests for this user (including from deleted keys)
      prisma.apiKeyRequestLog.count({
        where: { userId },
      }),
      // This month's requests for this user
      prisma.apiKeyRequestLog.count({
        where: { 
          userId,
          timestamp: { gte: startOfMonth },
        },
      }),
      // Today's requests for this user
      prisma.apiKeyRequestLog.count({
        where: {
          userId,
          timestamp: { gte: startOfDay },
        },
      }),
    ])

    return {
      totalRequests,
      requestsThisMonth,
      requestsToday,
    }
  } catch (error) {
    console.log('Error in analytics calculation:', error)
    return { totalRequests: 0, requestsThisMonth: 0, requestsToday: 0 }
  }
}
