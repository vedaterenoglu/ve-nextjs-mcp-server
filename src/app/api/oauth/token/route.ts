import { NextRequest, NextResponse } from 'next/server'
import { oauthStorage, OAuthUtils, PKCEUtils } from '@/lib/oauth'

export async function POST(request: NextRequest): Promise<NextResponse> {
  const contentType = request.headers.get('content-type')
  let body: Record<string, unknown>

  if (contentType?.includes('application/json')) {
    body = await request.json()
  } else {
    const formData = await request.formData()
    body = Object.fromEntries(formData.entries())
  }

  const {
    grant_type,
    code,
    redirect_uri,
    client_id,
    client_secret,
    code_verifier,
    refresh_token,
    scope,
  } = body as {
    grant_type?: string
    code?: string
    redirect_uri?: string
    client_id?: string
    client_secret?: string
    code_verifier?: string
    refresh_token?: string
    scope?: string
  }

  if (!grant_type) {
    return NextResponse.json(
      { error: 'invalid_request', error_description: 'grant_type is required' },
      { status: 400 }
    )
  }

  if (grant_type === 'authorization_code') {
    return handleAuthorizationCodeGrant({
      code: code as string,
      redirect_uri: redirect_uri as string,
      client_id: client_id as string,
      client_secret,
      code_verifier,
    })
  } else if (grant_type === 'refresh_token') {
    return handleRefreshTokenGrant({
      refresh_token: refresh_token as string,
      client_id: client_id as string,
      client_secret,
      scope,
    })
  } else {
    return NextResponse.json(
      {
        error: 'unsupported_grant_type',
        error_description: 'Unsupported grant type',
      },
      { status: 400 }
    )
  }
}

async function handleAuthorizationCodeGrant({
  code,
  redirect_uri,
  client_id,
  client_secret,
  code_verifier,
}: {
  code: string
  redirect_uri: string
  client_id: string
  client_secret?: string
  code_verifier?: string
}): Promise<NextResponse> {
  if (!code || !redirect_uri || !client_id) {
    return NextResponse.json(
      {
        error: 'invalid_request',
        error_description: 'Missing required parameters',
      },
      { status: 400 }
    )
  }

  // Validate client
  const client = oauthStorage.getClient(client_id)
  if (!client) {
    return NextResponse.json(
      { error: 'invalid_client', error_description: 'Unknown client' },
      { status: 401 }
    )
  }

  // Validate client secret for confidential clients
  if (client.client_secret && client.client_secret !== client_secret) {
    return NextResponse.json(
      {
        error: 'invalid_client',
        error_description: 'Invalid client credentials',
      },
      { status: 401 }
    )
  }

  // Get and validate authorization code
  const authCode = oauthStorage.getAuthCode(code)
  if (!authCode) {
    return NextResponse.json(
      {
        error: 'invalid_grant',
        error_description: 'Invalid or expired authorization code',
      },
      { status: 400 }
    )
  }

  // Validate code parameters
  if (
    authCode.client_id !== client_id ||
    authCode.redirect_uri !== redirect_uri
  ) {
    return NextResponse.json(
      {
        error: 'invalid_grant',
        error_description: 'Authorization code does not match request',
      },
      { status: 400 }
    )
  }

  // Validate PKCE if present
  if (authCode.code_challenge) {
    if (!code_verifier) {
      return NextResponse.json(
        {
          error: 'invalid_request',
          error_description: 'code_verifier is required',
        },
        { status: 400 }
      )
    }

    const isValidPKCE = PKCEUtils.verifyCodeChallenge(
      code_verifier,
      authCode.code_challenge,
      authCode.code_challenge_method || 'S256'
    )

    if (!isValidPKCE) {
      return NextResponse.json(
        { error: 'invalid_grant', error_description: 'Invalid code verifier' },
        { status: 400 }
      )
    }
  }

  // Consume the authorization code (single use)
  oauthStorage.consumeAuthCode(code)

  // Generate tokens
  const accessToken = OAuthUtils.generateAccessToken()
  const refreshToken = OAuthUtils.generateRefreshToken()
  const expiresIn = 3600 // 1 hour

  const tokenData = {
    access_token: accessToken,
    refresh_token: refreshToken,
    token_type: 'Bearer' as const,
    expires_in: expiresIn,
    scope: authCode.scope,
    client_id: authCode.client_id,
    user_id: authCode.user_id,
    expires_at: Date.now() + expiresIn * 1000,
  }

  oauthStorage.storeAccessToken(tokenData)

  return NextResponse.json({
    access_token: accessToken,
    token_type: 'Bearer',
    expires_in: expiresIn,
    refresh_token: refreshToken,
    scope: authCode.scope,
  })
}

async function handleRefreshTokenGrant({
  refresh_token,
  client_id,
  client_secret,
  scope,
}: {
  refresh_token: string
  client_id: string
  client_secret?: string
  scope?: string
}): Promise<NextResponse> {
  if (!refresh_token || !client_id) {
    return NextResponse.json(
      {
        error: 'invalid_request',
        error_description: 'Missing required parameters',
      },
      { status: 400 }
    )
  }

  // Validate client
  const client = oauthStorage.getClient(client_id)
  if (!client) {
    return NextResponse.json(
      { error: 'invalid_client', error_description: 'Unknown client' },
      { status: 401 }
    )
  }

  // Validate client secret for confidential clients
  if (client.client_secret && client.client_secret !== client_secret) {
    return NextResponse.json(
      {
        error: 'invalid_client',
        error_description: 'Invalid client credentials',
      },
      { status: 401 }
    )
  }

  // Get refresh token
  const tokenData = oauthStorage.getRefreshToken(refresh_token)
  if (!tokenData || tokenData.client_id !== client_id) {
    return NextResponse.json(
      { error: 'invalid_grant', error_description: 'Invalid refresh token' },
      { status: 400 }
    )
  }

  // Generate new access token
  const newAccessToken = OAuthUtils.generateAccessToken()
  const newRefreshToken = OAuthUtils.generateRefreshToken()
  const expiresIn = 3600 // 1 hour

  // Revoke old tokens
  oauthStorage.revokeToken(tokenData.access_token)

  const newTokenData = {
    access_token: newAccessToken,
    refresh_token: newRefreshToken,
    token_type: 'Bearer' as const,
    expires_in: expiresIn,
    scope: scope || tokenData.scope, // Allow scope narrowing
    client_id: tokenData.client_id,
    user_id: tokenData.user_id,
    expires_at: Date.now() + expiresIn * 1000,
  }

  oauthStorage.storeAccessToken(newTokenData)

  return NextResponse.json({
    access_token: newAccessToken,
    token_type: 'Bearer',
    expires_in: expiresIn,
    refresh_token: newRefreshToken,
    scope: newTokenData.scope,
  })
}
