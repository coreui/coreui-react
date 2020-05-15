import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { pickByKeys } from '@coreui/utils/src'
import { TransitionPropTypeKeys, tagPropType } from './utils/helper.js'
import { Transition } from 'react-transition-group'

//component - CoreUI / CFade
const CFade = props => {

  const {
    tag: Tag,
    className,
    children,
    //
    innerRef,
    baseClass,
    baseClassActive,
    ...rest
  } = props

  //render
  const transitionProps = pickByKeys(rest, TransitionPropTypeKeys)
  const childPropKeys = Object.keys(rest).filter(key => {
    return !TransitionPropTypeKeys.includes(key)
  })
  const childProps = pickByKeys(rest, childPropKeys)

  return (
    <Transition {...transitionProps}>
      {(status) => {
        const isActive = status === 'entered'
        const classes = classNames(
          className,
          baseClass,
          isActive && baseClassActive
        )
        return (
          <Tag className={classes} {...childProps} ref={innerRef}>
            {children}
          </Tag>
        )
      }}
    </Transition>
  )
}

CFade.propTypes = {
  tag: tagPropType,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  baseClass: PropTypes.string,
  baseClassActive: PropTypes.string
}

CFade.defaultProps = {
  tag: 'div',
  //
  baseClass: 'fade',
  baseClassActive: 'show',
  timeout: 150,
  appear: true,
  enter: true,
  exit: true,
  in: true
}

export default CFade
