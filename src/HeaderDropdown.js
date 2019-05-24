import React, { Component } from 'react';
import { Dropdown } from 'reactstrap';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
  direction: PropTypes.string,
  ...Dropdown.propTypes
};

const defaultProps = {
  direction: 'down'
};

class AppHeaderDropdown extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const { children, ...attributes } = this.props;
    return (
      <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle} {...attributes}>
        {children}
      </Dropdown>
    );
  }
}

AppHeaderDropdown.propTypes = propTypes;
AppHeaderDropdown.defaultProps = defaultProps;

export default AppHeaderDropdown;
