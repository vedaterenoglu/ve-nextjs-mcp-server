'use client'

import { Suspense, lazy } from 'react'

// Lazy load the RecentActivity component
const RecentActivity = lazy(() => 
  import('./recent-activity').then(module => ({ default: module.RecentActivity }))
)

// Loading skeleton for recent activity
function ActivitySkeleton() {
  return (
    <div className='bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-slate-700/50 shadow-lg'>
      <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-6'>
        Recent Activity
      </h2>
      <div className='space-y-4'>
        {[1, 2, 3].map((i) => (
          <div key={i} className='flex items-start gap-3 animate-pulse'>
            <div className='w-8 h-8 rounded-lg bg-gray-200 dark:bg-gray-700'></div>
            <div className='flex-1 min-w-0'>
              <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-3/4'></div>
              <div className='h-3 bg-gray-200 dark:bg-gray-700 rounded mb-1 w-full'></div>
              <div className='h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4'></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

interface LazyRecentActivityProps {
  onActivityUpdate?: (callback: () => void) => void
}

export function LazyRecentActivity({ onActivityUpdate }: LazyRecentActivityProps) {
  return (
    <Suspense fallback={<ActivitySkeleton />}>
      <RecentActivity onActivityUpdate={onActivityUpdate} />
    </Suspense>
  )
}