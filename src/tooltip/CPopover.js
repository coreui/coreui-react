import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import CTooltip from './CTooltip.js'
import { renderToString } from 'react-dom/server'

//component - CoreUI / CPopover
const template = `<h3 class="popover-header">H</h3><div class="popover-body">C</div>`
const generateContent = (content, header) => {
  return template.replace('H', renderToString(header))
                 .replace('C', renderToString(content))
}

const CPopover = props => {

  let {
    header,
    children,
    content,
    ...config
  } = props

  const computedContent = useCallback(
    generateContent(content, header),
    [content, header]
  )

  const advancedOptions = {
    ...(config ? config.advancedOptions || {}: {}),
    theme: 'cpopover'
  }

  const computedConfig = {
    ...config, 
    advancedOptions
  }

  return (
    <CTooltip content={computedContent} {...computedConfig}>
      {children}
    </CTooltip>
  )
}

CPopover.propTypes = {
  children: PropTypes.node,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
}

export default CPopover
