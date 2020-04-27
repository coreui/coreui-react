import React, { useState, useContext, createRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'
import { Context } from './CTabs.js'

//component - CoreUI / CTabPane
const getIndex = (el) => Array.from(el.parentNode.children).indexOf(el)

const getState = r => r.current.id || getIndex(r.current)

const CTabPane = props => {

  const {
    className,
    cssModule,
    //
    innerRef,
    active,
    ...attributes
  } = props

  const context = useContext(Context)
  const act = (context || {}).active
  const ref = createRef()
  innerRef && innerRef(ref)
  const [isActive, setIsActive] = useState(active)

  useEffect(() => setIsActive(active || act === getState(ref)), [act, active])

  //render
  const classes = mapToCssModules(classNames(
    'tab-pane',
    { 'active': isActive },
    className
  ), cssModule)

  return (
    <div className={classes} {...attributes} ref={ref}/>
  )
}

CTabPane.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object]),
  active: PropTypes.bool
};

export default CTabPane
