import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//component - CoreUI / CSwitch

const CSwitch = props => {

  let {
    className,
    //
    innerRef,
    size,
    color,
    labelOn,
    labelOff,
    variant,
    shape,
    checked,
    onCheckedChange,
    ...attributes
  } = props

  const [isChecked, setIsChecked] = useState(checked)
  useEffect(() => setIsChecked(checked), [checked])

  const change = e => {
    setIsChecked(e.target.checked)
    onCheckedChange && onCheckedChange(e.target.checked)
  }

  //render
  const classes = classNames(
    'c-switch form-check-label',
    (labelOn || labelOff) && 'c-switch-label',
    size && `c-switch-${size}`,
    shape && `c-switch-${shape}`,
    color && `c-switch${variant ? `-${variant}` : ''}-${color}`,
    className
  )

  const inputClasses = classNames(
    'c-switch-input',
    'c-form-check-input'
  )

  return (
    <label className={classes}>
      <input 
        className={inputClasses} 
        type="checkbox" 
        onChange={change}
        checked={isChecked}
        {...attributes}
        ref={innerRef}
      />
      <span 
        className="c-switch-slider"
        data-checked={labelOn} 
        data-unchecked={labelOff}
      ></span>
    </label>
  )
}

CSwitch.propTypes = {
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  size: PropTypes.oneOf(['', 'lg', 'sm']),
  shape: PropTypes.oneOf(['', 'pill', 'square']),
  variant: PropTypes.oneOf(['', '3d', 'opposite', 'outline']),
  color: PropTypes.string,
  checked: PropTypes.bool,
  labelOn: PropTypes.string,
  labelOff: PropTypes.string,
  onCheckedChange: PropTypes.func
};

export default CSwitch
