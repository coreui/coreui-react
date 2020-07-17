import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CFade from '../fade/CFade'
import { omitByKeys } from '@coreui/utils/src'
import { CFadeProps } from '../utils/helper.js'
import CButtonClose from '../button/CButtonClose'

//component - CoreUI / CAlert
const CAlert = props => {
  let {
    children,
    className,
    innerRef,
    //
    onShowChange,
    closeButton,
    color,
    fade,
    show,
    ...attributes
  } = props

  //render
  const classes = classNames(
    className,
    'alert',
    {
      [`alert-${color}`]: color,
      'alert-dismissible': closeButton
    }
  )

  const alertTransition = {
    baseClass: fade ? CFade.baseClass : '',
    timeout: fade ? CFade.timeout : 0,
    unmountOnExit: true
  }
  
  const [isOpen, setIsOpen] = useState(show)

  useEffect(() => {
    setIsOpen(show)
  }, [show])

  let timeout = useRef()

  useEffect(() => {
    onShowChange && onShowChange(isOpen)
    clearTimeout(timeout.current)
    if (typeof isOpen === 'number' && isOpen > 0) {
      timeout.current = setTimeout(() => {
        setIsOpen(isOpen - 1)
      }, 1000)
    }
    return () => clearTimeout(timeout.current)
  }, [isOpen])

  const attrs = omitByKeys(attributes, CFadeProps)

  return (
    <CFade
      {...alertTransition}
      className={classes}
      in={Boolean(isOpen)}
      role="alert"
      {...attrs}
      innerRef={innerRef}
    >
      { children }
      { closeButton && <CButtonClose onClick={() => setIsOpen(false)} />}
    </CFade>
  )
}

CAlert.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  onShowChange: PropTypes.func,
  closeButton: PropTypes.bool,
  color: PropTypes.string,
  fade: PropTypes.bool,
  show: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
}

CAlert.defaultProps = {
  show: true,
  fade: true
}

export default CAlert
