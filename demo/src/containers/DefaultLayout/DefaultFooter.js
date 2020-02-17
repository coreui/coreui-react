import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {CLink} from '../../../../src';

class DefaultFooter extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <CLink href="https://coreui.io" target="_blank" rel="noopener">CoreUI</CLink>
          <span className="ml-1">&copy; 2020 creativeLabs.</span>
        </div>
        <div className="ml-auto">
          <span className="mr-1">Powered by</span>
          <CLink href="https://coreui.io/react" target="_blank" rel="noopener">CoreUI for React</CLink>
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
