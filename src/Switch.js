import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  color: PropTypes.string,
  label: PropTypes.bool,
  outline: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.oneOf(['', 'alt'])
  ]),
  size: PropTypes.oneOf(['', 'lg', 'sm']),
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  defaultValue: PropTypes.any,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  form: PropTypes.any,
  name: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['checkbox', 'radio']),
  variant: PropTypes.oneOf(['', '3d', 'pill']),
  className: PropTypes.string,
  dataOn: PropTypes.string,
  dataOff: PropTypes.string,
};

const defaultProps = {
  color: 'secondary',
  label: false,
  outline: false,
  size: '',
  checked: false,
  defaultChecked: undefined,
  disabled: undefined,
  required: undefined,
  type: 'checkbox',
  variant: '',
  dataOn: 'On',
  dataOff: 'Off',
};

class AppSwitch extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.state = {
      uncontrolled: !!this.props.defaultChecked,
      checked: this.props.defaultChecked || this.props.checked,
      selected: []
    };
  }

  toggleState(check) {
    this.setState({
      checked: check
    })
  }

  handleChange(event) {
    const target = event.target;
    this.toggleState(target.checked)

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  handleKeyDown(event) {
    if (event.key === ' ') {
      event.preventDefault();
    }
  }

  handleKeyUp(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggleState(!this.state.checked);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.uncontrolled && (this.props.checked !== prevState.checked)) {
      this.toggleState(this.props.checked)
    }
  }

  render() {
    const { className, disabled, color, name, label, outline, size, required, type, value, dataOn, dataOff, variant, ...attributes } = this.props;

    const tabindex = attributes.tabIndex
    delete attributes.tabIndex
    delete attributes.checked
    delete attributes.defaultChecked
    delete attributes.onChange

    const classes = classNames(
      className,
      'switch',
      label ? 'switch-label' : false,
      size ? `switch-${size}` : false,
      variant ? `switch-${variant}` : false,
      `switch${outline ? '-outline' : ''}-${color}${outline==='alt' ? '-alt' : ''}`,
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
      <label className={classes} tabIndex={tabindex} onKeyUp={this.handleKeyUp} onKeyDown={this.handleKeyDown}>
        <input type={type}
               className={inputClasses}
               onChange={this.handleChange}
               checked={this.state.checked}
               name={name}
               required={required}
               disabled={disabled}
               value={value}
               aria-checked={this.state.checked}
               aria-disabled={disabled}
               aria-readonly={disabled}
               {...attributes} />
        <span className={sliderClasses} data-checked={dataOn} data-unchecked={dataOff}></span>
      </label>
    );
  }
}

AppSwitch.propTypes = propTypes;
AppSwitch.defaultProps = defaultProps;

export default AppSwitch;
