import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//component - CoreUI / CFormFeedback

const CFormFeedback = props => {

  const {
    className,
    //
    innerRef,
    valid,
    tooltip,
    ...attributes
  } = props

  //render
  const validMode = tooltip ? 'tooltip' : 'feedback'
  const classes = classNames(
    valid ? `valid-${validMode}` : `invalid-${validMode}`,
    className
  )

  return <div className={classes} {...attributes} ref={innerRef} />
}

CFormFeedback.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  valid: PropTypes.bool,
  tooltip: PropTypes.bool
};

export const CValidFeedback = props => <CFormFeedback {...props} valid/>
export const CInvalidFeedback = props => <CFormFeedback {...props} valid={false}/>
