import { randomBytes } from 'crypto'
import { NextRequest, NextResponse } from 'next/server'
import { storeToken } from '@/lib/auth'

interface TokenRequest {
  clientId: string
  clientSecret: string
  scopes?: string[]
}

interface TokenResponse {
  access_token: string
  token_type: 'Bearer'
  expires_in: number
  scope?: string
}

// Token storage moved to lib/auth.ts

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const {
      clientId,
      clientSecret,
      scopes = ['mcp:tools'],
    }: TokenRequest = await request.json()

    // Validate client credentials
    const validClientId = process.env.MCP_CLIENT_ID || 'mcp-client'
    const validClientSecret = process.env.MCP_CLIENT_SECRET || 'mcp-secret'

    if (clientId !== validClientId || clientSecret !== validClientSecret) {
      return NextResponse.json(
        {
          error: 'invalid_client',
          error_description: 'Invalid client credentials',
        },
        { status: 401 }
      )
    }

    // Generate token
    const token = randomBytes(32).toString('hex')
    const expiresIn = 3600 // 1 hour
    const expiresAt = Date.now() + expiresIn * 1000

    // Store token
    storeToken(token, clientId, scopes, expiresAt)

    const response: TokenResponse = {
      access_token: token,
      token_type: 'Bearer',
      expires_in: expiresIn,
      scope: scopes.join(' '),
    }

    return NextResponse.json(response)
  } catch {
    return NextResponse.json(
      { error: 'invalid_request', error_description: 'Invalid request format' },
      { status: 400 }
    )
  }
}

// Token validation function moved to lib/auth.ts to avoid Next.js API route export restrictions
