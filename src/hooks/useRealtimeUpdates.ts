import { useEffect, useRef } from 'react'

interface UseRealtimeUpdatesOptions {
  onUpdate: () => void
  interval?: number
  enabled?: boolean
}

export function useRealtimeUpdates({
  onUpdate,
  interval = 3000, // 3 seconds
  enabled = true,
}: UseRealtimeUpdatesOptions) {
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const lastUpdateRef = useRef<number>(Date.now())

  useEffect(() => {
    if (!enabled) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      return
    }

    const checkForUpdates = async () => {
      try {
        // Call the update function
        onUpdate()
        lastUpdateRef.current = Date.now()
      } catch (error) {
        console.error('Error checking for updates:', error)
      }
    }

    // Set up polling
    intervalRef.current = setInterval(checkForUpdates, interval)

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [onUpdate, interval, enabled])

  // Provide a manual refresh function
  const refresh = () => {
    onUpdate()
    lastUpdateRef.current = Date.now()
  }

  return { refresh, lastUpdate: lastUpdateRef.current }
}

// Hook for manual refresh only (no auto-refresh polling)
export function useDashboardAutoRefresh(
  fetchAllData: () => void
) {
  // NO auto-refresh - only manual refresh as requested
  // Real-time updates should come from Server-Sent Events, not polling

  // Manual refresh for all data
  const manualRefresh = () => {
    fetchAllData()
  }

  return { 
    manualRefresh,
    refreshAnalytics: manualRefresh // Alias for consistency
  }
}