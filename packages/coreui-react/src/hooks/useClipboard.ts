import { useState, useCallback } from 'react'

/**
 * useClipboard Hook
 *
 * Provides functionality to copy text to the clipboard and track the copy status.
 *
 * @returns An object containing the copy function, copy status, and any error encountered.
 */
export const useClipboard = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  /**
   * Copies the provided text to the clipboard.
   *
   * @param text - The text to be copied to the clipboard.
   */
  const copy = useCallback(async (text: string) => {
    if (!navigator?.clipboard) {
      setError(new Error('Clipboard API is not available'))
      return
    }

    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      setError(null)
      // Reset the isCopied state after 2 seconds
      setTimeout(() => setIsCopied(false), 2000)
    } catch (_error) {
      setError(_error as Error)
      setIsCopied(false)
    }
  }, [])

  return { copy, isCopied, error }
}
