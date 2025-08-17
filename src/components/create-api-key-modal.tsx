'use client'

import { useState } from 'react'
import { X, Key, Check } from 'lucide-react'

interface CreateApiKeyModalPropsI {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export function CreateApiKeyModal({ isOpen, onClose, onSuccess }: CreateApiKeyModalPropsI) {
  const [name, setName] = useState('')
  const [scopes, setScopes] = useState<string[]>(['mcp:tools'])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const availableScopes = [
    { id: 'mcp:tools', label: 'MCP Tools', description: 'Access to MCP tools and utilities' },
    { id: 'mcp:resources', label: 'MCP Resources', description: 'Access to MCP resources and data' },
  ]

  const handleScopeToggle = (scopeId: string) => {
    setScopes(prev =>
      prev.includes(scopeId)
        ? prev.filter(s => s !== scopeId)
        : [...prev, scopeId]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    if (!name.trim()) {
      setError('Name is required')
      setIsLoading(false)
      return
    }

    if (scopes.length === 0) {
      setError('At least one scope is required')
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('/api/keys', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          scopes,
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to create API key')
      }

      // Reset form
      setName('')
      setScopes(['mcp:tools'])
      setError('')
      onSuccess()
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    setName('')
    setScopes(['mcp:tools'])
    setError('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50'>
      <div className='bg-white dark:bg-slate-800 rounded-xl shadow-2xl w-full max-w-md'>
        <div className='flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700'>
          <div className='flex items-center gap-3'>
            <div className='p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg'>
              <Key className='h-5 w-5 text-emerald-600 dark:text-emerald-400' />
            </div>
            <h2 className='text-xl font-semibold text-gray-900 dark:text-white'>
              Create New API Key
            </h2>
          </div>
          <button
            onClick={handleClose}
            className='p-1 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors'
          >
            <X className='h-5 w-5 text-gray-400' />
          </button>
        </div>

        <form onSubmit={handleSubmit} className='p-6 space-y-6'>
          {error && (
            <div className='p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg'>
              <p className='text-sm text-red-600 dark:text-red-400'>{error}</p>
            </div>
          )}

          <div>
            <label htmlFor='keyName' className='block text-sm font-medium text-gray-900 dark:text-white mb-2'>
              Key Name
            </label>
            <input
              id='keyName'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='e.g., Production Client'
              className='w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
              disabled={isLoading}
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-900 dark:text-white mb-3'>
              Permissions
            </label>
            <div className='space-y-3'>
              {availableScopes.map((scope) => (
                <label key={scope.id} className='flex items-start gap-3 cursor-pointer'>
                  <div className='relative flex items-center'>
                    <input
                      type='checkbox'
                      checked={scopes.includes(scope.id)}
                      onChange={() => handleScopeToggle(scope.id)}
                      className='sr-only'
                      disabled={isLoading}
                    />
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                      scopes.includes(scope.id)
                        ? 'bg-emerald-600 border-emerald-600'
                        : 'border-gray-300 dark:border-slate-500'
                    }`}>
                      {scopes.includes(scope.id) && (
                        <Check className='h-3 w-3 text-white' />
                      )}
                    </div>
                  </div>
                  <div className='flex-1'>
                    <div className='text-sm font-medium text-gray-900 dark:text-white'>
                      {scope.label}
                    </div>
                    <div className='text-xs text-gray-500 dark:text-gray-400'>
                      {scope.description}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className='flex gap-3 pt-4'>
            <button
              type='button'
              onClick={handleClose}
              className='flex-1 px-4 py-2 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors'
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type='submit'
              disabled={isLoading || !name.trim() || scopes.length === 0}
              className='flex-1 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 dark:disabled:bg-slate-600 text-white rounded-lg transition-colors disabled:cursor-not-allowed'
            >
              {isLoading ? 'Creating...' : 'Create Key'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}