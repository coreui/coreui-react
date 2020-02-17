import React, { Component } from 'react';
//import { NavLink } from 'react-router-dom';
import * as router from 'react-router-dom';
import {
  CBadge,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNav,
  CNavItem,
  CAsideToggler,
  CHeaderDropdown,
  CNavbarBrand,
  CSidebarToggler,
  CButton,
  CNavbarNav,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CHeaderSubheader,
  CBreadcrumb,
  CLink,
  CIcon
  } from '../../../../src';
import PropTypes from 'prop-types';

// routes config
import routes from '../../routes';

//import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import DefaultHeaderDropdown  from './DefaultHeaderDropdown'
import logo from '../../assets/img/brand/coreui-pro-base.svg'
import sygnet from '../../assets/img/brand/coreui-signet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const {
      toggleSidebarMobile,
      toggleSidebar,
      toggleAside,
      toggleTheme,
      children,
      ...attributes
    } = this.props;

    return (
      <React.Fragment>

        <CToggler
          inHeader
          className="ml-3 d-lg-none"
          toggle={toggleSidebarMobile}
        />
        <CToggler
          inHeader
          className="ml-3 d-md-down-none"
          toggle={toggleSidebar}
        />
        <CLink href="https://coreui.io" target="_blank">
          <CHeaderBrand
            className="mx-auto d-lg-none"
            src={logo}
            width="97"
            height="46"
            alt="CoreUI Logo"
          />
        </CLink>

        <CHeaderNav className="d-md-down-none mr-auto">
          <CHeaderNavItem custom className="px-3" to="/dashboard">
            Dashboard
          </CHeaderNavItem>
          <CHeaderNavItem to="/users"className="px-3">
            Users
          </CHeaderNavItem>
          <CHeaderNavItem className="px-3">
            Settings
          </CHeaderNavItem>
        </CHeaderNav>

        <CHeaderNav>
          <CToggler
            custom
            inHeader
            className="ml-3 d-md-down-none"
            toggle={toggleTheme}
            title="Toggle Light/Dark Mode"
          >
            <CIcon name="cil-moon" className="c-d-dark-none" alt="CoreUI Icons Moon" />
            <CIcon name="cil-sun" className="c-d-default-none" alt="CoreUI Icons Sun" />
          </CToggler>
          <DefaultHeaderDropdown notif/>
          <DefaultHeaderDropdown tasks/>
          <DefaultHeaderDropdown mssgs/>
          <DefaultHeaderDropdown onLogout={this.props.onLogout} accnt/>
          <CToggler
            custom
            inHeader
            className="d-md-down-none"
            toggle={(e)=>toggleAside(e)}
          >
            <CIcon className="mr-2" size="lg" name="cil-applications-settings" />
          </CToggler>
        </CHeaderNav>

        <CHeaderSubheader className="px-3 justify-content-between">
          <CBreadcrumb className="border-0" appRoutes={routes} />
          <CHeaderNav className="d-md-down-none mfe-2">
            <CHeaderNavItem>
              <CIcon name="cil-speech" alt="Settings" />
            </CHeaderNavItem>
            <CHeaderNavItem to="/dashboard">
              <CIcon name="cil-graph" alt="Dashboard" /> Dashboard
            </CHeaderNavItem>
            <CHeaderNavItem>
              <CIcon name="cil-settings" alt="Settings" /> Settings
            </CHeaderNavItem>
          </CHeaderNav>
        </CHeaderSubheader>

      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
