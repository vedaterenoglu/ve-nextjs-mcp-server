'use client'

import { useState, useEffect, useCallback } from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { format } from 'date-fns'
import {
  Key,
  Activity,
  BarChart3,
  Plus,
  Settings,
  Trash2,
  Copy,
  CheckCircle,
  TrendingUp,
  Zap,
  RefreshCw,
} from 'lucide-react'
import { CreateApiKeyModal } from '@/components/create-api-key-modal'
import { ApiKeySettingsModal } from '@/components/api-key-settings-modal'
import { LazyRecentActivity } from '@/components/lazy-recent-activity'
import { useDashboardAutoRefresh } from '@/hooks/useRealtimeUpdates'
import type { UserApiKey } from '@/lib/api-keys'
import { ErrorBoundary } from '@/components/error-boundary'
import { DashboardErrorFallback } from '@/components/dashboard-error-fallback'


function DashboardContent(): React.JSX.Element {
  const { user, isLoaded, isSignedIn } = useUser()
  const router = useRouter()
  const [copiedKey, setCopiedKey] = useState<string | null>(null)
  const [apiKeys, setApiKeys] = useState<UserApiKey[]>([])
  const [isLoadingKeys, setIsLoadingKeys] = useState(true)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showSettingsModal, setShowSettingsModal] = useState(false)
  const [selectedApiKey, setSelectedApiKey] = useState<UserApiKey | null>(null)
  const [error, setError] = useState('')
  const [requestStats, setRequestStats] = useState({
    totalRequests: 0,
    requestsThisMonth: 0,
    requestsToday: 0,
  })
  const [activityRefresh, setActivityRefresh] = useState<(() => void) | null>(null)
  
  // Handle activity refresh callback registration
  const handleActivityUpdate = (callback: () => void) => {
    setActivityRefresh(() => callback)
  }

  // Fetch API keys
  const fetchApiKeys = useCallback(async () => {
    try {
      setIsLoadingKeys(true)
      const response = await fetch('/api/keys')
      if (!response.ok) {
        console.error('API Keys error:', response.status, response.statusText)
        throw new Error(`Failed to fetch API keys (${response.status})`)
      }
      const keys = await response.json()
      setApiKeys(keys)
      setError('')
    } catch (err) {
      console.error('Failed to load API keys:', err)
      setError(err instanceof Error ? err.message : 'Failed to load API keys')
    } finally {
      setIsLoadingKeys(false)
    }
  }, [])

  // Fetch request analytics
  const fetchAnalytics = useCallback(async () => {
    try {
      const response = await fetch('/api/analytics')
      if (!response.ok) {
        console.error('Analytics API error:', response.status, response.statusText)
        // Set default values if analytics fail
        setRequestStats({
          totalRequests: 0,
          requestsThisMonth: 0,
          requestsToday: 0,
        })
        return
      }
      const stats = await response.json()
      setRequestStats(stats)
    } catch (err) {
      console.error('Failed to load analytics:', err)
      // Set default values if analytics fail
      setRequestStats({
        totalRequests: 0,
        requestsThisMonth: 0,
        requestsToday: 0,
      })
    }
  }, [])


  // Auto-refresh functionality
  const fetchAllData = () => {
    fetchApiKeys()
    fetchAnalytics()
    if (activityRefresh) {
      activityRefresh()
    }
  }
  
  
  const { manualRefresh } = useDashboardAutoRefresh(fetchAllData)

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/')
      return
    }
    if (isLoaded && isSignedIn) {
      fetchAllData()
    }
  }, [isLoaded, isSignedIn, router])

  const handleCreateSuccess = () => {
    fetchAllData()
  }

  const handleOpenSettings = (apiKey: UserApiKey) => {
    setSelectedApiKey(apiKey)
    setShowSettingsModal(true)
  }

  const handleCloseSettings = () => {
    setShowSettingsModal(false)
    setSelectedApiKey(null)
  }

  const handleSettingsUpdate = () => {
    fetchAllData()
  }

  const handleDeleteKey = async (keyId: string) => {
    if (!confirm('Are you sure you want to delete this API key? This action cannot be undone.')) {
      return
    }

    try {
      const response = await fetch(`/api/keys/${keyId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to delete API key')
      }

      // Refresh all data after deletion
      fetchAllData()
    } catch (err) {
      console.error('Failed to delete API key:', err)
      alert(err instanceof Error ? err.message : 'Failed to delete API key')
    }
  }

  const handleTestRequest = async (apiKey: string) => {
    try {
      const response = await fetch('/api/test-request', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        // Refresh all data after test
        fetchAllData()
        alert('Test request successful! Check your analytics.')
      } else {
        const error = await response.json()
        alert(`Test request failed: ${error.error}`)
      }
    } catch (err) {
      alert('Test request failed: Network error')
    }
  }

  const stats = [
    {
      title: 'Active API Keys',
      value: apiKeys.length.toString(),
      change: `${apiKeys.length} total keys`,
      icon: Key,
      color: 'text-emerald-600 dark:text-emerald-400',
      bgColor: 'bg-emerald-100 dark:bg-emerald-900/30',
      trend: 'up',
    },
    {
      title: 'Requests Today',
      value: requestStats.requestsToday.toString(),
      change: 'Last 24 hours',
      icon: TrendingUp,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      trend: requestStats.requestsToday > 0 ? 'up' : 'stable',
    },
    {
      title: 'This Month',
      value: requestStats.requestsThisMonth.toString(),
      change: 'Current month',
      icon: BarChart3,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
      trend: requestStats.requestsThisMonth > 0 ? 'up' : 'stable',
    },
    {
      title: 'Total Requests',
      value: requestStats.totalRequests.toLocaleString(),
      change: `${requestStats.requestsThisMonth} this month`,
      icon: Activity,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      trend: requestStats.requestsThisMonth > 0 ? 'up' : 'stable',
    },
  ]

  const handleCopyKey = async (keyId: string, key: string) => {
    try {
      await navigator.clipboard.writeText(key)
      setCopiedKey(keyId)
      setTimeout(() => setCopiedKey(null), 2000)
    } catch (err) {
      console.error('Failed to copy key:', err)
    }
  }


  if (!isLoaded) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-teal-900 dark:to-cyan-900'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600'></div>
      </div>
    )
  }

  if (!isSignedIn) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-teal-900 dark:to-cyan-900'>
        <div className='text-emerald-600 text-lg'>Redirecting to home...</div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-teal-900 dark:to-cyan-900'>
      <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-8 flex items-center justify-between'>
          <div>
            <h1 className='text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent'>
              Dashboard
            </h1>
            <p className='mt-2 text-gray-600 dark:text-gray-300'>
              Welcome back, {user?.firstName || 'User'}! Manage your Next.js MCP Server and API keys.
            </p>
          </div>
          <div className='flex items-center gap-3'>
            <button
              onClick={manualRefresh}
              className='flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors'
              title='Refresh dashboard data'
            >
              <RefreshCw className='h-4 w-4' />
              Refresh
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-200'
            >
              <div className='flex items-center justify-between'>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                {stat.trend === 'up' && (
                  <TrendingUp className='h-4 w-4 text-green-500' />
                )}
              </div>
              <div className='mt-4'>
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
                  {stat.value}
                </h3>
                <p className='text-sm font-medium text-gray-900 dark:text-white mt-1'>
                  {stat.title}
                </p>
                <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
                  {stat.change}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 xl:grid-cols-3 gap-8'>
          {/* API Keys Management */}
          <div className='xl:col-span-2'>
            <div className='bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl border border-white/20 dark:border-slate-700/50 shadow-lg'>
              <div className='p-6 border-b border-gray-200 dark:border-slate-700'>
                <div className='flex items-center justify-between'>
                  <div>
                    <div className='flex items-center gap-3'>
                      <h2 className='text-xl font-semibold text-gray-900 dark:text-white'>
                        API Keys
                      </h2>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        apiKeys.length >= 5 
                          ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                          : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400'
                      }`}>
                        {apiKeys.length}/5
                      </span>
                    </div>
                    <div className='flex items-center gap-6 mt-2 text-xs text-gray-500 dark:text-gray-400'>
                      <div className='flex items-center gap-1'>
                        <Zap className='h-3 w-3 text-blue-400' />
                        <span>Test</span>
                      </div>
                      <div className='flex items-center gap-1'>
                        <Settings className='h-3 w-3 text-gray-400' />
                        <span>Settings</span>
                      </div>
                      <div className='flex items-center gap-1'>
                        <Trash2 className='h-3 w-3 text-red-400' />
                        <span>Delete</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowCreateModal(true)}
                    disabled={apiKeys.length >= 5}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      apiKeys.length >= 5
                        ? 'bg-gray-400 dark:bg-gray-600 text-gray-200 cursor-not-allowed'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    }`}
                    title={apiKeys.length >= 5 ? 'Maximum 5 API keys allowed. Delete a key to create a new one.' : 'Create a new API key'}
                  >
                    <Plus className='h-4 w-4' />
                    Create New Key {apiKeys.length >= 5 && `(${apiKeys.length}/5)`}
                  </button>
                </div>
              </div>
              <div className='divide-y divide-gray-200 dark:divide-slate-700'>
                {error && (
                  <div className='p-6'>
                    <div className='p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg'>
                      <p className='text-sm text-red-600 dark:text-red-400'>{error}</p>
                    </div>
                  </div>
                )}
                {isLoadingKeys ? (
                  <div className='p-6 text-center'>
                    <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto'></div>
                    <p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>Loading API keys...</p>
                  </div>
                ) : apiKeys.length === 0 ? (
                  <div className='p-6 text-center'>
                    <Key className='h-12 w-12 text-gray-300 dark:text-gray-600 mx-auto mb-4' />
                    <p className='text-gray-500 dark:text-gray-400 mb-2'>No API keys found</p>
                    <p className='text-sm text-gray-400 dark:text-gray-500'>Create your first API key to get started. You can have up to 5 API keys.</p>
                  </div>
                ) : (
                  apiKeys.map(key => (
                    <div key={key.id} className='p-6'>
                      <div className='flex items-center justify-between mb-4'>
                        <div className='flex items-center gap-3'>
                          <div className='p-2 rounded-lg bg-green-100 dark:bg-green-900/30'>
                            <Key className='h-4 w-4 text-green-600 dark:text-green-400' />
                          </div>
                          <div>
                            <h3 className='font-medium text-gray-900 dark:text-white'>
                              {key.name}
                            </h3>
                            <p className='text-sm text-gray-500 dark:text-gray-400'>
                              Created {format(new Date(key.createdAt), 'yyyy-MM-dd')}
                            </p>
                          </div>
                        </div>
                        <div className='flex items-center gap-2'>
                          <span className='px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'>
                            active
                          </span>
                        </div>
                      </div>
                      
                      <div className='bg-gray-50 dark:bg-slate-900/50 rounded-lg p-3 mb-4'>
                        <div className='flex items-center justify-between'>
                          <code className='text-sm font-mono text-gray-600 dark:text-gray-300 truncate flex-1 mr-2'>
                            {key.key}
                          </code>
                          <button
                            onClick={() => handleCopyKey(key.id, key.key)}
                            className='p-1 hover:bg-gray-200 dark:hover:bg-slate-700 rounded transition-colors'
                          >
                            {copiedKey === key.id ? (
                              <CheckCircle className='h-4 w-4 text-green-500' />
                            ) : (
                              <Copy className='h-4 w-4 text-gray-400' />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className='flex items-center justify-between text-sm'>
                        <div className='flex items-center gap-4 text-gray-500 dark:text-gray-400'>
                          <span>Last used: {key.lastUsed ? format(new Date(key.lastUsed), 'yyyy-MM-dd') : 'Never'}</span>
                          <span>Scopes: {key.scopes.join(', ')}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <button 
                            onClick={() => handleTestRequest(key.key)}
                            className='p-1 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded transition-colors'
                            title='Test this API key - Send a test request to verify it works'
                          >
                            <Zap className='h-4 w-4 text-blue-400' />
                          </button>
                          <button 
                            onClick={() => handleOpenSettings(key)}
                            className='p-1 hover:bg-gray-100 dark:hover:bg-slate-700 rounded transition-colors'
                            title='API key settings - Edit name, view usage, and manage security'
                          >
                            <Settings className='h-4 w-4 text-gray-400' />
                          </button>
                          <button 
                            onClick={() => handleDeleteKey(key.id)}
                            className='p-1 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition-colors'
                            title='Delete this API key permanently - This action cannot be undone'
                          >
                            <Trash2 className='h-4 w-4 text-red-400' />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className='space-y-6'>
            <LazyRecentActivity onActivityUpdate={handleActivityUpdate} />
          </div>
        </div>
      </div>
      
      <CreateApiKeyModal 
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSuccess={handleCreateSuccess}
      />
      
      <ApiKeySettingsModal
        isOpen={showSettingsModal}
        onClose={handleCloseSettings}
        apiKey={selectedApiKey}
        onUpdate={handleSettingsUpdate}
      />
    </div>
  )
}

export default function Dashboard(): React.JSX.Element {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    // Log dashboard-specific errors
    console.error('Dashboard Error:', error)
    console.error('Error Info:', errorInfo)
    
    // In production, you might want to send this to an error reporting service
    // Example: errorReportingService.log(error, { context: 'dashboard', ...errorInfo })
  }

  return (
    <ErrorBoundary
      fallback={DashboardErrorFallback}
      onError={handleError}
    >
      <DashboardContent />
    </ErrorBoundary>
  )
}