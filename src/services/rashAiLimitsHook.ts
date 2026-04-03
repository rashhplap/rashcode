import { useEffect, useState } from 'react'
import {
  type RashAILimits,
  currentLimits,
  statusListeners,
} from './rashAiLimits.js'

export function useRashAiLimits(): RashAILimits {
  const [limits, setLimits] = useState<RashAILimits>({ ...currentLimits })

  useEffect(() => {
    const listener = (newLimits: RashAILimits) => {
      setLimits({ ...newLimits })
    }
    statusListeners.add(listener)

    return () => {
      statusListeners.delete(listener)
    }
  }, [])

  return limits
}
