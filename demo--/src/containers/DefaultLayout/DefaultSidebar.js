import React, { Component, Suspense } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as router from 'react-router-dom';
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CNavItem,
  CProgress,
  CSidebarMinimizer,
  CSidebarNavItem,
  CSidebarNavDropdown
} from '../../../../src';

//logo
import logo from '../../assets/img/brand/coreui-pro-base.svg'
import sygnet from '../../assets/img/brand/coreui-signet.svg'

// sidebar nav config
import navigation from '../../_nav';

class DefaultSidebar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1',
      minimize: props.sidebarMinimize,
      k: 2
    };
    this.lastSidebarMinimize = props.sidebarMinimize;
  }

  render() {

    const {
      sidebarShow,
      sidebarMinimize,
      onChange,

      sidebarDisplay,//
      sidebarMobile,//
      location,
      ...attributes
    } = this.props;

    const classesSidebar = classNames(
    'c-sidebar-dark'
    );

    if (sidebarMinimize!=this.lastSidebarMinimize){
      this.state.minimize = sidebarMinimize;
      this.lastSidebarMinimize = sidebarMinimize;
    }

    //alert(sidebarShow)

    return (
      <CSidebar
        show={sidebarShow}
        unfoldable
        minimize={this.state.minimize}
        onChange={onChange}
      >
        <CSidebarBrand
          imgFull={{ width: 118, height: 46, alt: 'Logo', src: logo}}
          imgMinimized={{ width: 118, height: 46, alt: 'Logo', src: sygnet}}
          linkProps={{ href: 'https://coreui.io/', target: '_blank'}}
        />
        <Suspense>
          <CSidebarNav navConfig={navigation} location={location}>
            <CSidebarNavDivider />
            <CSidebarNavTitle>System Utilization</CSidebarNavTitle>
            <CNavItem custom className="px-3 d-compact-none c-d-minimized-none">
              <div className="text-uppercase mb-1"><small><b>CPU Usage</b></small></div>
              <CProgress size="xs" value="25" color="info" />
              <small className="text-muted">348 Processes. 1/4 Cores.</small>
            </CNavItem>
            <CNavItem custom className="px-3 d-compact-none c-d-minimized-none">
              <div className="text-uppercase mb-1"><small><b>Memory Usage</b></small></div>
              <CProgress size="xs" value="70" color="warning" />
              <small className="text-muted">11444GB/16384MB</small>
            </CNavItem>
            <CNavItem custom className="px-3 mb-3 d-compact-none c-d-minimized-none">
              <div className="text-uppercase mb-1"><small><b>SSD 1 Usage</b></small></div>
              <CProgress size="xs" value="95" color="danger" />
              <small className="text-muted">243GB/256GB</small>
            </CNavItem>
          </CSidebarNav>
        </Suspense>
        <CSidebarMinimizer className="c-d-md-down-none" onClick={()=>{this.setState({minimize: !this.state.minimize})}} />
      </CSidebar>
    );
  }
}

DefaultSidebar.propTypes = {
  children: PropTypes.node,
};

DefaultSidebar.defaultProps = {
};

export default DefaultSidebar;
