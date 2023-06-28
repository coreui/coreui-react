import React, { FC, ReactNode } from 'react'
interface ExampleProps {
  children: ReactNode
  className: string
}

const Example: FC<ExampleProps> = ({ children, className, ...rest }) => {
  return (
    <div
      className={`docs-example ${className} ${className && className.includes('p-') ? '' : 'p-3'}`}
      {...rest}
    >
      {children}
    </div>
  )
}

Example.displayName = 'Example'

export default Example
