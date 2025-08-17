'use client'

interface DashboardErrorFallbackProps {
  error?: Error
  resetError: () => void
  goHome: () => void
}

export function DashboardErrorFallback({ error, resetError, goHome }: DashboardErrorFallbackProps) {

  const handleRefreshData = () => {
    // Clear any cached data and try again
    if (typeof window !== 'undefined') {
      window.location.reload()
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
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
          📊💥
        </div>
        
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '16px',
          color: '#dc2626'
        }}>
          Dashboard Error
        </h1>
        
        <p style={{
          fontSize: '1.125rem',
          color: '#6b7280',
          marginBottom: '32px',
          lineHeight: '1.75'
        }}>
          We couldn&apos;t load your dashboard. This might be due to a temporary server issue, 
          network connectivity problems, or corrupted data.
        </p>

        <div style={{
          background: '#fef2f2',
          borderLeft: '4px solid #dc2626',
          padding: '16px',
          marginBottom: '32px',
          textAlign: 'left',
          borderRadius: '4px'
        }}>
          <h3 style={{
            fontSize: '1rem',
            fontWeight: '600',
            color: '#991b1b',
            marginBottom: '8px'
          }}>
            Possible causes:
          </h3>
          <ul style={{
            fontSize: '0.875rem',
            color: '#7f1d1d',
            margin: 0,
            paddingLeft: '20px'
          }}>
            <li>API server connection issues</li>
            <li>Authentication token expired</li>
            <li>Database connectivity problems</li>
            <li>Browser cache corruption</li>
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
              Technical Details (Development Mode)
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
            onClick={handleRefreshData}
            style={{
              background: '#dc2626',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = '#b91c1c'}
            onMouseOut={(e) => e.currentTarget.style.background = '#dc2626'}
          >
            Refresh Page
          </button>
          
          <button
            onClick={resetError}
            style={{
              background: '#059669',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = '#047857'}
            onMouseOut={(e) => e.currentTarget.style.background = '#059669'}
          >
            Try Again
          </button>
          
          <button
            onClick={goHome}
            style={{
              background: 'transparent',
              color: '#6b7280',
              padding: '12px 24px',
              borderRadius: '8px',
              border: '2px solid #d1d5db',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#f3f4f6'
              e.currentTarget.style.borderColor = '#9ca3af'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = '#d1d5db'
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}