import { useEffect, useState } from 'react'

interface UseColorModesOutput {
  getColorMode: () => string
  isColorModeSet: () => boolean
  setColorMode: (mode: string) => void
}

const getStoredTheme = (localStorageItemName: string) => localStorage.getItem(localStorageItemName)
const setStoredTheme = (localStorageItemName: string, colorMode: string) =>
  localStorage.setItem(localStorageItemName, colorMode)

const getPreferredColorScheme = (localStorageItemName: string) => {
  const storedTheme = getStoredTheme(localStorageItemName)

  if (storedTheme) {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const setTheme = (colorMode: string) => {
  document.documentElement.dataset.coreuiTheme =
    colorMode === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : colorMode

  const event = new Event('ColorSchemeChange')
  document.documentElement.dispatchEvent(event)
}

export const useColorModes = (
  localStorageItemName = 'coreui-react-color-scheme',
): UseColorModesOutput => {
  const [colorMode, setColorMode] = useState<string>(getPreferredColorScheme(localStorageItemName))

  useEffect(() => {
    setStoredTheme(localStorageItemName, colorMode)
    setTheme(colorMode)
  }, [colorMode])

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const storedTheme = getStoredTheme(localStorageItemName)
      if (storedTheme !== 'light' && storedTheme !== 'dark') {
        setTheme(colorMode)
      }
    })
  }, [])

  return {
    getColorMode: () => colorMode,
    isColorModeSet: () => Boolean(getStoredTheme(localStorageItemName)),
    setColorMode: (mode: string) => setColorMode(mode),
  }
}
