import { randomBytes } from 'crypto'
import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { findUserApiKey } from '@/lib/api-keys'
import { PrismaService } from '@/lib/prisma'
import { triggerWebhook, createWebhookPayload } from '@/lib/webhook'

const prisma = PrismaService.getInstance()

// POST /api/keys/[keyId]/regenerate - Regenerate API key
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ keyId: string }> }
): Promise<NextResponse> {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { keyId } = await params

    if (!keyId) {
      return NextResponse.json({ error: 'Key ID is required' }, { status: 400 })
    }

    // Verify the API key exists and belongs to the user
    const existingApiKey = await findUserApiKey(keyId, userId)

    if (!existingApiKey) {
      return NextResponse.json({ error: 'API key not found' }, { status: 404 })
    }

    // Generate new API key
    const newKeyValue = randomBytes(32).toString('hex')

    // Update the API key with new value and reset lastUsed
    const updatedKey = await prisma.userApiKey.update({
      where: {
        id: keyId,
        userId,
      },
      data: {
        key: newKeyValue,
        lastUsed: null, // Reset usage tracking
      },
    })

    // Trigger webhook for API key regeneration
    const webhookPayload = createWebhookPayload('api_key_updated', userId, {
      keyId,
      keyName: updatedKey.name,
      action: 'regenerated',
      oldKeyPrefix: existingApiKey.key.substring(0, 8) + '...',
      newKeyPrefix: newKeyValue.substring(0, 8) + '...',
    })
    
    // Fire and forget webhook (don't await to avoid blocking)
    triggerWebhook(webhookPayload).catch(console.error)

    return NextResponse.json({
      success: true,
      message: 'API key regenerated successfully',
      newKey: newKeyValue,
      keyName: updatedKey.name,
      keyId: updatedKey.id
    })

  } catch (error) {
    console.error('Error regenerating API key:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}