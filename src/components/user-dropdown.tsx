'use client'

import { useUser, useClerk } from '@clerk/nextjs'
import { useState, useRef, useEffect } from 'react'
import { User, Settings, LogOut, ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function UserDropdown(): React.JSX.Element | null {
  const { user } = useUser()
  const { signOut } = useClerk()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return (): void => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (!user) return null

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'
      >
        <div className='w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-semibold'>
          {user.firstName?.charAt(0) ||
            user.emailAddresses[0].emailAddress.charAt(0).toUpperCase()}
        </div>
        <span className='hidden md:block'>{user.firstName || 'User'}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className='absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50'>
          <div className='px-4 py-2 border-b border-gray-200 dark:border-gray-700'>
            <p className='text-sm font-medium text-gray-900 dark:text-white'>
              {user.firstName} {user.lastName}
            </p>
            <p className='text-xs text-gray-500 dark:text-gray-400'>
              {user.emailAddresses[0].emailAddress}
            </p>
          </div>

          <Link
            href='/dashboard'
            className='flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors'
            onClick={() => setIsOpen(false)}
          >
            <User className='h-4 w-4' />
            Dashboard
          </Link>

          <Link
            href='/settings'
            className='flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors'
            onClick={() => setIsOpen(false)}
          >
            <Settings className='h-4 w-4' />
            Settings
          </Link>

          <button
            onClick={() => signOut()}
            className='flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors'
          >
            <LogOut className='h-4 w-4' />
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}
