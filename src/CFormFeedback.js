import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CFormFeedback

const CFormFeedback = props => {

  const {
    className,
    cssModule,
    //
    innerRef,
    valid,
    tooltip,
    ...attributes
  } = props

  //render
  const validMode = tooltip ? 'tooltip' : 'feedback'
  const classes = mapToCssModules(classNames(
    valid ? `valid-${validMode}` : `invalid-${validMode}`,
    className
  ),cssModule)

  return <div className={classes} {...attributes} ref={innerRef} />
}

CFormFeedback.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  valid: PropTypes.bool,
  tooltip: PropTypes.bool
};

// export const CValidFeedback = props => <CFormFeedback {...props} valid/>
// export const CInvalidFeedback = props => <CFormFeedback {...props} valid={false}/>
export default CFormFeedback
