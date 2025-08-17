import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/api/keys(.*)', '/api/analytics(.*)'])
const isPublicRoute = createRouteMatcher(['/'])
const isApiKeyRoute = createRouteMatcher(['/api/test-request(.*)', '/api/webhook(.*)'])

export default clerkMiddleware(async (auth, req) => {
  // Skip Clerk auth for API key authenticated routes
  if (isApiKeyRoute(req)) {
    return
  }
  
  // Allow public routes without authentication
  if (isPublicRoute(req)) {
    return
  }
  
  if (isProtectedRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
