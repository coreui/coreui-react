import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container, Nav, NavItem, NavLink, Badge, DropdownToggle, DropdownMenu } from 'reactstrap';

import {
  AppAside,
  AppAsideToggler,
  AppBreadcrumb2 as AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppHeaderDropdown,
  AppNavbarBrand,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  // AppSidebarNav as AppSidebarNav,
  AppSidebarNav2 as AppSidebarNav,
  AppSidebarToggler,
} from '../../../../src';
// sidebar nav config
import navigation from '../../_nav.js';
// routes config
import routes from '../../routes.js';

import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'
import avatar from '../../assets/img/avatars/6.jpg'

class DefaultLayout extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <AppSidebarToggler className="d-lg-none" display="md" mobile />
          <AppNavbarBrand
            full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
            minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
          />
          <AppSidebarToggler className="d-md-down-none" display="lg" />
          <Nav className="ml-auto" navbar>
            <NavItem className="d-md-down-none">
              <NavLink href="#"><i className="cui-bell icons font-xl d-block"></i><Badge pill color="danger">5</Badge></NavLink>
            </NavItem>
            <NavItem className="d-md-down-none">
              <NavLink href="#"><i className="cui-list icons icons font-xl d-block"></i></NavLink>
            </NavItem>
            <NavItem className="d-md-down-none">
              <NavLink href="#"><i className="cui-location-pin icons icons font-xl d-block"></i></NavLink>
            </NavItem>
            <AppHeaderDropdown>
              <DropdownToggle nav>
                <img src={avatar} className="img-avatar" alt="admin@bootstrapmaster.com" />
              </DropdownToggle>
              <DropdownMenu right style={{ height: '400px' }}>
                AppHeaderDropdown
              </DropdownMenu>
            </AppHeaderDropdown>
          </Nav>
          <AppAsideToggler className="d-md-down-none" />
          <AppAsideToggler className="d-lg-none" mobile />
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            {/*<AppSidebarNav navConfig={navigation} {...this.props} />*/}
            <AppSidebarNav navConfig={navigation} {...this.props} router={router}/>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            {/*<AppBreadcrumb appRoutes={routes}/>*/}
            <AppBreadcrumb appRoutes={routes} router={router}/>
            <Container fluid>
              <Switch>
                {routes.map((route, idx) => {
                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                        <route.component {...props} />
                      )} />)
                      : (null);
                  },
                )}
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Container>
          </main>
          <AppAside fixed>
            Aside
          </AppAside>
        </div>
        <AppFooter>
          <span><a href="https://coreui.io">CoreUI</a> &copy; 2020 creativeLabs</span>
          <span className="ml-auto">Powered by <a href="https://coreui.io/react">CoreUI for React</a></span>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
