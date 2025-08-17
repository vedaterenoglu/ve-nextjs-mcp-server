import { NextRequest, NextResponse } from 'next/server'
import { oauthStorage, OAuthUtils } from '@/lib/oauth'

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url)

  const response_type = searchParams.get('response_type')
  const client_id = searchParams.get('client_id')
  const redirect_uri = searchParams.get('redirect_uri')
  const scope = searchParams.get('scope') || ''
  const state = searchParams.get('state')
  const code_challenge = searchParams.get('code_challenge')
  const code_challenge_method = searchParams.get('code_challenge_method') as
    | 'S256'
    | 'plain'
    | null

  // Validate required parameters
  if (!response_type || !client_id || !redirect_uri) {
    return NextResponse.json(
      {
        error: 'invalid_request',
        error_description: 'Missing required parameters',
      },
      { status: 400 }
    )
  }

  if (response_type !== 'code') {
    return NextResponse.json(
      {
        error: 'unsupported_response_type',
        error_description: 'Only authorization code flow is supported',
      },
      { status: 400 }
    )
  }

  // Validate client
  const client = oauthStorage.getClient(client_id)
  if (!client) {
    return NextResponse.json(
      { error: 'invalid_client', error_description: 'Unknown client' },
      { status: 400 }
    )
  }

  // Validate redirect URI
  if (!client.redirect_uris.includes(redirect_uri)) {
    return NextResponse.json(
      { error: 'invalid_request', error_description: 'Invalid redirect URI' },
      { status: 400 }
    )
  }

  // Validate PKCE (recommended for public clients)
  if (code_challenge && !code_challenge_method) {
    return NextResponse.redirect(
      `${redirect_uri}?error=invalid_request&error_description=code_challenge_method is required when code_challenge is present&state=${state}`
    )
  }

  try {
    // Generate authorization code
    const code = OAuthUtils.generateAuthorizationCode()
    const authCode = {
      code,
      client_id,
      redirect_uri,
      scope,
      code_challenge: code_challenge || undefined,
      code_challenge_method: code_challenge_method || undefined,
      expires_at: Date.now() + 10 * 60 * 1000, // 10 minutes
      user_id: 'default-user', // In real app, get from session
    }

    oauthStorage.storeAuthCode(authCode)

    // Redirect with authorization code
    const redirectUrl = new URL(redirect_uri)
    redirectUrl.searchParams.set('code', code)
    if (state) redirectUrl.searchParams.set('state', state)

    return NextResponse.redirect(redirectUrl.toString())
  } catch {
    const redirectUrl = new URL(redirect_uri)
    redirectUrl.searchParams.set('error', 'server_error')
    redirectUrl.searchParams.set('error_description', 'Internal server error')
    if (state) redirectUrl.searchParams.set('state', state)

    return NextResponse.redirect(redirectUrl.toString())
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  // Handle consent form submission (for interactive flows)
  const formData = await request.formData()
  const action = formData.get('action')

  if (action === 'allow') {
    // User granted permission, redirect to GET handler
    const url = new URL(request.url)
    return GET(
      new NextRequest(
        url.toString().replace('/oauth/authorize', '/oauth/authorize')
      )
    )
  } else {
    // User denied permission
    const redirect_uri = formData.get('redirect_uri') as string
    const state = formData.get('state') as string

    const redirectUrl = new URL(redirect_uri)
    redirectUrl.searchParams.set('error', 'access_denied')
    redirectUrl.searchParams.set('error_description', 'User denied the request')
    if (state) redirectUrl.searchParams.set('state', state)

    return NextResponse.redirect(redirectUrl.toString())
  }
}
