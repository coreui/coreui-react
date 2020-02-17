import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as router from 'react-router-dom';
import {
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CListGroup,
  CListGroupItem,
  CSwitch,
  CProgress,
  CSidebar,
  CIcon,
  CImg,
  CBadge,
  CSidebarClose
} from '../../../../src';

//logo
import logo from '../../assets/img/brand/coreui-pro-base.svg'
import sygnet from '../../assets/img/brand/coreui-signet.svg'

// sidebar nav config
import navigation from '../../_nav';

class DefaultAside extends Component {

  constructor(props) {
    super(props);

    this.toggleAsideTab = this.toggleAsideTab.bind(this);
    this.state = {
      activeAsideTab: 'timeline',
    };
  }

  toggleAsideTab(name) {
    this.setState({
      activeAsideTab: name
    });
  }

  render() {

    const {
      sidebarShow,
      toggleAside,
      ...attributes
    } = this.props;

    const classesSidebar = classNames(
    'c-sidebar-dark'
    );

    return (
      <CSidebar
        fixed
        aside
        colorScheme='light'
        size='lg'
        overlaid
        show={sidebarShow}
      >

        <CNav variant='tabs' className='nav-underline nav-underline-primary'>
          <CNavItem custom>
            <CNavLink
              active={this.state.activeAsideTab === 'timeline'}
              onClick={() => { this.toggleAsideTab('timeline'); }}>
              <CIcon name="cil-list" alt="CoreUI Icons List" />
            </CNavLink>
          </CNavItem>
          <CNavItem custom>
            <CNavLink active={this.state.activeAsideTab === 'messages'}
              onClick={() => { this.toggleAsideTab('messages'); }}>
              <CIcon name="cil-speech" alt="CoreUI Icons Speech" />
              </CNavLink>
            </CNavItem>
          <CNavItem custom>
            <CNavLink active={this.state.activeAsideTab === 'settings'}
              onClick={() => { this.toggleAsideTab('settings'); }}>
              <CIcon name="cil-settings" alt="CoreUI Icons Settings" />
            </CNavLink>
          </CNavItem>
        </CNav>

        <CSidebarClose onClick={(e)=>toggleAside(e)} />

        <CTabContent activeTab={this.state.activeAsideTab}>

          <CTabPane tabId="timeline">
            <CListGroup variant="accent">
              <CListGroupItem color="secondary" className="bg-light text-center font-weight-bold text-muted text-uppercase small">Today</CListGroupItem>
              <CListGroupItem accent="warning" href="#" className="list-group-item-divider">
                <div className="c-avatar float-right">
                  <CImg
                    className="c-avatar-img"
                    src="assets/img/avatars/7.jpg"
                    alt="admin@bootstrapmaster.com"
                  />
                </div>
                <div>Meeting with <strong>Lucas</strong></div>
                <small className="text-muted mr-3"><CIcon name="cil-calendar" /> 1 - 3pm</small>
                <small className="text-muted"><CIcon name="cil-location-pin" /> Palo Alto, CA</small>
              </CListGroupItem>
              <CListGroupItem accent="info" href="#">
                <div className="c-avatar float-right">
                  <CImg
                    className="c-avatar-img"
                    src="assets/img/avatars/4.jpg"
                    alt="admin@bootstrapmaster.com"
                  />
                </div>
                <div>Skype with <strong>Megan</strong></div>
                <small className="text-muted mr-3"><CIcon name="cil-calendar" />  4 - 5pm</small>
                <small className="text-muted"><CIcon name="cil-skype" />  On-line</small>
              </CListGroupItem>
              <hr className="transparent mx-3 my-0" />
              <CListGroupItem color="secondary" className="bg-light text-center font-weight-bold text-muted text-uppercase small">Tomorrow</CListGroupItem>
              <CListGroupItem accent="danger" href="#" className="list-group-item-divider">
                <div>New UI Project - <strong>deadline</strong></div>
                <small className="text-muted mr-3"><CIcon name="cil-calendar" /> 10 - 11pm</small>
                <small className="text-muted"><CIcon name="cil-home" /> creativeLabs HQ</small>
                <div className="c-avatars-stack mt-2">
                  <div className="c-avatar c-avatar-xs"><CImg className="c-avatar-img" src="assets/img/avatars/2.jpg" alt="admin@bootstrapmaster.com" /></div>
                  <div className="c-avatar c-avatar-xs"><CImg className="c-avatar-img" src="assets/img/avatars/3.jpg" alt="admin@bootstrapmaster.com" /></div>
                  <div className="c-avatar c-avatar-xs"><CImg className="c-avatar-img" src="assets/img/avatars/4.jpg" alt="admin@bootstrapmaster.com" /></div>
                  <div className="c-avatar c-avatar-xs"><CImg className="c-avatar-img" src="assets/img/avatars/5.jpg" alt="admin@bootstrapmaster.com" /></div>
                  <div className="c-avatar c-avatar-xs"><CImg className="c-avatar-img" src="assets/img/avatars/6.jpg" alt="admin@bootstrapmaster.com" /></div>
                </div>
              </CListGroupItem>
              <CListGroupItem accent="success" href="#" className="c-list-group-item-divider">
                <div><strong>#10 Startups.Garden</strong> Meetup</div>
                <small className="text-muted mr-3"><CIcon name="cil-calendar" /> 1 - 3pm</small>
                <small className="text-muted"><CIcon name="cil-location-pin" /> Palo Alto, CA</small>
              </CListGroupItem>
              <CListGroupItem accent="primary" href="#" className="c-list-group-item-divider">
                <div><strong>Team meeting</strong></div>
                <small className="text-muted mr-3"><CIcon name="cil-calendar" /> 4 - 6pm</small>
                <small className="text-muted"><CIcon name="cil-home" /> creativeLabs HQ</small>
                <div className="c-avatars-stack mt-2">
                  <div className="c-avatar c-avatar-xs"><CImg className="c-avatar-img" src="assets/img/avatars/2.jpg" alt="admin@bootstrapmaster.com" /></div>
                  <div className="c-avatar c-avatar-xs"><CImg className="c-avatar-img" src="assets/img/avatars/3.jpg" alt="admin@bootstrapmaster.com" /></div>
                  <div className="c-avatar c-avatar-xs"><CImg className="c-avatar-img" src="assets/img/avatars/4.jpg" alt="admin@bootstrapmaster.com" /></div>
                  <div className="c-avatar c-avatar-xs"><CImg className="c-avatar-img" src="assets/img/avatars/5.jpg" alt="admin@bootstrapmaster.com" /></div>
                  <div className="c-avatar c-avatar-xs"><CImg className="c-avatar-img" src="assets/img/avatars/6.jpg" alt="admin@bootstrapmaster.com" /></div>
                  <div className="c-avatar c-avatar-xs"><CImg className="c-avatar-img" src="assets/img/avatars/7.jpg" alt="admin@bootstrapmaster.com" /></div>
                  <div className="c-avatar c-avatar-xs"><CImg className="c-avatar-img" src="assets/img/avatars/8.jpg" alt="admin@bootstrapmaster.com" /></div>
                </div>
              </CListGroupItem>
            </CListGroup>
          </CTabPane>

          <CTabPane className="p-3" tabId="messages">
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="c-avatar">
                  <CImg className="c-avatar-img" src="assets/img/avatars/7.jpg" alt="admin@bootstrapmaster.com" />
                  <CBadge color="success" className="c-avatar-status"> </CBadge>
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="c-avatar">
                  <CImg className="c-avatar-img" src="assets/img/avatars/7.jpg" alt="admin@bootstrapmaster.com" />
                  <CBadge color="success" className="c-avatar-status"> </CBadge>
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="c-avatar">
                  <CImg className="c-avatar-img" src="assets/img/avatars/7.jpg" alt="admin@bootstrapmaster.com" />
                  <CBadge color="success" className="c-avatar-status"> </CBadge>
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="c-avatar">
                  <CImg className="c-avatar-img" src="assets/img/avatars/7.jpg" alt="admin@bootstrapmaster.com" />
                  <CBadge color="success" className="c-avatar-status"> </CBadge>
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="c-avatar">
                  <CImg className="c-avatar-img" src="assets/img/avatars/7.jpg" alt="admin@bootstrapmaster.com" />
                  <CBadge color="success" className="c-avatar-status"> </CBadge>
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
            </div>
          </CTabPane>

          <CTabPane className="p-3" tabId="settings">
            <h6>Settings</h6>
            <div>
              <div className="clearfix mt-4"><small><b>Option 1</b></small>
                <CSwitch className="float-right" shape="pill" variant="opposite" color="success" size="sm" labelOn="on" labelOff="off" checked />
              </div>
              <div><small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small></div>
            </div>
            <div>
              <div className="clearfix mt-3"><small><b>Option 2</b></small>
                <CSwitch className="float-right" shape="pill" variant="opposite" color="success" size="sm" labelOn="on" labelOff="off" />
              </div>
              <div><small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small></div>
            </div>
            <div>
              <div className="clearfix mt-3"><small><b>Option 3</b></small>
                <CSwitch className="float-right" shape="pill" variant="opposite" color="success" size="sm" labelOn="on" labelOff="off" />
              </div>
            </div>
            <div>
              <div className="clearfix mt-3"><small><b>Option 4</b></small>
                <CSwitch className="float-right" shape="pill" variant="opposite" color="success" size="sm" labelOn="on" labelOff="off" checked />
              </div>
            </div>
            <hr />
            <h6>System Utilization</h6>
            <div className="text-uppercase mb-1 mt-4"><small><b>CPU Usage</b></small></div>
            <CProgress size="xs" barClassName="bg-info" value="25" />
            <small className="text-muted">348 Processes. 1/4 Cores.</small>
            <div className="text-uppercase mb-1 mt-2"><small><b>Memory Usage</b></small></div>
            <CProgress size="xs" barClassName="bg-warning" value="70" />
            <small className="text-muted">11444GB/16384MB</small>
            <div className="text-uppercase mb-1 mt-2"><small><b>SSD 1 Usage</b></small></div>
            <CProgress size="xs" barClassName="bg-danger" value="95" />
            <small className="text-muted">243GB/256GB</small>
            <div className="text-uppercase mb-1 mt-2"><small><b>SSD 2 Usage</b></small></div>
            <CProgress size="xs" barClassName="bg-success" value="10" />
            <small className="text-muted">25GB/256GB</small>
          </CTabPane>

        </CTabContent>
      </CSidebar>
    );
  }
}

DefaultAside.propTypes = {
  children: PropTypes.node,
};

DefaultAside.defaultProps = {
};

export default DefaultAside;
