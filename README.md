# MCP Server with Clerk Authentication

A Next.js-based Model Context Protocol (MCP) server with integrated Clerk authentication and user-specific API key management.

## Quick Start

1. **Clone and install**:

   ```bash
   git clone [repository-url]
   cd ve-nextjs-mcp-server
   npm install
   ```

2. **Configure Clerk** (see [PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md) for detailed instructions):
   - Create Clerk account and application
   - Disable sign-ups in Clerk dashboard
   - Copy environment variables to `.env.local`

3. **Start development server**:

   ```bash
   npm run dev
   ```

4. **Access dashboard**:
   - Visit <http://localhost:3000>
   - Sign in with authorized account
   - Create API keys for MCP access

## Documentation

- **[PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md)** - Complete project documentation for AI agents and developers
- **[examples/](./examples/)** - Authentication examples and client code

## Features

- 🔐 **Clerk Authentication** - Sign-in only access control
- 🗝️ **API Key Management** - User-specific key creation and management
- ⚙️ **MCP Integration** - Ready-to-use MCP server with Next.js documentation tool
- 🛡️ **Multiple Auth Methods** - User keys, OAuth 2.1 with PKCE (Proof Key for Code Exchange), bearer tokens
- 📱 **Responsive Dashboard** - Modern UI for key management

## API Usage

```bash
# Create API key in dashboard first, then:
curl -X POST http://localhost:3000/api/mcp \
  -H "Authorization: Bearer mcp_your_api_key_here" \
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

## Security

- ✅ Sign-in only access (no public registration)
- ✅ Admin-controlled user management
- ✅ User-isolated API keys
- ✅ Scoped permissions
- ✅ Secure key generation

For complete documentation, see [PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md).