import React, { FC } from 'react'
import PropTypes from 'prop-types'

interface ExampleProps {
  className: string
}

const Example: FC<ExampleProps> = ({ children, className, ...rest }) => {
  return (
    <div
      className={`docs-example border ${className} ${
        className && className.includes('p-') ? '' : 'p-3'
      }`}
      {...rest}
    >
      {children}
    </div>
  )
}

Example.propTypes = {
  className: PropTypes.string,
}

Example.displayName = 'Example'

export default Example
