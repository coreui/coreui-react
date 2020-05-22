import React, { useState } from 'react'
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

  const onEntering = node => {
    setHeight(node.scrollHeight)
  }

  const onEntered = () => {
    setHeight(null)
  }

  const onExit = node => {
    setHeight(node.scrollHeight)
  }

  const onExiting = node => {
    const _unused = node.offsetHeight // eslint-disable-line no-unused-vars
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
            ref={innerRef}
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
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  show: PropTypes.bool,
  navbar: PropTypes.bool
}

CCollapse.defaultProps = {
  show: false
}

export default CCollapse
