import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//component - CoreUI / CInput
const commonPropTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  valid: PropTypes.bool,
  invalid: PropTypes.bool
}

const CInput = props => {

  let {
    className,
    //
    innerRef,
    type,
    valid,
    invalid,
    plaintext,
    size,
    sizeHtml,
    ...attributes
  } = props

  // render
  const classes = 
  classNames(
    plaintext ? 'form-control-plaintext' : 'form-control',
    size && `form-control-${size}`,
    invalid && 'is-invalid',
    valid && 'is-valid',
    className
  )

  return <input 
    className={classes} 
    type={type}
    {...attributes}
    size={sizeHtml} 
    ref={innerRef}
  />
}

CInput.propTypes = {
  ...commonPropTypes,
  plaintext: PropTypes.bool,
  type: PropTypes.string,
  size: PropTypes.string,
  sizeHtml: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CInput.defaultProps = {
  type: 'text'
};

const CTextarea = props => {

  let {
    className,
    //
    innerRef,
    valid,
    invalid,
    plaintext,
    size,
    ...attributes
  } = props

  // render
  const classes = classNames(
      plaintext ? 'form-control-plaintext' : 'form-control',
      size && `form-control-${size}`,
      invalid && 'is-invalid',
      valid && 'is-valid',
      className
  )

  return <textarea className={classes} {...attributes} ref={innerRef}/>
}

CTextarea.propTypes = {
  ...commonPropTypes,
  plaintext: PropTypes.bool,
  size: PropTypes.string
};

const CInputFile = props => {

  let {
    className,
    //
    innerRef,
    valid,
    invalid,
    custom,
    ...attributes
  } = props

  // render

  const classes = classNames(
    custom ? 'custom-file-input' : 'form-control-file',
    invalid && 'is-invalid',
    valid && 'is-valid',
    className
  )

  return <input className={classes} {...attributes} type="file" ref={innerRef}/>
}

CInputFile.propTypes = {
  ...commonPropTypes,
  custom: PropTypes.bool
};

const CInputCheckbox = props => {

  let {
    className,
    //
    innerRef,
    valid,
    invalid,
    custom,
    ...attributes
  } = props

  // render

  const classes = classNames(
    custom ? 'custom-control-input' : 'form-check-input',
    invalid && 'is-invalid',
    valid && 'is-valid',
    className
  )

  return <input className={classes} type="checkbox" {...attributes} ref={innerRef}/>
}

CInputCheckbox.propTypes = {
  ...commonPropTypes,
  custom: PropTypes.bool
};

const CInputRadio = props => <CInputCheckbox {...props} type="radio"/> 

const CSelect = props => {

  let {
    className,
    //
    innerRef,
    valid,
    invalid,
    size,
    sizeHtml,
    custom,
    ...attributes
  } = props

  // render
  const baseClass = custom ? 'custom-select' : 'form-control'
  const classes = classNames(
    baseClass,
    size && `${baseClass}-${size}`,
    invalid && 'is-invalid',
    valid && 'is-valid',
    className
  )

  return <select 
    className={classes} 
    {...attributes} 
    size={sizeHtml} 
    ref={innerRef}
  />
}

CSelect.propTypes = {
  ...commonPropTypes,
  size: PropTypes.string,
  sizeHtml: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export {
  CInput,
  CTextarea,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CSelect
}