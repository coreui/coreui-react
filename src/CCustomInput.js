import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CCustomInput

const CCustomInput = props=>{

  const {
    children,
    className,
    cssModule,
    //
    innerRef,
    label,
    inline,
    valid,
    invalid,
    bsSize,
    wrapperProps,
    ...attributes
  } = props;

  //render

  const type = attributes.type;

  const customClass = mapToCssModules(classNames(
    className,
    `custom-${type}`,
    bsSize ? `custom-${type}-${bsSize}` : false,
  ), cssModule);

  const validationClassNames = mapToCssModules(classNames(
    invalid && 'is-invalid',
    valid && 'is-valid',
  ), cssModule);

  if (type === 'select') {
    return <select {...attributes} className={classNames(validationClassNames, customClass)} ref={innerRef}>{children}</select>;
  }

  if (type === 'file') {
    return (
      <div className={customClass} {...wrapperProps} ref={innerRef}>
        <input {...attributes} className={classNames(validationClassNames, mapToCssModules('custom-file-input', cssModule))} />
        <label className={mapToCssModules('custom-file-label', cssModule)} htmlFor={attributes.id}>{label || 'Choose file'}</label>
      </div>
    );
  }

  if (type !== 'checkbox' && type !== 'radio' && type !== 'switch') {
    return <input {...attributes} className={classNames(validationClassNames, customClass)} ref={innerRef} />;
  }

  const wrapperClasses = classNames(
    customClass,
    mapToCssModules(classNames(
      'custom-control',
      { 'custom-control-inline': inline }
    ), cssModule)
  );

  return (
    <div {...wrapperProps} className={wrapperClasses}>
      <input
        {...attributes}
        type={type === 'switch' ? 'checkbox' : type}
        className={classNames(validationClassNames, mapToCssModules('custom-control-input', cssModule))}
        ref={innerRef}
      />
      <label className={mapToCssModules('custom-control-label', cssModule)} htmlFor={attributes.id}>{label}</label>
      {children}
    </div>
  );

}

CCustomInput.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array, PropTypes.func]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.node,
  inline: PropTypes.bool,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  bsSize: PropTypes.string,
  wrapperProps: PropTypes.object
};

export default CCustomInput;
