import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//component - CoreUI / CInputGroupAddon
const CInputGroupAddon = props => {

  const {
    children,
    className,
    //
    innerRef,
    prepend,
    ...attributes
  } = props

  //render
  const classes = classNames(
    'input-group-' + (prepend ? 'prepend' : 'append'), className
  )

  return (
    <div className={classes} {...attributes} ref={innerRef}>
      {children}
    </div>
  )
}

CInputGroupAddon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  prepend: PropTypes.bool
};

export const CInputGroupAppend = props => <CInputGroupAddon {...props} prepend={false}/>
export const CInputGroupPrepend = props => <CInputGroupAddon {...props} prepend/>
