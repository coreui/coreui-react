import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CInputGroupAddon
const CInputGroupAddon = props => {

  const {
    children,
    className,
    cssModule,
    //
    innerRef,
    prepend,
    ...attributes
  } = props

  //render
  const classes = mapToCssModules(classNames(
    'input-group-' + (prepend ? 'prepend' : 'append'), className
  ), cssModule)

  return (
    <div className={classes} {...attributes} ref={innerRef}>
      {children}
    </div>
  )
}

CInputGroupAddon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  prepend: PropTypes.bool
};

export const CInputGroupAppend = props => <CInputGroupAddon {...props}/>
export const CInputGroupPrepend = props => <CInputGroupAddon {...props} prepend/>
