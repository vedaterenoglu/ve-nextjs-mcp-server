'use client'

import { LucideIcon, TrendingUp } from 'lucide-react'

interface StatsCardPropsI {
  title: string
  value: string
  change: string
  icon: LucideIcon
  color: string
  bgColor: string
  trend?: 'up' | 'down' | 'stable'
}

export default function StatsCard({
  title,
  value,
  change,
  icon: Icon,
  color,
  bgColor,
  trend = 'stable',
}: StatsCardPropsI): React.JSX.Element {
  return (
    <div className='bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-200'>
      <div className='flex items-center justify-between'>
        <div className={`p-3 rounded-lg ${bgColor}`}>
          <Icon className={`h-6 w-6 ${color}`} />
        </div>
        {trend === 'up' && <TrendingUp className='h-4 w-4 text-green-500' />}
      </div>
      <div className='mt-4'>
        <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
          {value}
        </h3>
        <p className='text-sm font-medium text-gray-900 dark:text-white mt-1'>
          {title}
        </p>
        <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
          {change}
        </p>
      </div>
    </div>
  )
}