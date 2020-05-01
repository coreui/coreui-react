import React, {useState, useEffect, useRef, useCallback} from 'react'
import PropTypes from 'prop-types'
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import { renderToString } from 'react-dom/server'

//component - CoreUI / CTooltip
const CTooltip = props=>{

  let {
    //
    children,
    content,
    interactive,
    placement,
    trigger,
    advancedOptions
  } = props

  const computedContent = useCallback(
    () => typeof content === 'string' ? content : renderToString(content),
    [content]
  )

  const config = {
    allowHTML: true,
    content: computedContent,
    interactive,
    placement,
    trigger,
    ...advancedOptions
  }

  const key = useState(Math.random().toString(36).substr(2))[0]
  const instance = useRef()
  
  useEffect(() => {
    if (instance.current) {
      instance.current.setProps(config)
    }
  })

  useEffect(() => {
    const node = document.querySelector(`[data-tooltip="${key}"]`)
    instance.current = tippy(node, config)
    return () => instance.current.destroy()
  }, [key])


  return (
    <React.Fragment>
      {
        React.cloneElement(children, {
          'data-tooltip': key
        })
      }
    </React.Fragment>
  )
}

CTooltip.propTypes = {
  children: PropTypes.node,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  interactive: PropTypes.bool,
  placement: PropTypes.oneOf([
    '', 'top-end', 'top', 'top-start',
    'bottom-end', 'bottom', 'bottom-start',
    'right-start', 'right', 'right-end',
    'left-start', 'left', 'left-end'
  ]),
  trigger: PropTypes.string,
  advancedOptions: PropTypes.object
}

CTooltip.defaultProps = {
  content: '',
  interactive: false,
  placement: 'top',
  trigger: 'mouseenter focus',
  advancedOptions: {}
}

export default CTooltip
