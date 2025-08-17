// In-memory token storage (use database in production)
const tokens = new Map<
  string,
  {
    clientId: string
    scopes: string[]
    expiresAt: number
  }
>()

// Token validation function
export async function validateToken(token: string): Promise<{
  valid: boolean
  clientId?: string
  scopes?: string[]
}> {
  const tokenData = tokens.get(token)

  if (!tokenData || tokenData.expiresAt < Date.now()) {
    if (tokenData) tokens.delete(token) // Clean up expired token
    return { valid: false }
  }

  return {
    valid: true,
    clientId: tokenData.clientId,
    scopes: tokenData.scopes,
  }
}

// Store token
export function storeToken(
  token: string,
  clientId: string,
  scopes: string[],
  expiresAt: number
): void {
  tokens.set(token, { clientId, scopes, expiresAt })
}