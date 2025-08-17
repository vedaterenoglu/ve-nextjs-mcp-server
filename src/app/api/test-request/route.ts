import { NextRequest, NextResponse } from 'next/server'
import { validateUserApiKey } from '@/lib/api-keys'

// POST /api/test-request - Simulate API key usage for testing
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const authHeader = request.headers.get('authorization')
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Missing or invalid authorization header' }, { status: 401 })
    }

    const apiKey = authHeader.substring(7)
    const userAgent = request.headers.get('user-agent')
    const forwardedFor = request.headers.get('x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.split(',')[0] : 
              request.headers.get('x-real-ip') || 
              '127.0.0.1'

    const validation = await validateUserApiKey(apiKey, {
      endpoint: '/api/test-request',
      userAgent: userAgent || undefined,
      ipAddress: ip,
    })

    if (!validation.valid) {
      return NextResponse.json({ error: 'Invalid API key' }, { status: 401 })
    }

    return NextResponse.json({ 
      success: true,
      message: 'API key validated successfully',
      userId: validation.userId,
      scopes: validation.scopes,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Error in test request:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}