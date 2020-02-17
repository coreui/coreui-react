import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import classNames from 'classnames';

import {
  CContainer,
  CAside,
  CFooter,
  CHeader,
  CSidebar,
  CSidebarFooter,
  CSidebarForm,
  CSidebarHeader,
  CSidebarMinimizer,
  CBreadcrumb,
  CSidebarNav,
  CNav,
  CTabContent,
  CProgress,
  CNavItem,
  CNavLink,
  CTabPane,
  CListGroup,
  CListGroupItem,
  CSwitch,
  CLabel,
  CInput,
  CSidebarBrand,
  CSidebarDivider,
  CSidebarTitle
} from '../../../../src';

// routes config
import routes from '../../routes';

const DefaultSidebar = React.lazy(() => import('./DefaultSidebar'));
const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  constructor(props) {
    super(props);

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.toggleSidebarMobile = this.toggleSidebarMobile.bind(this);
    this.minimizeSidebar = this.minimizeSidebar.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
    this.toggleAside = this.toggleAside.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
    this.state = {
      isAsideOpen: false,
      isSidebarOpen: 'responsive',
      isSidebarMinimized: false,
      themeDark: false,
      sidebarMobile: false,
      sidebarDisplay: 'sm'
    };
  }

  loading = () => <div className="animated fadeIn pt-1 text-center"><div className="sk-spinner sk-spinner-pulse"></div></div>;

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

/*
this.$root.$on('toggle-sidebar', () => {
     const sidebarOpened = this.show === true || this.show === 'responsive'
     this.show = sidebarOpened ? false : 'responsive'
   })
   this.$root.$on('toggle-sidebar-mobile', () => {
     const sidebarClosed = this.show === 'responsive' || this.show === false
     this.show = sidebarClosed ? true : 'responsive'
   })
   */

  toggleSidebar(display, mobile) {
    //alert('sidebar')
    const sidebarOpened = this.state.isSidebarOpen === true || this.state.isSidebarOpen === 'responsive'
    this.setState({
      isSidebarOpen: sidebarOpened ? false : 'responsive',
    });
    /*
    this.setState({
      isSidebarOpen: this.state.isSidebarOpen ? false : 'responsive',
      sidebarDisplay: display ? true : false,
      sidebarMobile: mobile ? true : false
    });
    */
  }

  toggleSidebarMobile(display, mobile) {
    const sidebarClosed = this.state.isSidebarOpen === 'responsive' || this.state.isSidebarOpen === false
    //alert('sidebarMobile '+(sidebarClosed ? true : 'responsive'))
    this.setState({
      isSidebarOpen: sidebarClosed ? true : 'responsive',
    });
    /*
    this.setState({
      isSidebarOpen: this.state.isSidebarOpen ? false : 'responsive',
      sidebarDisplay: display ? true : false,
      sidebarMobile: mobile ? true : false
    });
    */
  }

  minimizeSidebar() {
    this.setState({
      isSidebarMinimized: !this.state.isSidebarMinimized
    });
  }

  closeSidebar() {
    this.setState({
      isSidebarOpen: 'responsive',
    });
  }

  toggleAside(e) {
    e.preventDefault();
    this.setState({
      isAsideOpen: !this.state.isAsideOpen
    });
  }

  toggleTheme() {
    this.setState({
      themeDark: !this.state.themeDark
    });
  }

  render() {

    // dark theme
    const classes = classNames(
    'c-app c-default-layout',
    this.state.themeDark ? 'c-dark-theme' : false
    );

    return (
      <div className={classes}>
        <DefaultSidebar
          sidebarShow={this.state.isSidebarOpen}
          sidebarMinimize={this.state.isSidebarMinimized}
          sidebarDisplay={this.state.sidebarDisplay}
          sidebarMobile={this.state.sidebarMobile}
          onChange={this.closeSidebar}
          location={this.props.location}
        />
        <DefaultAside
          sidebarShow={this.state.isAsideOpen}
          toggleAside={this.toggleAside}
        />
        <div className="c-wrapper c-fixed-components">
          <CHeader withSubheader>
            <Suspense  fallback={this.loading()}>
              <DefaultHeader
                onLogout={e=>this.signOut(e)}
                toggleSidebar={this.toggleSidebar}
                toggleSidebarMobile={this.toggleSidebarMobile}
                toggleAside={this.toggleAside}
                toggleTheme={this.toggleTheme}
              />
            </Suspense>
          </CHeader>
          <div className="c-body">
            <main className="c-main">
              <CContainer fluid>
                <Suspense fallback={this.loading()}>
                  <Switch>
                    {routes.map((route, idx) => {
                      return route.component ? (
                        <Route
                          key={idx}
                          path={route.path}
                          exact={route.exact}
                          name={route.name}
                          render={props => (
                            <route.component {...props} />
                          )} />
                      ) : (null);
                    })}
                    <Redirect from="/" to="/dashboard" />
                  </Switch>
                </Suspense>
              </CContainer>
            </main>
          </div>
          <CFooter>
            <Suspense fallback={this.loading()}>
              <DefaultFooter />
            </Suspense>
          </CFooter>
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
