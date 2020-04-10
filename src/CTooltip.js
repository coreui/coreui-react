import React, {useState, useEffect, useRef, useCallback} from 'react';
import PropTypes from 'prop-types';
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css';
import { renderToString } from 'react-dom/server'

// TODO: reference to tippy instance as a prop? possibility of components as a content?

//component - CoreUI / CTooltip
const generateKey = () => Math.random().toString(36).substr(2)

const CTooltip = props=>{

  let {
    //
    children,
    allowHTML,
    content,
    delay,
    duration,
    hideOnClick,
    interactive,
    offset,
    placement,
    showOnCreate,
    trigger,
    advancedOptions
  } = props;

  const computedContent = useCallback(
    () => typeof content === 'string' ? content : renderToString(content),
    [content]
  );

  const config = {
    allowHTML,
    content: computedContent,
    delay,
    duration,
    hideOnClick,
    interactive,
    offset,
    placement,
    showOnCreate,
    trigger,
    ...advancedOptions
  }

  const key = useState(generateKey())[0]
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
    <>
      {
        React.cloneElement(children, {
          'data-tooltip': key
        })
      }
    </>
  );

}

CTooltip.propTypes = {
  allowHTML: PropTypes.bool,
  config: PropTypes.object,
  children: PropTypes.node,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  delay: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  hideOnClick: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  interactive: PropTypes.bool,
  offset: PropTypes.array,
  //TODO posible positions check
  placement: PropTypes.string,
  showOnCreate: PropTypes.bool,
  trigger: PropTypes.string,
  advancedOptions: PropTypes.object
}

CTooltip.defaultProps = {
  allowHTML: false,
  content: '',
  delay: 0,
  duration: [300, 250],
  hideOnClick: true,
  interactive: false,
  offset: [0, 10],
  placement: 'top',
  showOnCreate: false,
  trigger: 'mouseenter focus',
  advancedOptions: {}
};

export default CTooltip;
