import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DefaultFooter extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <a href="https://coreui.io" target="_blank">CoreUI</a>
          <span className="ml-1">&copy; 2019 creativeLabs.</span>
        </div>
        <div className="ml-auto">
          <span className="mr-1">Powered by</span>
          <a href="https://coreui.io/react" target="_blank">CoreUI for React</a>
        </div>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = {
  children: PropTypes.node,
};

DefaultFooter.defaultProps = {};

export default DefaultFooter;
