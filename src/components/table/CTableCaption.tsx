import React, { forwardRef, HTMLAttributes } from 'react'

export const CTableCaption = forwardRef<
  HTMLTableCaptionElement,
  HTMLAttributes<HTMLTableCaptionElement>
>(({ children, ...props }, ref) => {
  return (
    <caption {...props} ref={ref}>
      {children}
    </caption>
  )
})

CTableCaption.displayName = 'CTableCaption'
