import React, { useState, useEffect, useLayoutEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Context } from './CDropdown'
import { createPopper } from '@popperjs/core'

//component - CoreUI / CDropdownMenu


const CDropdownMenu = props => {

  const {
    className,
    show,
    placement,
    modifiers,
    innerRef,
    ...rest
  } = props

  const { reference, isOpen, setIsOpen, setPlacement } = useContext(Context)
  const [popperElement, setPopperElement] = useState(null)
  const [popper, setPopper] = useState(null)

  innerRef && innerRef(popperElement)

  useEffect(() => {
    setIsOpen(show)
    setPlacement(placement)
  }, [show, placement])

  const classes = classNames(
    className,
    'dropdown-menu',
    {
      'show': isOpen,
    }
  )

  useLayoutEffect(() => {
    if (!reference) {
      return
    }
    setPopper(createPopper(
      reference,
      popperElement,
      {
        placement,
        modifiers: modifiers || []
      }
    ))
   
    return () => {
      if (popper) {
        popper.destroy()
      }
    }
  }, [isOpen])

  const checkClose = (e) => {
    if ([reference, popperElement].every(el => !el.contains(e.target))) {
      setIsOpen(false)
    }
  }

  const onKeypress = e => e.keyCode == '27' && setIsOpen(false)

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', checkClose)
      document.addEventListener('keydown', onKeypress)
    }
    return () => {
      document.removeEventListener('click', checkClose)
      document.removeEventListener('keydown', onKeypress) 
    }
  }, [isOpen])

  return (
    <div
      className={classes}
      ref={setPopperElement}
      role="menu"
      aria-hidden={!isOpen}
      {...rest}
    />
  )
}


CDropdownMenu.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  modifiers: PropTypes.array,
  show: PropTypes.bool,
  placement: PropTypes.oneOf([
    '', 'top-end', 'top', 'top-start',
    'bottom-end', 'bottom', 'bottom-start',
    'right-start', 'right', 'right-end',
    'left-start', 'left', 'left-end'
  ])
}

CDropdownMenu.defaultProps = {
  placement: 'bottom-start',
}

export default CDropdownMenu
