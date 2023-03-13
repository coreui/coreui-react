export type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export type Colors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'dark'
  | 'light'
  | string

export type Placements =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top-end'
  | 'top'
  | 'top-start'
  | 'bottom-end'
  | 'bottom'
  | 'bottom-start'
  | 'right-start'
  | 'right'
  | 'right-end'
  | 'left-start'
  | 'left'
  | 'left-end'
  | undefined

export type Shapes =
  | 'rounded'
  | 'rounded-top'
  | 'rounded-end'
  | 'rounded-bottom'
  | 'rounded-start'
  | 'rounded-circle'
  | 'rounded-pill'
  | 'rounded-0'
  | 'rounded-1'
  | 'rounded-2'
  | 'rounded-3'
  | string

export type TextColors =
  | Colors
  | 'white'
  | 'muted'
  | 'high-emphasis'
  | 'medium-emphasis'
  | 'disabled'
  | 'high-emphasis-inverse'
  | 'medium-emphasis-inverse'
  | 'disabled-inverse'
  | string

export type Triggers = 'hover' | 'focus' | 'click'
