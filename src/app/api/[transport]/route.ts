import { createMcpHandler } from '@vercel/mcp-adapter'
import { z } from 'zod'

// Token verification function (for future use when auth is enabled)
// async function verifyToken(token: string): Promise<{ valid: boolean; userId?: string }> {
//   // Try user-specific API key first
//   const { validateUserApiKey } = await import('@lib/api-keys')
//   const userKeyResult = validateUserApiKey(token)

//   if (userKeyResult.valid) {
//     return { valid: true, userId: userKeyResult.userId }
//   }

//   // Try OAuth token
//   const { oauthStorage } = await import('@lib/oauth')
//   const oauthToken = oauthStorage.getAccessToken(token)

//   if (oauthToken) {
//     return { valid: true }
//   }

//   // Fallback to simple bearer token
//   const { validateToken } = await import('@lib/auth')
//   const result = await validateToken(token)
//   return { valid: result.valid }
// }

const baseHandler = createMcpHandler(
  server => {
    server.tool(
      'get_nextjs_docs',
      'Search and retrieve Next.js documentation',
      {
        topic: z
          .string()
          .describe(
            'Next.js topic to search for (e.g., "app router", "middleware", "api routes")'
          ),
      },
      async ({ topic }) => {
        const searchUrl = `https://nextjs.org/docs?search=${encodeURIComponent(topic)}`

        return {
          content: [
            {
              type: 'text',
              text: `Found Next.js documentation for: ${topic}\nSearch URL: ${searchUrl}\n\nThis will help you understand ${topic} in Next.js development.`,
            },
          ],
        }
      }
    )
  },
  {},
  {
    basePath: '/api',
    verboseLogs: true,
  }
)

// Use base handler directly for now (auth handled by middleware)
const handler = baseHandler

export { handler as GET, handler as POST }
