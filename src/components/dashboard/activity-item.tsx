'use client'

import { LucideIcon, Clock } from 'lucide-react'

interface ActivityItemI {
  id: number
  action: string
  description: string
  time: string
  icon: LucideIcon
  type: 'success' | 'warning' | 'error' | 'info'
}

interface ActivityItemPropsI {
  activity: ActivityItemI
}

export default function ActivityItem({ activity }: ActivityItemPropsI): React.JSX.Element {
  const getActivityTypeColor = (type: string): string => {
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

  return (
    <div className='flex items-start gap-3'>
      <div className={`p-2 rounded-lg ${getActivityTypeColor(activity.type)}`}>
        <activity.icon className='h-4 w-4' />
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
          <span className='text-xs text-gray-400'>{activity.time}</span>
        </div>
      </div>
    </div>
  )
}