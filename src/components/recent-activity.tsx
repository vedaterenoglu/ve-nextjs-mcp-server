'use client'

import { useState, useEffect, useCallback } from 'react'
import { Clock, Activity, Key, AlertCircle, CheckCircle, Settings } from 'lucide-react'

// Activity type mapping for icons
const getActivityIcon = (action: string) => {
  if (action.includes('API Key Created')) return Key
  if (action.includes('API Key Deleted')) return AlertCircle
  if (action.includes('API Key Updated') || action.includes('API Key Regenerated')) return Settings
  if (action.includes('API Request')) return CheckCircle
  return Activity // default icon
}

const getActivityTypeColor = (type: string) => {
  switch (type) {
    case 'success':
      return 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
    case 'warning':
      return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
    case 'error':
      return 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
    default:
      return 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
  }
}

interface RecentActivityProps {
  onActivityUpdate?: (callback: () => void) => void
}

export function RecentActivity({ onActivityUpdate }: RecentActivityProps) {
  const [recentActivity, setRecentActivity] = useState<any[]>([])
  const [isLoadingActivity, setIsLoadingActivity] = useState(true)

  // Fetch recent activity
  const fetchActivity = useCallback(async () => {
    try {
      setIsLoadingActivity(true)
      const response = await fetch('/api/activity')
      if (response.ok) {
        const activities = await response.json()
        setRecentActivity(activities)
      } else {
        console.error('Failed to load activity')
        setRecentActivity([])
      }
    } catch (err) {
      console.error('Error loading activity:', err)
      setRecentActivity([])
    } finally {
      setIsLoadingActivity(false)
    }
  }, [])

  // Register refresh callback with parent
  useEffect(() => {
    if (onActivityUpdate) {
      onActivityUpdate(fetchActivity)
    }
  }, [onActivityUpdate, fetchActivity])

  // Initial load
  useEffect(() => {
    fetchActivity()
  }, [fetchActivity])

  return (
    <div className='bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-slate-700/50 shadow-lg'>
      <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-6'>
        Recent Activity
      </h2>
      <div className='space-y-4'>
        {isLoadingActivity ? (
          <div className='flex items-center justify-center py-8'>
            <div className='animate-spin rounded-full h-6 w-6 border-b-2 border-emerald-500'></div>
            <span className='ml-2 text-sm text-gray-500 dark:text-gray-400'>Loading activities...</span>
          </div>
        ) : recentActivity.length === 0 ? (
          <div className='text-center py-8'>
            <p className='text-sm text-gray-500 dark:text-gray-400'>No recent activity</p>
          </div>
        ) : (
          recentActivity.map(activity => {
            const ActivityIcon = getActivityIcon(activity.action)
            return (
              <div key={activity.id} className='flex items-start gap-3'>
                <div className={`p-2 rounded-lg ${getActivityTypeColor(activity.type)}`}>
                  <ActivityIcon className='h-4 w-4' />
                </div>
                <div className='flex-1 min-w-0'>
                  <p className='font-medium text-gray-900 dark:text-white text-sm'>
                    {activity.action}
                  </p>
                  <p className='text-sm text-gray-500 dark:text-gray-400 truncate'>
                    {activity.description}
                  </p>
                  <div className='flex items-center gap-1 mt-1'>
                    <Clock className='h-3 w-3 text-gray-400' />
                    <span className='text-xs text-gray-400'>
                      {activity.time}
                    </span>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}