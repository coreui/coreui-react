import React, {useState, useEffect, useRef, useCallback} from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'

//component - CoreUI / CTooltip
const CTooltip = props=>{

  let {
    //
    children,
    content,
    interactive,
    placement,
    trigger,
    advancedOptions,
    unmountOnHide
  } = props

  const el = React.useMemo(() => document.createElement("div"), [])
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const instance = tippy(ref.current, {
      interactive,
      placement,
      trigger,
      ...advancedOptions
      content: el,
      onHidden: () => setVisible(false),
      onShow: () => setVisible(true),
    });
    return () => instance.destroy();
  },[]);
  return (
    <>
      {(visible || unmountOnHide === false) && ReactDom.createPortal(content, el)}
      {React.cloneElement(children, { ref })}
    </>
}

CTooltip.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node,
  interactive: PropTypes.bool,
  placement: PropTypes.oneOf([
    '', 'top-end', 'top', 'top-start',
    'bottom-end', 'bottom', 'bottom-start',
    'right-start', 'right', 'right-end',
    'left-start', 'left', 'left-end'
  ]),
  trigger: PropTypes.string,
  advancedOptions: PropTypes.object,
  unmountOnHide: PropTypes.bool
}

CTooltip.defaultProps = {
  content: '',
  interactive: false,
  placement: 'top',
  trigger: 'mouseenter focus',
  advancedOptions: {}
}

export default CTooltip
