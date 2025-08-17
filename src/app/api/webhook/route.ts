import { NextRequest, NextResponse } from 'next/server'
import { PrismaService } from '@/lib/prisma'

const prisma = PrismaService.getInstance()

// POST /api/webhook - Process webhook events for real-time updates
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { eventType, userId, payload } = await request.json()

    // Validate webhook secret (basic security)
    const authHeader = request.headers.get('authorization')
    const expectedSecret = process.env.WEBHOOK_SECRET
    
    if (!authHeader || !authHeader.startsWith('Bearer ') || !expectedSecret) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const providedSecret = authHeader.substring(7)
    if (providedSecret !== expectedSecret) {
      return NextResponse.json({ error: 'Invalid webhook secret' }, { status: 401 })
    }

    // Store webhook event
    await prisma.webhookEvent.create({
      data: {
        userId,
        eventType,
        payload,
        processed: false,
      },
    })

    // Here you could add real-time notification logic
    // For now, we'll just return success
    return NextResponse.json({ 
      success: true, 
      message: 'Webhook processed successfully',
      eventType,
      userId,
    })

  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}

// GET /api/webhook - Get recent webhook events for a user
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const limit = parseInt(searchParams.get('limit') || '10')

    if (!userId) {
      return NextResponse.json({ error: 'userId required' }, { status: 400 })
    }

    const events = await prisma.webhookEvent.findMany({
      where: { userId },
      orderBy: { timestamp: 'desc' },
      take: limit,
    })

    return NextResponse.json(events)

  } catch (error) {
    console.error('Error fetching webhook events:', error)
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    )
  }
}