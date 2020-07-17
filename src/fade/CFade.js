import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { pickByKeys, omitByKeys } from '@coreui/utils/src'
import { TransitionPropTypeKeys, tagPropType } from '../utils/helper.js'
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
  const childProps = omitByKeys(rest, TransitionPropTypeKeys)

  const ref = typeof innerRef === 'object' ? innerRef : useRef()
  typeof innerRef === 'function' && innerRef(ref)



  return (
    <Transition {...transitionProps} nodeRef={ref}>
      {(status) => {
        const isActive = status === 'entered'
        const classes = classNames(
          className,
          baseClass,
          isActive && baseClassActive
        )
        return (
          <Tag className={classes} {...childProps} ref={ref}>
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
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
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
