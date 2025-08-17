'use client'

interface HomeErrorFallbackProps {
  error?: Error
  resetError: () => void
  goHome: () => void
}

export function HomeErrorFallback({ error, resetError }: HomeErrorFallbackProps) {
  const handleRefreshPage = () => {
    if (typeof window !== 'undefined') {
      window.location.reload()
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #34d399 0%, #047857 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '48px',
        maxWidth: '600px',
        width: '100%',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '4rem',
          marginBottom: '24px'
        }}>
          🏠💔
        </div>
        
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '16px',
          background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Welcome Page Error
        </h1>
        
        <p style={{
          fontSize: '1.125rem',
          color: '#6b7280',
          marginBottom: '32px',
          lineHeight: '1.75'
        }}>
          Something went wrong while loading the welcome page. This might be related to 
          authentication services or page rendering issues.
        </p>

        <div style={{
          background: '#f0f9ff',
          borderLeft: '4px solid #0ea5e9',
          padding: '16px',
          marginBottom: '32px',
          textAlign: 'left',
          borderRadius: '4px'
        }}>
          <h3 style={{
            fontSize: '1rem',
            fontWeight: '600',
            color: '#0369a1',
            marginBottom: '8px'
          }}>
            Common solutions:
          </h3>
          <ul style={{
            fontSize: '0.875rem',
            color: '#075985',
            margin: 0,
            paddingLeft: '20px'
          }}>
            <li>Refresh the page to reload authentication</li>
            <li>Clear browser cache and cookies</li>
            <li>Check your internet connection</li>
            <li>Try accessing the site in incognito mode</li>
          </ul>
        </div>

        {process.env.NODE_ENV === 'development' && error && (
          <details style={{
            marginBottom: '32px',
            textAlign: 'left',
            background: '#f9fafb',
            padding: '16px',
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}>
            <summary style={{ 
              cursor: 'pointer', 
              fontWeight: '600', 
              marginBottom: '12px',
              color: '#374151'
            }}>
              Error Information (Development Mode)
            </summary>
            <pre style={{
              whiteSpace: 'pre-wrap',
              color: '#dc2626',
              fontSize: '0.75rem',
              background: '#fef2f2',
              padding: '12px',
              borderRadius: '4px',
              overflow: 'auto'
            }}>
              {error.message}
              {error.stack && '\n\n' + error.stack}
            </pre>
          </details>
        )}

        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={handleRefreshPage}
            style={{
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
            Refresh Page
          </button>
          
          <button
            onClick={resetError}
            style={{
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
            Try Again
          </button>
        </div>

        <p style={{
          fontSize: '0.875rem',
          color: '#9ca3af',
          marginTop: '24px'
        }}>
          If the problem persists, please contact support or try again later.
        </p>
      </div>
    </div>
  )
}