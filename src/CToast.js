import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'
import CFade from './CFade'
import style from './CToast.module.css'

export const Context = React.createContext({})

//component - CoreUI / CToast
const CToast = props => {

  const {
    className,
    cssModule,
    children,
    //
    innerRef,
    show,
    autohide,
    fade,
    onStateChange,
    ...attributes
  } = props

  const [state, setState] = useState(show)
  const timeout = useRef()

  useEffect(() => {
    setState(show)
  }, [show])

  //triggered on mount and destroy
  useEffect(() => () => clearTimeout(timeout.current), [])

  useEffect(() => {
    if (state === true && autohide) {
      setAutohide()
    }
    onStateChange && onStateChange(state)
  }, [state])

  const setAutohide = () => {
    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      startAutohide()
    }, autohide)
  }

  const onMouseOver = () => {
    if (state !== 'closing') {
      state !== true && setState(true)
      clearTimeout(timeout.current)
    }
  }

  const onMouseOut = () => {
    if (autohide && state !== 'closing') {
      setAutohide()
    }
  }

  const startAutohide = () => {
    setState('hiding')
    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      setState(false)
    }, 2000)
  }

  const close = () => {
    setState(fade ? 'closing' : false)
    clearTimeout(timeout.current)
    if (fade) {
      timeout.current = setTimeout(() => {
        setState(false)
      }, 500)
    }
  }

  // render
  const classes = mapToCssModules(classNames(
    'toast', className
  ), cssModule)

  const fadeClasses = classNames(
    fade && style[`${state === 'hiding' ? 'slowfade' : 'fade' }`]
  )

  return (
    <Context.Provider value={{ close }}>
      {
        state && <CFade
          tag={'div'}
          className={classes}   
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          {...attributes}
          in={state === true}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          baseClass={fadeClasses}
          innerRef={innerRef}
        >
          {children}
        </CFade>
      }  
    </Context.Provider>
  )
}

CToast.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object]),
  show: PropTypes.bool,
  autohide: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  fade: PropTypes.bool,
  onStateChange: PropTypes.func
};

CToast.defaultProps = {
  fade: true
};

export default CToast
