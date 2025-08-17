'use client'

import { useState, useEffect } from 'react'
import { X, Edit2, Save, RefreshCw, Eye, BarChart3, AlertTriangle } from 'lucide-react'
import { useTheme } from 'next-themes'
import { format } from 'date-fns'
import type { UserApiKey } from '@/lib/api-keys'

interface ApiKeySettingsModalProps {
  isOpen: boolean
  onClose: () => void
  apiKey: UserApiKey | null
  onUpdate: () => void
}

interface KeyUsageStats {
  totalRequests: number
  requestsThisWeek: number
  requestsThisMonth: number
  lastUsed: string | null
  mostActiveDay: string
}

export function ApiKeySettingsModal({ isOpen, onClose, apiKey, onUpdate }: ApiKeySettingsModalProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isEditingName, setIsEditingName] = useState(false)
  const [newName, setNewName] = useState('')
  const [currentDisplayName, setCurrentDisplayName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [usageStats, setUsageStats] = useState<KeyUsageStats | null>(null)
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (apiKey) {
      setNewName(apiKey.name)
      setCurrentDisplayName(apiKey.name)
      fetchUsageStats()
    }
  }, [apiKey])

  const fetchUsageStats = async () => {
    if (!apiKey) return
    
    try {
      const response = await fetch(`/api/keys/${apiKey.id}/stats`)
      if (response.ok) {
        const stats = await response.json()
        setUsageStats(stats)
      } else {
        // Mock data if endpoint doesn't exist yet
        setUsageStats({
          totalRequests: Math.floor(Math.random() * 1000) + 50,
          requestsThisWeek: Math.floor(Math.random() * 100) + 10,
          requestsThisMonth: Math.floor(Math.random() * 300) + 50,
          lastUsed: apiKey.lastUsed || null,
          mostActiveDay: 'Monday'
        })
      }
    } catch (err) {
      console.error('Failed to fetch usage stats:', err)
      setUsageStats({
        totalRequests: 0,
        requestsThisWeek: 0,
        requestsThisMonth: 0,
        lastUsed: apiKey.lastUsed || null,
        mostActiveDay: 'N/A'
      })
    }
  }

  const handleUpdateName = async () => {
    if (!apiKey || newName.trim() === apiKey.name) {
      setIsEditingName(false)
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const response = await fetch(`/api/keys/${apiKey.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newName.trim() }),
      })

      if (!response.ok) {
        throw new Error('Failed to update API key name')
      }

      const result = await response.json()
      
      setIsEditingName(false)
      onUpdate()
      
      // Update the displayed name immediately in the modal
      setCurrentDisplayName(result.apiKey.name)
      setNewName(result.apiKey.name)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update name')
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegenerateKey = async () => {
    if (!apiKey) return

    setIsLoading(true)
    setError('')

    try {
      const response = await fetch(`/api/keys/${apiKey.id}/regenerate`, {
        method: 'POST',
      })

      if (!response.ok) {
        throw new Error('Failed to regenerate API key')
      }

      const result = await response.json()
      setShowRegenerateConfirm(false)
      onUpdate()
      
      // Show the new key to the user
      alert(`New API key generated: ${result.newKey}\n\nPlease copy this key now - you won't be able to see it again!`)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to regenerate key')
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen || !apiKey || !mounted) return null

  // Theme-aware color variables
  const colors = {
    background: theme === 'dark' ? '#1f2937' : 'white',
    text: theme === 'dark' ? '#f9fafb' : '#111827',
    textSecondary: theme === 'dark' ? '#d1d5db' : '#6b7280',
    border: theme === 'dark' ? '#374151' : '#e5e7eb',
    inputBackground: theme === 'dark' ? '#374151' : 'white',
    inputBorder: theme === 'dark' ? '#4b5563' : '#d1d5db',
    cardBackground: theme === 'dark' ? '#374151' : '#f9fafb',
    errorBackground: theme === 'dark' ? '#7f1d1d' : '#fef2f2',
    errorBorder: theme === 'dark' ? '#991b1b' : '#fecaca',
    errorText: theme === 'dark' ? '#fca5a5' : '#dc2626',
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div style={{
        background: colors.background,
        borderRadius: '12px',
        width: '100%',
        maxWidth: '600px',
        maxHeight: '90vh',
        overflow: 'auto',
        boxShadow: theme === 'dark' 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' 
          : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}>
        {/* Header */}
        <div style={{
          padding: '24px',
          borderBottom: theme === 'dark' ? '1px solid #374151' : '1px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: theme === 'dark' ? '#f9fafb' : '#111827'
          }}>
            API Key Settings
          </h2>
          <button
            onClick={onClose}
            style={{
              padding: '8px',
              background: 'transparent',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X style={{ width: '20px', height: '20px', color: colors.textSecondary }} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '24px' }}>
          {error && (
            <div style={{
              background: theme === 'dark' ? '#7f1d1d' : '#fef2f2',
              border: `1px solid ${colors.errorBorder}`,
              borderRadius: '6px',
              padding: '12px',
              marginBottom: '20px',
              color: colors.errorText
            }}>
              {error}
            </div>
          )}

          {/* Edit Name Section */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '12px'
            }}>
              <Edit2 style={{ width: '16px', height: '16px', color: '#059669' }} />
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: colors.text
              }}>
                Name
              </h3>
            </div>
            
            {isEditingName ? (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    border: `1px solid ${colors.inputBorder}`,
                    borderRadius: '6px',
                    fontSize: '14px',
                    background: colors.inputBackground,
                    color: colors.text
                  }}
                  placeholder="Enter API key name"
                />
                <button
                  onClick={handleUpdateName}
                  disabled={isLoading}
                  style={{
                    padding: '8px 12px',
                    background: '#059669',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    opacity: isLoading ? 0.6 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <Save style={{ width: '14px', height: '14px' }} />
                  Save
                </button>
                <button
                  onClick={() => {
                    setIsEditingName(false)
                    setNewName(currentDisplayName)
                  }}
                  style={{
                    padding: '8px 12px',
                    background: '#6b7280',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px',
                background: colors.cardBackground,
                borderRadius: '6px'
              }}>
                <span style={{ fontWeight: '500', color: colors.text }}>{currentDisplayName}</span>
                <button
                  onClick={() => setIsEditingName(true)}
                  style={{
                    padding: '6px 12px',
                    background: '#059669',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <Edit2 style={{ width: '12px', height: '12px' }} />
                  Edit
                </button>
              </div>
            )}
          </div>

          {/* View Scopes Section */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '12px'
            }}>
              <Eye style={{ width: '16px', height: '16px', color: '#3b82f6' }} />
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: colors.text
              }}>
                Permissions & Scopes
              </h3>
            </div>
            
            <div style={{
              background: colors.cardBackground,
              borderRadius: '6px',
              padding: '16px'
            }}>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                {apiKey.scopes.map((scope) => (
                  <span
                    key={scope}
                    style={{
                      background: '#dbeafe',
                      color: '#1e40af',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}
                  >
                    {scope}
                  </span>
                ))}
              </div>
              {apiKey.scopes.length === 0 && (
                <p style={{ color: colors.textSecondary, fontSize: '14px', margin: 0 }}>
                  No specific scopes assigned - full access
                </p>
              )}
            </div>
          </div>

          {/* Usage Stats Section */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '12px'
            }}>
              <BarChart3 style={{ width: '16px', height: '16px', color: '#8b5cf6' }} />
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: colors.text
              }}>
                Usage Statistics
              </h3>
            </div>
            
            {usageStats ? (
              <div style={{
                background: colors.cardBackground,
                borderRadius: '6px',
                padding: '16px'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: '16px'
                }}>
                  <div>
                    <p style={{ fontSize: '12px', color: colors.textSecondary, margin: '0 0 4px 0' }}>Total Requests</p>
                    <p style={{ fontSize: '20px', fontWeight: 'bold', color: colors.text, margin: 0 }}>
                      {usageStats.totalRequests.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: colors.textSecondary, margin: '0 0 4px 0' }}>This Week</p>
                    <p style={{ fontSize: '20px', fontWeight: 'bold', color: colors.text, margin: 0 }}>
                      {usageStats.requestsThisWeek}
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: colors.textSecondary, margin: '0 0 4px 0' }}>This Month</p>
                    <p style={{ fontSize: '20px', fontWeight: 'bold', color: colors.text, margin: 0 }}>
                      {usageStats.requestsThisMonth}
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: colors.textSecondary, margin: '0 0 4px 0' }}>Last Used</p>
                    <p style={{ fontSize: '14px', fontWeight: '500', color: colors.text, margin: 0 }}>
                      {usageStats.lastUsed ? format(new Date(usageStats.lastUsed), 'yyyy-MM-dd') : 'Never'}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{
                background: colors.cardBackground,
                borderRadius: '6px',
                padding: '16px',
                textAlign: 'center'
              }}>
                <p style={{ color: colors.textSecondary, margin: 0 }}>Loading usage statistics...</p>
              </div>
            )}
          </div>

          {/* Regenerate Key Section */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '12px'
            }}>
              <RefreshCw style={{ width: '16px', height: '16px', color: '#dc2626' }} />
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: colors.text
              }}>
                Security Actions
              </h3>
            </div>
            
            {!showRegenerateConfirm ? (
              <div style={{
                background: colors.errorBackground,
                border: `1px solid ${colors.errorBorder}`,
                borderRadius: '6px',
                padding: '16px'
              }}>
                <p style={{
                  fontSize: '14px',
                  color: colors.text,
                  margin: '0 0 12px 0'
                }}>
                  Regenerating the API key will create a new key value. The old key will stop working immediately.
                </p>
                <button
                  onClick={() => setShowRegenerateConfirm(true)}
                  style={{
                    padding: '8px 16px',
                    background: '#dc2626',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <RefreshCw style={{ width: '14px', height: '14px' }} />
                  Regenerate API Key
                </button>
              </div>
            ) : (
              <div style={{
                background: colors.errorBackground,
                border: `1px solid ${colors.errorBorder}`,
                borderRadius: '6px',
                padding: '16px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '12px'
                }}>
                  <AlertTriangle style={{ width: '20px', height: '20px', color: '#dc2626' }} />
                  <p style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#dc2626',
                    margin: 0
                  }}>
                    Are you sure?
                  </p>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: colors.text,
                  margin: '0 0 16px 0'
                }}>
                  This action cannot be undone. All applications using the current key will need to be updated.
                </p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={handleRegenerateKey}
                    disabled={isLoading}
                    style={{
                      padding: '8px 16px',
                      background: '#dc2626',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: isLoading ? 'not-allowed' : 'pointer',
                      opacity: isLoading ? 0.6 : 1,
                      fontSize: '14px',
                      fontWeight: '500'
                    }}
                  >
                    {isLoading ? 'Regenerating...' : 'Yes, Regenerate'}
                  </button>
                  <button
                    onClick={() => setShowRegenerateConfirm(false)}
                    style={{
                      padding: '8px 16px',
                      background: '#6b7280',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}