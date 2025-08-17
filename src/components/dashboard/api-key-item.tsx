'use client'

import { Key, Copy, CheckCircle, Settings, Trash2 } from 'lucide-react'

interface ApiKeyI {
  id: string
  name: string
  key: string
  createdAt: string
  lastUsed: string
  status: 'active' | 'inactive'
  requests: number
}

interface ApiKeyItemPropsI {
  apiKey: ApiKeyI
  onCopy: (keyId: string, key: string) => void
  copiedKey: string | null
}

export default function ApiKeyItem({
  apiKey,
  onCopy,
  copiedKey,
}: ApiKeyItemPropsI): React.JSX.Element {
  return (
    <div className='p-6'>
      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center gap-3'>
          <div
            className={`p-2 rounded-lg ${
              apiKey.status === 'active'
                ? 'bg-green-100 dark:bg-green-900/30'
                : 'bg-gray-100 dark:bg-gray-900/30'
            }`}
          >
            <Key
              className={`h-4 w-4 ${
                apiKey.status === 'active'
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-gray-400'
              }`}
            />
          </div>
          <div>
            <h3 className='font-medium text-gray-900 dark:text-white'>
              {apiKey.name}
            </h3>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              Created {apiKey.createdAt}
            </p>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              apiKey.status === 'active'
                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
            }`}
          >
            {apiKey.status}
          </span>
        </div>
      </div>

      <div className='bg-gray-50 dark:bg-slate-900/50 rounded-lg p-3 mb-4'>
        <div className='flex items-center justify-between'>
          <code className='text-sm font-mono text-gray-600 dark:text-gray-300 truncate flex-1 mr-2'>
            {apiKey.key}
          </code>
          <button
            onClick={() => onCopy(apiKey.id, apiKey.key)}
            className='p-1 hover:bg-gray-200 dark:hover:bg-slate-700 rounded transition-colors'
          >
            {copiedKey === apiKey.id ? (
              <CheckCircle className='h-4 w-4 text-green-500' />
            ) : (
              <Copy className='h-4 w-4 text-gray-400' />
            )}
          </button>
        </div>
      </div>

      <div className='flex items-center justify-between text-sm'>
        <div className='flex items-center gap-4 text-gray-500 dark:text-gray-400'>
          <span>Last used: {apiKey.lastUsed}</span>
          <span>{apiKey.requests.toLocaleString()} requests</span>
        </div>
        <div className='flex items-center gap-2'>
          <button className='p-1 hover:bg-gray-100 dark:hover:bg-slate-700 rounded transition-colors'>
            <Settings className='h-4 w-4 text-gray-400' />
          </button>
          <button className='p-1 hover:bg-red-100 dark:hover:bg-red-900/30 rounded transition-colors'>
            <Trash2 className='h-4 w-4 text-red-400' />
          </button>
        </div>
      </div>
    </div>
  )
}