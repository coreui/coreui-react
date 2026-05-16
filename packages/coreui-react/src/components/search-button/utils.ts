import type { SearchButtonShortcut } from './types'

const MODIFIER_KEYS = new Set(['alt', 'ctrl', 'meta', 'shift'])
const KEY_ALIASES: Record<string, string> = {
  ' ': 'space',
  cmd: 'meta',
  command: 'meta',
  control: 'ctrl',
  esc: 'escape',
  option: 'alt',
  return: 'enter',
  spacebar: 'space',
}
const KEY_LABELS: Record<string, string> = {
  alt: 'Alt',
  ctrl: 'Ctrl',
  meta: '⌘',
  shift: 'Shift',
  space: 'Space',
}
const EDITABLE_TARGET_SELECTOR =
  'input, textarea, select, [contenteditable=""], [contenteditable="true"], [contenteditable="plaintext-only"]'

export const normalizeKey = (key: string) => KEY_ALIASES[key.toLowerCase()] || key.toLowerCase()

export const parseShortcut = (shortcut: string): SearchButtonShortcut[] =>
  shortcut
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean)
    .map((value) => {
      const keys = value.split('+').map((part) => normalizeKey(part.trim()))
      const modifiers = {
        alt: false,
        ctrl: false,
        meta: false,
        shift: false,
      }

      let key = ''

      for (const part of keys) {
        if (MODIFIER_KEYS.has(part)) {
          modifiers[part as keyof typeof modifiers] = true
          continue
        }

        key = part
      }

      return {
        key,
        modifiers,
        shortcut: value,
      }
    })

const getPlatform = () => {
  if (typeof window === 'undefined') {
    return ''
  }

  const navigator = window.navigator as Navigator & {
    userAgentData?: {
      platform?: string
    }
  }

  return navigator.userAgentData?.platform || navigator.platform || navigator.userAgent || ''
}

export const isMacOS = () => /Mac|iPhone|iPad|iPod|macOS|Macintosh/.test(getPlatform())

export const getPreferredShortcut = (shortcuts: SearchButtonShortcut[]) =>
  shortcuts.find((shortcut) => (isMacOS() ? shortcut.modifiers.meta : shortcut.modifiers.ctrl)) ||
  shortcuts[0] ||
  null

export const getKeyLabel = (key: string) =>
  KEY_LABELS[key] ||
  (key.length === 1 ? key.toUpperCase() : `${key.charAt(0).toUpperCase()}${key.slice(1)}`)

export const formatShortcutTokens = (shortcut: string) =>
  shortcut
    .split('+')
    .map((part) => normalizeKey(part.trim()))
    .map((part) => getKeyLabel(part))
    .filter(Boolean)

export const getPressedKeys = (event: KeyboardEvent) => {
  const pressedKeys = new Set<string>()

  if (event.altKey) {
    pressedKeys.add(KEY_LABELS.alt)
  }

  if (event.ctrlKey) {
    pressedKeys.add(KEY_LABELS.ctrl)
  }

  if (event.metaKey) {
    pressedKeys.add(KEY_LABELS.meta)
  }

  if (event.shiftKey) {
    pressedKeys.add(KEY_LABELS.shift)
  }

  const normalizedKey = normalizeKey(event.key)

  if (!MODIFIER_KEYS.has(normalizedKey) && event.type === 'keydown') {
    pressedKeys.add(getKeyLabel(normalizedKey))
  }

  return pressedKeys
}

export const isEditableTarget = (target: EventTarget | null) => {
  if (!(target instanceof Element)) {
    return false
  }

  return target.matches(EDITABLE_TARGET_SELECTOR) || !!target.closest(EDITABLE_TARGET_SELECTOR)
}

export const shouldIgnoreShortcut = (event: KeyboardEvent) =>
  isEditableTarget(event.target) && !event.ctrlKey && !event.metaKey

export const matchesShortcut = (shortcut: SearchButtonShortcut, event: KeyboardEvent) => {
  if (!shortcut.key || normalizeKey(event.key) !== shortcut.key) {
    return false
  }

  return (
    shortcut.modifiers.alt === event.altKey &&
    shortcut.modifiers.ctrl === event.ctrlKey &&
    shortcut.modifiers.meta === event.metaKey &&
    shortcut.modifiers.shift === event.shiftKey
  )
}
