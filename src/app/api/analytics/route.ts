import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { getUserRequestStats } from '@/lib/api-keys'

// GET /api/analytics - Get user request statistics
export async function GET(): Promise<NextResponse> {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const stats = await getUserRequestStats(userId)
    return NextResponse.json(stats)
  } catch (error) {
    console.error('Error fetching analytics:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}