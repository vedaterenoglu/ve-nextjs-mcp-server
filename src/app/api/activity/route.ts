import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { format } from 'date-fns'
import { PrismaService } from '@/lib/prisma'

const prisma = PrismaService.getInstance()

// Event type mapping for transforming webhook events to activity format
const eventTypeMap = {
  'api_key_created': {
    action: 'API Key Created',
    type: 'success',
    getDescription: (payload: any) => `New API key "${payload.keyName}" created`,
  },
  'api_key_used': {
    action: 'API Request',
    type: 'info',
    getDescription: (payload: any) => `API key "${payload.keyName}" used for ${payload.endpoint || 'request'}`,
  },
  'api_key_deleted': {
    action: 'API Key Deleted',
    type: 'warning',
    getDescription: (payload: any) => `API key "${payload.keyName}" deleted`,
  },
  'api_key_updated': {
    action: 'API Key Updated',
    type: 'info',
    getDescription: (payload: any) => `API key "${payload.keyName}" settings updated`,
  },
  'api_key_regenerated': {
    action: 'API Key Regenerated',
    type: 'warning',
    getDescription: (payload: any) => `API key "${payload.keyName}" regenerated`,
  },
} as const

function transformEventToActivity(event: any) {
  const mapping = eventTypeMap[event.eventType as keyof typeof eventTypeMap]
  
  if (!mapping) {
    // Fallback for unknown event types
    return {
      id: event.id,
      action: event.eventType,
      description: 'System activity occurred',
      time: formatTimeAgo(event.timestamp),
      type: 'info',
    }
  }

  return {
    id: event.id,
    action: mapping.action,
    description: mapping.getDescription(event.payload),
    time: formatTimeAgo(event.timestamp),
    type: mapping.type,
  }
}

function formatTimeAgo(timestamp: Date): string {
  const now = new Date()
  const diffMs = now.getTime() - new Date(timestamp).getTime()
  const diffMinutes = Math.floor(diffMs / (1000 * 60))
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffMinutes < 1) {
    return 'Just now'
  } else if (diffMinutes < 60) {
    return `${diffMinutes} minute${diffMinutes === 1 ? '' : 's'} ago`
  } else if (diffHours < 24) {
    return `${diffHours} hour${diffHours === 1 ? '' : 's'} ago`
  } else if (diffDays < 7) {
    return `${diffDays} day${diffDays === 1 ? '' : 's'} ago`
  } else {
    return format(new Date(timestamp), 'yyyy-MM-dd')
  }
}

// GET /api/activity - Get recent activity for the authenticated user
export async function GET(): Promise<NextResponse> {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Fetch recent webhook events for this user
    const events = await prisma.webhookEvent.findMany({
      where: { userId },
      orderBy: { timestamp: 'desc' },
      take: 20, // Get last 20 activities
    })

    // Transform webhook events to activity format
    const activities = events.map(transformEventToActivity)

    return NextResponse.json(activities)
  } catch (error) {
    console.error('Error fetching activity:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}