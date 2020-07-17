import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Transition } from 'react-transition-group'

const getTransitionClass = s => {
  return s === 'entering' ? 'collapsing' : 
         s === 'entered' ? 'collapse show' :
         s === 'exiting' ? 'collapsing' : 'collapse'
}

//component - CoreUI / CCollapse
const CCollapse = props => {

  const {
    children,
    className,
    //
    innerRef,
    show,
    navbar,
    ...attributes
  } = props

  const [height, setHeight] = useState()

  const ref = typeof innerRef === 'object' ? innerRef : useRef()
  typeof innerRef === 'function' && innerRef(ref)

  const onEntering = () => {
    setHeight(ref.current.scrollHeight)
  }

  const onEntered = () => {
    setHeight(null)
  }

  const onExit = () => {
    setHeight(ref.current.scrollHeight)
  }

  const onExiting = () => {
    const _unused = ref.current.offsetHeight // eslint-disable-line no-unused-vars
    setHeight(0)
  }

  const onExited = () => {
    setHeight(null)
  }

  //render
  return (
    <Transition
      in={show}
      timeout={350}
      appear={false}
      enter={true}
      exit={true}
      onEntering={onEntering}
      onEntered={onEntered}
      onExit={onExit}
      onExiting={onExiting}
      onExited={onExited}
      nodeRef={ref}
    >
      {(status) => {
        let collapseClass = getTransitionClass(status)
        const classes = classNames(
          className,
          collapseClass,
          navbar && 'navbar-collapse'
        )
        const style = height === null ? null : { height }
        return (
          <div
            {...attributes}
            style={{ ...attributes.style, ...style }}
            className={classes}
            ref={ref}
          >
            {children}
          </div>
        )
      }}
    </Transition>
  )
}

CCollapse.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  show: PropTypes.bool,
  navbar: PropTypes.bool
}

export default CCollapse
