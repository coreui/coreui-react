const FOCUSABLE_TAGS = new Set(['input', 'select', 'textarea', 'button'])

export const TABBABLE_SELECTOR = [
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'summary',
  '[tabindex]',
  '[contenteditable="true"]',
].join(',')

export { FOCUSABLE_TAGS }
