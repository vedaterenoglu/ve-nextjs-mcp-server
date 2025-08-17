# MCP Server Authentication Examples

This directory contains examples of how to authenticate with the MCP server using different methods.

## Authentication Methods

### 1. Simple Bearer Token

The simplest method for testing and development:

```bash
# Get a token
curl -X POST http://localhost:3000/api/auth/token \
  -H "Content-Type: application/json" \
  -d '{
    "clientId": "mcp-client",
    "clientSecret": "mcp-secret",
    "scopes": ["mcp:tools"]
  }'

# Use the token
curl -X POST http://localhost:3000/api/mcp \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
      "name": "get_nextjs_docs",
      "arguments": {"topic": "app router"}
    },
    "id": 1
  }'
```

### 2. OAuth 2.1 with PKCE

Full OAuth 2.1 implementation with PKCE support:

#### Step 1: Register Client (Optional)

```bash
curl -X POST http://localhost:3000/api/oauth/register \
  -H "Content-Type: application/json" \
  -d '{
    "redirect_uris": ["http://localhost:3000/auth/callback"],
    "response_types": ["code"],
    "grant_types": ["authorization_code", "refresh_token"],
    "application_type": "web",
    "client_name": "My MCP Client",
    "scope": "mcp:tools mcp:resources"
  }'
```

#### Step 2: Authorization Flow

1. **Generate PKCE parameters:**
   ```javascript
   import { randomBytes, createHash } from 'crypto';
   
   const codeVerifier = randomBytes(32).toString('base64url');
   const codeChallenge = createHash('sha256').update(codeVerifier).digest('base64url');
   ```

2. **Redirect to authorization endpoint:**
   ```
   http://localhost:3000/api/oauth/authorize?
     response_type=code&
     client_id=mcp-client&
     redirect_uri=http://localhost:3000/auth/callback&
     scope=mcp:tools&
     state=your-state-value&
     code_challenge=CODE_CHALLENGE&
     code_challenge_method=S256
   ```

3. **Exchange code for tokens:**
   ```bash
   curl -X POST http://localhost:3000/api/oauth/token \
     -H "Content-Type: application/json" \
     -d '{
       "grant_type": "authorization_code",
       "code": "AUTHORIZATION_CODE",
       "redirect_uri": "http://localhost:3000/auth/callback",
       "client_id": "mcp-client",
       "client_secret": "mcp-secret",
       "code_verifier": "CODE_VERIFIER"
     }'
   ```

4. **Use access token:**
   ```bash
   curl -X POST http://localhost:3000/api/mcp \
     -H "Authorization: Bearer ACCESS_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"jsonrpc": "2.0", "method": "tools/list", "id": 1}'
   ```

#### Step 3: Refresh Token

```bash
curl -X POST http://localhost:3000/api/oauth/token \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "refresh_token",
    "refresh_token": "REFRESH_TOKEN",
    "client_id": "mcp-client",
    "client_secret": "mcp-secret"
  }'
```

## OAuth Endpoints

### Server Metadata
- `GET /.well-known/oauth-authorization-server` - OAuth server metadata

### Authorization Flow
- `GET /api/oauth/authorize` - Authorization endpoint
- `POST /api/oauth/token` - Token endpoint
- `POST /api/oauth/register` - Client registration
- `POST /api/oauth/revoke` - Token revocation

## Environment Variables

Set these in your `.env.local`:

```env
# Basic auth
MCP_CLIENT_ID=mcp-client
MCP_CLIENT_SECRET=mcp-secret

# OAuth server
NEXTAUTH_URL=http://localhost:3000

# For production
NODE_ENV=production
```

## Security Notes

1. **HTTPS Required**: In production, all OAuth endpoints require HTTPS
2. **PKCE Recommended**: Always use PKCE for public clients
3. **Short-lived Tokens**: Access tokens expire in 1 hour
4. **Secure Storage**: Store refresh tokens securely
5. **State Parameter**: Always use state parameter to prevent CSRF

## Client Libraries

Use the provided `PKCEClient` class in `oauth-client.js` for JavaScript/Node.js applications:

```javascript
import { PKCEClient } from './oauth-client.js';

const client = new PKCEClient({
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret', // Optional for public clients
  scope: 'mcp:tools mcp:resources'
});

// Get authorization URL
const authUrl = client.getAuthorizationUrl('state-value');
console.log('Visit:', authUrl);

// After user authorizes, exchange code for tokens
const tokens = await client.exchangeCodeForTokens(authorizationCode);

// Make authenticated requests
const response = await client.makeAuthenticatedRequest('/api/mcp', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ /* MCP request */ })
});
```