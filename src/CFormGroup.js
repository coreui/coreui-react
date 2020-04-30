import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CFormGroup
const CFormGroup = props => {

  const {
    className,
    cssModule,
    //
    innerRef,
    row,
    disabled,
    variant,
    inline,
    ...attributes
  } = props

  //render
  const checkClass = variant && variant.includes('custom') ? 'custom-control' : 'form-check'

  const classes = mapToCssModules(classNames(
    row && 'row',
    !variant && 'form-group',
    variant && checkClass,
    variant === 'custom-radio' && 'custom-radio',
    variant === 'custom-checkbox' && 'custom-checkbox',
    variant && inline && `${checkClass}-inline`,
    variant && disabled && 'disabled',
    className
  ), cssModule)

  return (
    <div className={classes} {...attributes} ref={innerRef}/>
  )

}

CFormGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  row: PropTypes.bool,
  variant: PropTypes.oneOf(['checkbox', 'custom-checkbox', 'custom-radio']),
  inline: PropTypes.bool,
  disabled: PropTypes.bool
};


export default CFormGroup
