import React, {
  useState,
  useContext,
  useRef,
  useEffect
} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CFade from '../fade/CFade'
import { omitByKeys } from '@coreui/utils/src'
import { CFadeProps } from '../utils/helper.js'

import { Context } from './CTabs.js'
import { Context as FadeContext } from './CTabContent.js'

//component - CoreUI / CTabPane
const getIndex = el => Array.from(el.parentNode.children).indexOf(el)

const getState = r => r.current.dataset.tab || getIndex(r.current)

const CTabPane = props => {
  const {
    className,
    //
    innerRef,
    active,
    ...attributes
  } = props

  const { active: activeTab, setActiveTab } = useContext(Context) || {} 
  const fade = useContext(FadeContext)
  const ref = typeof innerRef === 'object' ? innerRef : useRef()
  typeof innerRef === 'function' && innerRef(ref)

  const [isActive, setIsActive] = useState()

  useEffect(() => {
    setIsActive(activeTab === getState(ref))
  }, [activeTab])

  useEffect(() => {
    if (active !== undefined) {
      setActiveTab ? setActiveTab(active && getState(ref)) : setIsActive(active)
    }
  }, [active])

  //render
  const classes = classNames(
    'tab-pane',
    { 'active': isActive },
    className
  )

  const attrs = omitByKeys(attributes, CFadeProps)

  return (
    <CFade
      in={isActive}
      baseClass={fade ? 'fade' : ''}
      className={classes} 
      {...attrs} 
      innerRef={ref}
    />
  )
}

CTabPane.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  active: PropTypes.bool
}

export default CTabPane
