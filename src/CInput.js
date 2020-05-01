import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules, tagPropType } from './Shared/helper.js'

//component - CoreUI / CInput
const commonPropTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  valid: PropTypes.bool,
  invalid: PropTypes.bool
}

const CInput = props => {

  let {
    className,
    cssModule,
    //
    innerRef,
    type,
    valid,
    invalid,
    plaintext,
    elementSize,
    ...attributes
  } = props

  // render
  const classes = mapToCssModules(
  classNames(
    plaintext ? 'form-control-plaintext' : 'form-control',
    elementSize && `form-control-${elementSize}`,
    invalid && 'is-invalid',
    valid && 'is-valid',
    className
  ), cssModule)

  return <input className={classes} type={type} {...attributes} ref={innerRef}/>
}

CInput.propTypes = {
  ...commonPropTypes,
  plaintext: PropTypes.bool,
  type: PropTypes.string,
  elementSize: PropTypes.string
};

CInput.defaultProps = {
  type: 'text'
};

const CTextarea = props => {

  let {
    className,
    cssModule,
    //
    innerRef,
    valid,
    invalid,
    plaintext,
    size,
    ...attributes
  } = props

  // render
  const classes = mapToCssModules(classNames(
      plaintext ? 'form-control-plaintext' : 'form-control',
      size && `form-control-${size}`,
      invalid && 'is-invalid',
      valid && 'is-valid',
      className
  ), cssModule)

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
    cssModule,
    //
    innerRef,
    valid,
    invalid,
    custom,
    ...attributes
  } = props

  // render

  const classes = mapToCssModules(classNames(
    custom ? 'custom-file-input' : 'form-control-file',
    invalid && 'is-invalid',
    valid && 'is-valid',
    className
  ), cssModule)

  return <input className={classes} {...attributes} type="file" ref={innerRef}/>
}

CInputFile.propTypes = {
  ...commonPropTypes,
  custom: PropTypes.bool
};

const CInputCheckbox = props => {

  let {
    className,
    cssModule,
    //
    innerRef,
    valid,
    invalid,
    custom,
    ...attributes
  } = props

  // render

  const classes = mapToCssModules(classNames(
    custom ? 'custom-control-input' : 'form-check-input',
    invalid && 'is-invalid',
    valid && 'is-valid',
    className
  ), cssModule)

  return <input className={classes} type="checkbox" {...attributes} ref={innerRef}/>
}

CInputCheckbox.propTypes = {
  ...commonPropTypes,
  custom: PropTypes.bool
};

const CInputRadio = props => <CInputCheckbox {...props} type="radio"/> 

export {
  CInput,
  CTextarea,
  CInputFile,
  CInputCheckbox,
  CInputRadio
}