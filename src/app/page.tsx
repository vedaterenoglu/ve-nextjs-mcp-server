'use client'

import { useAuth, SignInButton, SignUpButton } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { ErrorBoundary } from '@/components/error-boundary'
import { HomeErrorFallback } from '@/components/home-error-fallback'

function HomePageContent() {
  const { isSignedIn, isLoaded } = useAuth()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push('/dashboard')
    }
  }, [isLoaded, isSignedIn, router])

  if (!isLoaded || !mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-teal-900 dark:to-cyan-900" style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        fontSize: '18px'
      }}>
        <div style={{ color: 'white' }}>Loading...</div>
      </div>
    )
  }

  if (isSignedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-teal-900 dark:to-cyan-900" style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        fontSize: '18px'
      }}>
        <div style={{ color: 'white' }}>Redirecting to dashboard...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-teal-900 dark:to-cyan-900" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: mounted && theme === 'dark' ? '#1f2937' : 'white',
        borderRadius: '12px',
        padding: '48px',
        maxWidth: '600px',
        width: '100%',
        boxShadow: mounted && theme === 'dark' 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' 
          : '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '16px',
          background: 'linear-gradient(135deg, #34d399 0%, #047857 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Next.js MCP Server
        </h1>
        
        <p style={{
          fontSize: '1.25rem',
          color: mounted && theme === 'dark' ? '#9ca3af' : '#6b7280',
          marginBottom: '32px',
          lineHeight: '1.75'
        }}>
          Next.js Model Context Protocol Server with Clerk Authentication. 
          Manage your Next.js MCP Server connections, API keys, and monitor analytics with ease.
        </p>

        <div style={{
          background: mounted && theme === 'dark' ? '#374151' : '#f8fafc',
          borderRadius: '8px',
          padding: '24px',
          marginBottom: '32px',
          textAlign: 'left'
        }}>
          <h3 style={{
            fontSize: '1.125rem',
            fontWeight: '600',
            marginBottom: '16px',
            color: mounted && theme === 'dark' ? '#f3f4f6' : '#374151'
          }}>
            Features:
          </h3>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            color: mounted && theme === 'dark' ? '#d1d5db' : '#6b7280'
          }}>
            <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#10b981', marginRight: '8px', fontSize: '1.2rem' }}>✓</span>
              Secure authentication with Clerk
            </li>
            <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#10b981', marginRight: '8px', fontSize: '1.2rem' }}>✓</span>
              API key management
            </li>
            <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#10b981', marginRight: '8px', fontSize: '1.2rem' }}>✓</span>
              Next.js MCP Server integration
            </li>
            <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#10b981', marginRight: '8px', fontSize: '1.2rem' }}>✓</span>
              Real-time analytics
            </li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#10b981', marginRight: '8px', fontSize: '1.2rem' }}>✓</span>
              WebSocket support
            </li>
          </ul>
        </div>

        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <SignInButton mode="modal">
            <button style={{
              background: 'linear-gradient(135deg, #34d399 0%, #047857 100%)',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              boxShadow: '0 4px 14px 0 rgba(52, 211, 153, 0.39)'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Sign In
            </button>
          </SignInButton>
          
          <SignUpButton mode="modal">
            <button style={{
              background: 'transparent',
              color: '#047857',
              padding: '12px 24px',
              borderRadius: '8px',
              border: '2px solid #047857',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#047857'
              e.currentTarget.style.color = 'white'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#047857'
            }}
            >
              Sign Up
            </button>
          </SignUpButton>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    // Log home page specific errors
    console.error('Home Page Error:', error)
    console.error('Error Info:', errorInfo)
    
    // In production, you might want to send this to an error reporting service
    // Example: errorReportingService.log(error, { context: 'homepage', ...errorInfo })
  }

  return (
    <ErrorBoundary
      fallback={HomeErrorFallback}
      onError={handleError}
    >
      <HomePageContent />
    </ErrorBoundary>
  )
}