/**
 * OAuth 2.1 Client Example with PKCE
 * This example shows how to authenticate with the MCP server using OAuth 2.1
 */

import { randomBytes, createHash } from 'crypto';

class PKCEClient {
  constructor(config) {
    this.config = {
      clientId: config.clientId,
      clientSecret: config.clientSecret, // Optional for public clients
      redirectUri: config.redirectUri || 'http://localhost:3000/auth/callback',
      scope: config.scope || 'mcp:tools',
      authorizationUrl: config.authorizationUrl || 'http://localhost:3000/api/oauth/authorize',
      tokenUrl: config.tokenUrl || 'http://localhost:3000/api/oauth/token',
      ...config
    };
  }

  // Generate PKCE code verifier and challenge
  generatePKCE() {
    const codeVerifier = randomBytes(32).toString('base64url');
    const codeChallenge = createHash('sha256').update(codeVerifier).digest('base64url');
    
    return {
      codeVerifier,
      codeChallenge,
      codeChallengeMethod: 'S256'
    };
  }

  // Step 1: Generate authorization URL
  getAuthorizationUrl(state) {
    const pkce = this.generatePKCE();
    
    // Store code verifier for later use
    this.codeVerifier = pkce.codeVerifier;
    
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: this.config.clientId,
      redirect_uri: this.config.redirectUri,
      scope: this.config.scope,
      state: state || randomBytes(16).toString('hex'),
      code_challenge: pkce.codeChallenge,
      code_challenge_method: pkce.codeChallengeMethod
    });

    return `${this.config.authorizationUrl}?${params.toString()}`;
  }

  // Step 2: Exchange authorization code for tokens
  async exchangeCodeForTokens(code) {
    if (!this.codeVerifier) {
      throw new Error('Code verifier not found. Call getAuthorizationUrl first.');
    }

    const body = {
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: this.config.redirectUri,
      client_id: this.config.clientId,
      code_verifier: this.codeVerifier
    };

    // Add client secret for confidential clients
    if (this.config.clientSecret) {
      body.client_secret = this.config.clientSecret;
    }

    const response = await fetch(this.config.tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Token exchange failed: ${error.error_description || error.error}`);
    }

    const tokens = await response.json();
    this.accessToken = tokens.access_token;
    this.refreshToken = tokens.refresh_token;
    this.expiresAt = Date.now() + (tokens.expires_in * 1000);
    
    return tokens;
  }

  // Step 3: Refresh access token
  async refreshAccessToken() {
    if (!this.refreshToken) {
      throw new Error('No refresh token available');
    }

    const body = {
      grant_type: 'refresh_token',
      refresh_token: this.refreshToken,
      client_id: this.config.clientId
    };

    if (this.config.clientSecret) {
      body.client_secret = this.config.clientSecret;
    }

    const response = await fetch(this.config.tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Token refresh failed: ${error.error_description || error.error}`);
    }

    const tokens = await response.json();
    this.accessToken = tokens.access_token;
    this.refreshToken = tokens.refresh_token;
    this.expiresAt = Date.now() + (tokens.expires_in * 1000);
    
    return tokens;
  }

  // Check if token needs refresh
  needsRefresh() {
    return !this.accessToken || Date.now() > (this.expiresAt - 60000); // Refresh 1 minute before expiry
  }

  // Get valid access token (with automatic refresh)
  async getAccessToken() {
    if (this.needsRefresh()) {
      if (this.refreshToken) {
        await this.refreshAccessToken();
      } else {
        throw new Error('No valid access token and no refresh token available');
      }
    }
    return this.accessToken;
  }

  // Make authenticated request to MCP server
  async makeAuthenticatedRequest(url, options = {}) {
    const token = await this.getAccessToken();
    
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        'Authorization': `Bearer ${token}`
      }
    });
  }
}

// Example usage
async function example() {
  // 1. Simple Bearer Token (for testing)
  console.log('=== Simple Bearer Token Example ===');
  
  // First, get a token
  const tokenResponse = await fetch('http://localhost:3000/api/auth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      clientId: 'mcp-client',
      clientSecret: 'mcp-secret',
      scopes: ['mcp:tools']
    })
  });
  
  const { access_token } = await tokenResponse.json();
  console.log('Got access token:', access_token);
  
  // Use token with MCP server
  const mcpResponse = await fetch('http://localhost:3000/api/mcp', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'tools/call',
      params: {
        name: 'get_nextjs_docs',
        arguments: { topic: 'app router' }
      },
      id: 1
    })
  });
  
  console.log('MCP Response:', await mcpResponse.json());
  
  // 2. OAuth 2.1 with PKCE Example
  console.log('\n=== OAuth 2.1 with PKCE Example ===');
  
  const client = new PKCEClient({
    clientId: 'mcp-client',
    clientSecret: 'mcp-secret', // Optional for public clients
    redirectUri: 'http://localhost:3000/auth/callback',
    scope: 'mcp:tools mcp:resources'
  });
  
  // Generate authorization URL
  const authUrl = client.getAuthorizationUrl('my-state-value');
  console.log('Authorization URL:', authUrl);
  console.log('Visit this URL to authorize the application');
  
  // In a real application, you would:
  // 1. Redirect user to authUrl
  // 2. User authorizes and gets redirected back with code
  // 3. Extract code from redirect URL
  // 4. Exchange code for tokens
  
  // For demo, we'll simulate the authorization
  // (In practice, you'd get this from the redirect URI)
  // const code = 'authorization_code_from_redirect';
  // const tokens = await client.exchangeCodeForTokens(code);
  // console.log('Tokens:', tokens);
  
  // Make authenticated requests
  // const response = await client.makeAuthenticatedRequest('http://localhost:3000/api/mcp', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ /* MCP request */ })
  // });
}

// Client Registration Example
async function registerClient() {
  console.log('=== Client Registration Example ===');
  
  const registrationRequest = {
    redirect_uris: ['http://localhost:3000/auth/callback'],
    response_types: ['code'],
    grant_types: ['authorization_code', 'refresh_token'],
    application_type: 'web',
    client_name: 'My MCP Client',
    scope: 'mcp:tools mcp:resources'
  };
  
  const response = await fetch('http://localhost:3000/api/oauth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(registrationRequest)
  });
  
  const clientInfo = await response.json();
  console.log('Registered client:', clientInfo);
  
  return clientInfo;
}

// Export for use
export { PKCEClient, registerClient };

// Run example if called directly
if (import.meta.main) {
  example().catch(console.error);
}