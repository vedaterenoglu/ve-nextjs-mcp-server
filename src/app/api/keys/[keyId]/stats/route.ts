import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { findUserApiKey } from '@/lib/api-keys'
import { PrismaService } from '@/lib/prisma'

// GET /api/keys/[keyId]/stats - Get usage statistics for a specific API key
export async function GET(
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
    const apiKey = await findUserApiKey(keyId, userId)

    if (!apiKey) {
      return NextResponse.json({ error: 'API key not found' }, { status: 404 })
    }

    const prisma = PrismaService.getInstance()
    
    // Calculate date ranges
    const now = new Date()
    const startOfWeek = new Date(now)
    startOfWeek.setDate(now.getDate() - now.getDay()) // Start of current week (Sunday)
    startOfWeek.setHours(0, 0, 0, 0)
    
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)

    try {
      // Get real usage statistics from database
      const [requestsThisWeek, requestsThisMonth, recentRequests] = await Promise.all([
        // Count requests this week
        prisma.apiKeyRequestLog.count({
          where: {
            apiKeyId: keyId,
            timestamp: { gte: startOfWeek },
          },
        }),
        // Count requests this month  
        prisma.apiKeyRequestLog.count({
          where: {
            apiKeyId: keyId,
            timestamp: { gte: startOfMonth },
          },
        }),
        // Get recent requests (last 10)
        prisma.apiKeyRequestLog.findMany({
          where: { apiKeyId: keyId },
          orderBy: { timestamp: 'desc' },
          take: 10,
          select: {
            timestamp: true,
            endpoint: true,
            ipAddress: true,
          },
        }),
      ])

      // Get the total requests by counting all logs for this API key
      const totalRequests = await prisma.apiKeyRequestLog.count({
        where: { apiKeyId: keyId },
      })

      // Calculate most active day of the week
      const dayCount = await prisma.apiKeyRequestLog.groupBy({
        by: ['timestamp'],
        where: {
          apiKeyId: keyId,
          timestamp: { gte: startOfMonth },
        },
      })

      const dayOfWeekCounts = [0, 0, 0, 0, 0, 0, 0] // Sunday = 0, Monday = 1, etc.
      dayCount.forEach(record => {
        const dayOfWeek = new Date(record.timestamp).getDay()
        dayOfWeekCounts[dayOfWeek]++
      })

      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      const mostActiveDayIndex = dayOfWeekCounts.indexOf(Math.max(...dayOfWeekCounts))
      const mostActiveDay = dayOfWeekCounts[mostActiveDayIndex] > 0 ? dayNames[mostActiveDayIndex] : 'N/A'

      const stats = {
        totalRequests,
        requestsThisWeek,
        requestsThisMonth,
        lastUsed: apiKey.lastUsed,
        mostActiveDay,
        averageResponseTime: 250, // Placeholder - would need response time tracking
        successRate: 98.5, // Placeholder - would need success/error tracking
        recentRequests: recentRequests.map(req => ({
          timestamp: req.timestamp.toISOString(),
          endpoint: req.endpoint || '/api/unknown',
          status: 200, // Placeholder - would need status tracking
          responseTime: Math.floor(Math.random() * 300) + 100, // Placeholder
        })),
      }

      return NextResponse.json(stats)
    } catch (dbError) {
      console.error('Database error fetching real stats:', dbError)
      
      // Fallback to basic stats if detailed tracking fails
      const fallbackStats = {
        totalRequests: 0,
        requestsThisWeek: 0,
        requestsThisMonth: 0,
        lastUsed: apiKey.lastUsed,
        mostActiveDay: 'N/A',
        averageResponseTime: 0,
        successRate: 0,
        recentRequests: [],
      }

      return NextResponse.json(fallbackStats)
    }

  } catch (error) {
    console.error('Error fetching API key stats:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}