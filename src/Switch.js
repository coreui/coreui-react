import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  color: PropTypes.string,
  label: PropTypes.bool,
  outline: PropTypes.bool,
  outlineAlt: PropTypes.bool,
  pill: PropTypes.bool,
  size: PropTypes.string,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  form: PropTypes.any,
  indeterminate: PropTypes.any,
  name: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  dataOn: PropTypes.string,
  dataOff: PropTypes.string,
};

const defaultProps = {
  color: 'secondary',
  label: false,
  outline: false,
  outlineAlt: false,
  pill: false,
  size: '',
  checked: false,
  defaultChecked: false,
  disabled: false,
  required: false,
  type: 'checkbox',
  dataOn: 'On',
  dataOff: 'Off',
};

class AppSwitch extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      checked: this.props.defaultChecked || this.props.checked,
    };
  }

  toggle(event) {
    const target = event.target;
    this.setState({
      checked: target.checked,
    });
  }

  render() {
    const { className, checked, disabled, color, defaultChecked, name, label, outline, outlineAlt, pill, size, required, type, value, dataOn, dataOff, ...attributes } = this.props;

    const outlined = outline || outlineAlt;

    const variant = `switch${outlined ? '-outline' : ''}-${color}${outlineAlt ? '-alt' : ''}`;

    const classes = classNames(
      className,
      'switch',
      label ? 'switch-label' : false,
      pill ? 'switch-pill' : false,
      size ? `switch-${size}` : false,
      variant,
      'form-check-label',
    );

    const inputClasses = classNames(
      'switch-input',
      'form-check-input',
    );

    const sliderClasses = classNames(
      'switch-slider',
    );

    return (
      <label className={classes}>
        <input type={type} className={inputClasses} onChange={this.toggle} checked={this.state.checked} defaultChecked={defaultChecked} name={name}
               required={required} disabled={disabled} value={value} />
        <span className={sliderClasses} data-checked={dataOn} data-unchecked={dataOff}></span>
      </label>
    );
  }
}

AppSwitch.propTypes = propTypes;
AppSwitch.defaultProps = defaultProps;

export default AppSwitch;
