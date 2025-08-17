import { randomBytes, createHash } from 'crypto'

// OAuth 2.1 types
export interface OAuthClient {
  client_id: string
  client_secret?: string
  redirect_uris: string[]
  grant_types: string[]
  response_types: string[]
  client_name: string
  scope: string
}

export interface AuthorizationCode {
  code: string
  client_id: string
  redirect_uri: string
  scope: string
  code_challenge?: string
  code_challenge_method?: 'S256' | 'plain'
  expires_at: number
  user_id?: string
}

export interface AccessToken {
  access_token: string
  refresh_token?: string
  token_type: 'Bearer'
  expires_in: number
  scope: string
  client_id: string
  user_id?: string
  expires_at: number
}

// In-memory storage (use database in production)
export class OAuthStorage {
  private clients = new Map<string, OAuthClient>()
  private authCodes = new Map<string, AuthorizationCode>()
  private accessTokens = new Map<string, AccessToken>()
  private refreshTokens = new Map<string, AccessToken>()

  constructor() {
    // Register default client
    this.registerClient({
      client_id: 'mcp-client',
      client_secret: 'mcp-secret',
      redirect_uris: [
        'http://localhost:3000/auth/callback',
        'urn:ietf:wg:oauth:2.0:oob',
      ],
      grant_types: ['authorization_code', 'refresh_token'],
      response_types: ['code'],
      client_name: 'MCP Client',
      scope: 'mcp:tools mcp:resources',
    })
  }

  registerClient(client: OAuthClient): void {
    this.clients.set(client.client_id, client)
  }

  getClient(clientId: string): OAuthClient | undefined {
    return this.clients.get(clientId)
  }

  storeAuthCode(code: AuthorizationCode): void {
    this.authCodes.set(code.code, code)
  }

  getAuthCode(code: string): AuthorizationCode | undefined {
    const authCode = this.authCodes.get(code)
    if (authCode && authCode.expires_at < Date.now()) {
      this.authCodes.delete(code)
      return undefined
    }
    return authCode
  }

  consumeAuthCode(code: string): void {
    this.authCodes.delete(code)
  }

  storeAccessToken(token: AccessToken): void {
    this.accessTokens.set(token.access_token, token)
    if (token.refresh_token) {
      this.refreshTokens.set(token.refresh_token, token)
    }
  }

  getAccessToken(token: string): AccessToken | undefined {
    const accessToken = this.accessTokens.get(token)
    if (accessToken && accessToken.expires_at < Date.now()) {
      this.accessTokens.delete(token)
      if (accessToken.refresh_token) {
        this.refreshTokens.delete(accessToken.refresh_token)
      }
      return undefined
    }
    return accessToken
  }

  getRefreshToken(token: string): AccessToken | undefined {
    return this.refreshTokens.get(token)
  }

  revokeToken(token: string): boolean {
    const accessToken = this.accessTokens.get(token)
    if (accessToken) {
      this.accessTokens.delete(token)
      if (accessToken.refresh_token) {
        this.refreshTokens.delete(accessToken.refresh_token)
      }
      return true
    }

    const refreshToken = this.refreshTokens.get(token)
    if (refreshToken) {
      this.refreshTokens.delete(token)
      this.accessTokens.delete(refreshToken.access_token)
      return true
    }

    return false
  }
}

// PKCE utilities
export class PKCEUtils {
  static generateCodeVerifier(): string {
    return randomBytes(32).toString('base64url')
  }

  static generateCodeChallenge(verifier: string): string {
    return createHash('sha256').update(verifier).digest('base64url')
  }

  static verifyCodeChallenge(
    verifier: string,
    challenge: string,
    method: 'S256' | 'plain' = 'S256'
  ): boolean {
    if (method === 'plain') {
      return verifier === challenge
    }
    return this.generateCodeChallenge(verifier) === challenge
  }
}

// OAuth utilities
export class OAuthUtils {
  static generateAuthorizationCode(): string {
    return randomBytes(32).toString('hex')
  }

  static generateAccessToken(): string {
    return randomBytes(32).toString('hex')
  }

  static generateRefreshToken(): string {
    return randomBytes(32).toString('hex')
  }

  static parseScopes(scope?: string): string[] {
    return scope ? scope.split(' ').filter(Boolean) : []
  }

  static formatScopes(scopes: string[]): string {
    return scopes.join(' ')
  }
}

// Global storage instance
export const oauthStorage = new OAuthStorage()
