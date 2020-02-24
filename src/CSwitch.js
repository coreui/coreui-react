import React, {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

//component - CoreUI / CSwitch

const CSwitch = props=>{

  let {
    className,
    //
    innerRef,
    type,
    size,
    disabled,
    color,
    labelOn,
    labelOff,
    variant,
    shape,

    name,
    required,
    value,
    ...attributes
    //label,
    //outline,
  } = props;

  const fields = useRef({firstRender: true}).current;
  const [checked, setChecked] = useState(props.defaultChecked || props.checked);
  //const [selected, setSelected] = useState([]);

  //effect - update
  useEffect(() => {
    if (fields.firstRender) return;
    setChecked(props.checked);
  },
  [props.checked]);

  useEffect(() => {
    fields.firstRender = false;
  },
  []);

  //events
  const onChange = e=>{
    const target = e.target;
    setChecked(target.checked);
    if (props.onChange) {
      props.onChange(e);
    }
  }

  //render

  delete attributes.checked;
  delete attributes.defaultChecked;
  delete attributes.onChange;

  /*
  const outlineString = this.outline ? '-outline' : ''
      const outlinedAltString = this.outline === 'alt' ? '-alt' : ''
      return [
        'c-switch form-check-label',
        `c-switch${outlineString}-${this.color}${outlinedAltString}`,
        {
          [`c-switch-${this.size}`]: this.size,
          [`c-switch-${this.shape}`]: this.shape,
          'c-switch-label': this.labelOn || this.labelOff
        }
      ]
  */
  /*
  let outline='';
  switch (variant) {
    case '3d':

      break;
    case 'opposite':
      variant="alt";
      break;
    case '3d-opposite':

      break;
  }
  */

  //console.log(variant);

  const variant2 = ['opposite', 'outline'].indexOf(variant)>-1 ? `-${variant}` : ''
  let classes = classNames(
    className,
    'c-switch form-check-label',
    labelOn||labelOff ? 'c-switch-label' : false,
    size ? `c-switch-${size}` : '',
    shape ? `c-switch-${shape}` : '',
    color ? `c-switch${variant2}-${color}` : '',
    variant=='3d' ? 'c-switch-3d' : ''
  );

  const inputClasses = classNames(
    'c-switch-input',
    'c-form-check-input',
  );

  const sliderClasses = classNames(
    'c-switch-slider'
  );

  //classes = "c-switch form-check-label c-switch-label c-switch-opposite c-switch-primary c-switch-lg"

  return (
    <label {...attributes} className={classes} ref={innerRef}>
      <input className={inputClasses} type={type} onChange={onChange} checked={checked} name={name} required={required} disabled={disabled} value={value} />
      <span className={sliderClasses} data-checked={labelOn} data-unchecked={labelOff}></span>
    </label>
  );

}

CSwitch.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  size: PropTypes.oneOf(['', 'lg', 'sm']),
  shape: PropTypes.oneOf(['', 'pill', 'square']),
  variant: PropTypes.oneOf(['', '3d', '3d-opposite', 'opposite', 'outline']),
  color: PropTypes.string,
  checked: PropTypes.bool,
  labelOn: PropTypes.string,
  labelOff: PropTypes.string,
  type: PropTypes.oneOf(['checkbox', 'radio']),

  value: PropTypes.string,
  defaultChecked: PropTypes.bool,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  form: PropTypes.any,//?
  required: PropTypes.bool,
  onChange: PropTypes.func

  //label: PropTypes.bool,
  /*
  outline: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.oneOf(['', 'alt'])
  ]),
  */

};

CSwitch.defaultProps = {
  size: '',
  checked: false,
  type: 'checkbox',
  variant: '',

  defaultChecked: false,
  disabled: false,
  required: false,
  //labelOn: 'On',
  //labelOff: 'Off',
  //label: false,
  //outline: false,
};

export default CSwitch;
