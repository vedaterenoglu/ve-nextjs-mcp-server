import { randomBytes } from 'crypto'
import { NextRequest, NextResponse } from 'next/server'
import { oauthStorage } from '@/lib/oauth'

interface ClientRegistrationRequest {
  redirect_uris: string[]
  response_types?: string[]
  grant_types?: string[]
  application_type?: 'web' | 'native'
  client_name?: string
  client_uri?: string
  logo_uri?: string
  scope?: string
  contacts?: string[]
  tos_uri?: string
  policy_uri?: string
  jwks_uri?: string
  jwks?: object
  software_id?: string
  software_version?: string
}

interface ClientRegistrationResponse {
  client_id: string
  client_secret?: string
  client_id_issued_at: number
  client_secret_expires_at?: number
  redirect_uris: string[]
  response_types: string[]
  grant_types: string[]
  application_type: 'web' | 'native'
  client_name: string
  client_uri?: string
  logo_uri?: string
  scope: string
  contacts?: string[]
  tos_uri?: string
  policy_uri?: string
  jwks_uri?: string
  jwks?: object
  software_id?: string
  software_version?: string
  registration_access_token?: string
  registration_client_uri?: string
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const registrationRequest: ClientRegistrationRequest = await request.json()

    // Validate required fields
    if (
      !registrationRequest.redirect_uris ||
      registrationRequest.redirect_uris.length === 0
    ) {
      return NextResponse.json(
        {
          error: 'invalid_client_metadata',
          error_description: 'redirect_uris is required',
        },
        { status: 400 }
      )
    }

    // Validate redirect URIs
    for (const uri of registrationRequest.redirect_uris) {
      try {
        const url = new URL(uri)
        // Allow localhost for development, require HTTPS for production
        if (
          process.env.NODE_ENV === 'production' &&
          url.protocol !== 'https:' &&
          url.hostname !== 'localhost'
        ) {
          return NextResponse.json(
            {
              error: 'invalid_redirect_uri',
              error_description: 'redirect_uris must use HTTPS in production',
            },
            { status: 400 }
          )
        }
      } catch {
        return NextResponse.json(
          {
            error: 'invalid_redirect_uri',
            error_description: `Invalid redirect URI: ${uri}`,
          },
          { status: 400 }
        )
      }
    }

    // Generate client credentials
    const clientId = `mcp_${randomBytes(16).toString('hex')}`
    const clientSecret =
      registrationRequest.application_type === 'native'
        ? undefined
        : randomBytes(32).toString('hex')
    const issuedAt = Math.floor(Date.now() / 1000)

    // Set defaults
    const responseTypes = registrationRequest.response_types || ['code']
    const grantTypes = registrationRequest.grant_types || ['authorization_code']
    const applicationType = registrationRequest.application_type || 'web'
    const clientName = registrationRequest.client_name || 'MCP Client'
    const scope = registrationRequest.scope || 'mcp:tools'

    // Validate response types and grant types
    const supportedResponseTypes = ['code']
    const supportedGrantTypes = ['authorization_code', 'refresh_token']

    if (!responseTypes.every(type => supportedResponseTypes.includes(type))) {
      return NextResponse.json(
        {
          error: 'invalid_client_metadata',
          error_description: 'Unsupported response_type',
        },
        { status: 400 }
      )
    }

    if (!grantTypes.every(type => supportedGrantTypes.includes(type))) {
      return NextResponse.json(
        {
          error: 'invalid_client_metadata',
          error_description: 'Unsupported grant_type',
        },
        { status: 400 }
      )
    }

    // Create client
    const client = {
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uris: registrationRequest.redirect_uris,
      response_types: responseTypes,
      grant_types: grantTypes,
      client_name: clientName,
      scope: scope,
    }

    // Register client
    oauthStorage.registerClient(client)

    // Prepare response
    const response: ClientRegistrationResponse = {
      client_id: clientId,
      client_id_issued_at: issuedAt,
      redirect_uris: registrationRequest.redirect_uris,
      response_types: responseTypes,
      grant_types: grantTypes,
      application_type: applicationType,
      client_name: clientName,
      scope: scope,
    }

    if (clientSecret) {
      response.client_secret = clientSecret
      response.client_secret_expires_at = 0 // Never expires
    }

    // Add optional fields
    if (registrationRequest.client_uri)
      response.client_uri = registrationRequest.client_uri
    if (registrationRequest.logo_uri)
      response.logo_uri = registrationRequest.logo_uri
    if (registrationRequest.contacts)
      response.contacts = registrationRequest.contacts
    if (registrationRequest.tos_uri)
      response.tos_uri = registrationRequest.tos_uri
    if (registrationRequest.policy_uri)
      response.policy_uri = registrationRequest.policy_uri
    if (registrationRequest.jwks_uri)
      response.jwks_uri = registrationRequest.jwks_uri
    if (registrationRequest.jwks) response.jwks = registrationRequest.jwks
    if (registrationRequest.software_id)
      response.software_id = registrationRequest.software_id
    if (registrationRequest.software_version)
      response.software_version = registrationRequest.software_version

    return NextResponse.json(response, {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
    })
  } catch {
    return NextResponse.json(
      {
        error: 'invalid_client_metadata',
        error_description: 'Invalid JSON or request format',
      },
      { status: 400 }
    )
  }
}
