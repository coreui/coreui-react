import React, { FC, ReactNode } from 'react'
interface CalloutProps {
  children: ReactNode
  color: string
  title?: string
}

const Callout: FC<CalloutProps> = ({ children, color, title }) => {
  return (
    <div className={`docs-callout docs-callout-${color}`}>
      {title && <h5>{title}</h5>}
      {children}
    </div>
  )
}

Callout.displayName = 'Callout'

export default Callout
