'use client'

import { useUser } from '@clerk/nextjs'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import LoadingSpinner from '@/components/loading-spinner'
import UserDropdown from '@/components/user-dropdown'

export default function AuthButtons(): React.JSX.Element {
  const { isLoaded } = useUser()

  if (!isLoaded) {
    return <LoadingSpinner />
  }

  return (
    <>
      <SignedOut>
        <div className='flex items-center gap-2'>
          <SignInButton mode='modal'>
            <button className='px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors'>
              Sign In
            </button>
          </SignInButton>
        </div>
      </SignedOut>
      <SignedIn>
        <UserDropdown />
      </SignedIn>
    </>
  )
}
