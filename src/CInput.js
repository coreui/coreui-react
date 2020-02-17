import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {mapToCssModules, deprecated, warnOnce, tagPropType} from './Shared/helper.js';

//component - CoreUI / CInput

const CInput = props=>{

  let {
    tag,
    className,
    cssModule,
    //
    innerRef,
    type,
    bsSize,
    state,
    valid,
    invalid,
    addon,
    static: staticInput,
    plaintext,
    ...attributes
  } = props;

  let fields = useRef({}).current;

  const getRef = (ref)=>{
    fields.ref = ref;
    innerRef && innerRef(ref);
  }

  const focus = ()=>{
    if (fields.ref) {
      fields.ref.focus();
    }
  }

  // render

  const checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
  const isNotaNumber = new RegExp('\\D', 'g');

  const fileInput = type === 'file';
  const textareaInput = type === 'textarea';
  const selectInput = type === 'select';
  let Tag = tag || (selectInput || textareaInput ? type : 'input');

  let formControlClass = 'form-control';

  if (plaintext || staticInput) {
    formControlClass = `${formControlClass}-plaintext`;
    Tag = tag || 'input';
  } else if (fileInput) {
    formControlClass = `${formControlClass}-file`;
  } else if (checkInput) {
    if (addon) {
      formControlClass = null;
    } else {
      formControlClass = 'form-check-input';
    }
  }

  if (attributes.size && isNotaNumber.test(attributes.size)) {
    warnOnce(
      'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'
    );
    bsSize = attributes.size;
    delete attributes.size;
  }

  const classes = mapToCssModules(
    classNames(
      className,
      invalid && 'is-invalid',
      valid && 'is-valid',
      bsSize ? `form-control-${bsSize}` : false,
      formControlClass
    ),
    cssModule
  );

  if (Tag === 'input' || (tag && typeof tag === 'function')) {
    attributes.type = type;
  }

  if (
    attributes.children &&
    !(
      plaintext ||
      staticInput ||
      type === 'select' ||
      typeof Tag !== 'string' ||
      Tag === 'select'
    )
  ) {
    warnOnce(
      `Input with a type of "${type}" cannot have children. Please use "value"/"defaultValue" instead.`
    );
    delete attributes.children;
  }

  return <Tag {...attributes} className={classes} ref={innerRef} />;

}

CInput.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  type: PropTypes.string,
  size: PropTypes.string,
  bsSize: PropTypes.string,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  plaintext: PropTypes.bool,
  addon: PropTypes.bool
};

CInput.defaultProps = {
  type: 'text'
};

export default CInput;
