import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CProgress,
  CIcon,
  CImg,
  CHeaderNavLink
} from '../../../../src';

import avatar7 from '../../assets/img/avatars/7.jpg'
import avatar6 from '../../assets/img/avatars/6.jpg'
import avatar5 from '../../assets/img/avatars/5.jpg'
import avatar4 from '../../assets/img/avatars/4.jpg'

const propTypes = {
  notif: PropTypes.bool,
  accnt: PropTypes.bool,
  tasks: PropTypes.bool,
  mssgs: PropTypes.bool,
};
const defaultProps = {
  notif: false,
  accnt: false,
  tasks: false,
  mssgs: false,
};

class DefaultHeaderDropdown extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  dropNotif() {
    const itemsCount = 5;
    return (
      <CDropdown
        inNav
        className="c-header-nav-item mx-2"
        direction="down"
      >
        <CDropdownToggle nav header>
          <CIcon name="cil-bell" /><CBadge shape="pill" color="danger">{itemsCount}</CBadge>
        </CDropdownToggle>
        <CDropdownMenu className="pt-0">
          <CDropdownItem
            header
            tag="div"
            className="text-center"
            color="light"
          >
            <strong>You have {itemsCount} notifications</strong>
          </CDropdownItem>
          <CDropdownItem><CIcon name="cil-user-follow" className="mr-2 text-success" /> New user registered</CDropdownItem>
          <CDropdownItem><CIcon name="cil-user-unfollow" className="mr-2 text-danger" /> User deleted</CDropdownItem>
          <CDropdownItem><CIcon name="cil-chart" className="mr-2 text-info" /> Sales report is ready</CDropdownItem>
          <CDropdownItem><CIcon name="cil-basket-loaded" className="mr-2 text-primary" /> New client</CDropdownItem>
          <CDropdownItem><CIcon name="cil-speedometer" className="mr-2 text-warning" /> Server overloaded</CDropdownItem>
          <CDropdownItem
            header
            tag="div"
            color="light"
          >
            <strong>Server</strong>
          </CDropdownItem>
          <CDropdownItem className="d-block">
            <div className="text-uppercase mb-1">
              <small><b>CPU Usage</b></small>
            </div>
            <CProgress size="xs" color="info" value="25" />
            <small className="text-muted">348 Processes. 1/4 Cores.</small>
          </CDropdownItem>
          <CDropdownItem className="d-block">
            <div className="text-uppercase mb-1">
              <small><b>Memory Usage</b></small>
            </div>
            <CProgress size="xs" color="warning" value={70} />
            <small className="text-muted">11444GB/16384MB</small>
          </CDropdownItem>
          <CDropdownItem className="d-block">
            <div className="text-uppercase mb-1">
              <small><b>SSD 1 Usage</b></small>
            </div>
            <CProgress size="xs" color="danger" value={90} />
            <small className="text-muted">243GB/256GB</small>
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    );
  }

  dropTasks() {
    const itemsCount = 5;
    return (
      <CDropdown
        inNav
        className="c-header-nav-item mx-2"
        direction="down"
      >
        <CDropdownToggle nav header>
          <CIcon name="cil-list" /><CBadge shape="pill" color="warning">{itemsCount}</CBadge>
        </CDropdownToggle>
        <CDropdownMenu className="pt-0">
          <CDropdownItem
            header
            tag="div"
            className="text-center"
            color="light"
          >
            <strong>You have {itemsCount} pending tasks</strong>
          </CDropdownItem>
          <CDropdownItem className="d-block">
            <div className="small mb-1">Upgrade NPM &amp; Bower <span
              className="float-right"><strong>0%</strong></span></div>
            <CProgress size="xs" color="info" value={0} />
          </CDropdownItem>
          <CDropdownItem className="d-block">
            <div className="small mb-1">ReactJS Version <span className="float-right"><strong>25%</strong></span></div>
            <CProgress size="xs" color="danger" value={25} />
          </CDropdownItem>
          <CDropdownItem className="d-block">
            <div className="small mb-1">VueJS Version <span className="float-right"><strong>50%</strong></span></div>
            <CProgress size="xs" color="warning" value={50} />
          </CDropdownItem>
          <CDropdownItem className="d-block">
            <div className="small mb-1">Add new layouts <span className="float-right"><strong>75%</strong></span></div>
            <CProgress size="xs" color="info" value={75} />
          </CDropdownItem>
          <CDropdownItem className="d-block">
            <div className="small mb-1">Angular 2 Cli Version <span className="float-right"><strong>100%</strong></span></div>
            <CProgress size="xs" color="success" value={100} />
          </CDropdownItem>
          <CDropdownItem className="text-center border-top"><strong>View all tasks</strong></CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    );
  }

  dropMssgs() {
    const itemsCount = 4;
    return (
      <CDropdown
        inNav
        className="c-header-nav-item mx-2"
        direction="down"
      >
        <CDropdownToggle nav header>
          <CIcon name="cil-envelope-open" /><CBadge shape="pill" color="info">{itemsCount}</CBadge>
        </CDropdownToggle>
        <CDropdownMenu className="pt-0">
          <CDropdownItem
            header
            tag="div"
            color="light"
          >
            <strong>You have {itemsCount} messages</strong>
          </CDropdownItem>
          <CDropdownItem href="#">
            <div className="message">
              <div className="pt-3 mr-3 float-left">
                <div className="c-avatar">
                  <img src={avatar6} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  {/*<CImg*/}
                  {/*  src={avatar7}*/}
                  {/*  className="c-avatar-img"*/}
                  {/*  alt="admin@bootstrapmaster.com"*/}
                  {/*/>*/}
                  <CBadge color="success" className="c-avatar-status" />
                </div>
              </div>
              <div>
                <small className="text-muted">John Doe</small>
                <small className="text-muted float-right mt-1">Just now</small>
              </div>
              <div className="text-truncate font-weight-bold">
                <span className="fa fa-exclamation text-danger"></span> Important message
              </div>
              <div className="small text-muted text-truncate">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
              </div>
            </div>
          </CDropdownItem>

          <CDropdownItem href="#">
            <div className="message">
              <div className="pt-3 mr-3 float-left">
                <div className="c-avatar">
                  <CImg
                    src={avatar6}
                    className="c-avatar-img"
                    alt="admin@bootstrapmaster.com"
                  />
                  <CBadge color="warning" className="c-avatar-status" />
                </div>
              </div>
              <div>
                <small className="text-muted">Jane Dovve</small>
                <small className="text-muted float-right mt-1">5 minutes ago</small>
              </div>
              <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <div className="small text-muted text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
              </div>
            </div>
          </CDropdownItem>

          <CDropdownItem href="#">
            <div className="message">
              <div className="pt-3 mr-3 float-left">
                <div className="c-avatar">
                  <CImg
                    src={avatar5}
                    className="c-avatar-img"
                    alt="admin@bootstrapmaster.com"
                  />
                  <CBadge color="danger" className="c-avatar-status" />
                </div>
              </div>
              <div>
                <small className="text-muted">Janet Doe</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <div className="small text-muted text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
              </div>
            </div>
          </CDropdownItem>

          <CDropdownItem href="#">
            <div className="message">
              <div className="pt-3 mr-3 float-left">
                <div className="c-avatar">
                  <CImg
                    src={avatar4}
                    className="c-avatar-img"
                    alt="admin@bootstrapmaster.com"
                  />
                  <CBadge color="info" className="c-avatar-status" />
                </div>
              </div>
              <div>
                <small className="text-muted">Joe Doe</small>
                <small className="text-muted float-right mt-1">4:03 AM</small>
              </div>
              <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <div className="small text-muted text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...
              </div>
            </div>
          </CDropdownItem>
          <CDropdownItem href="#" className="text-center border-top"><strong>View all messages</strong></CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    );
  }

  dropAccnt() {
    return (
      <CDropdown
        inNav
        className="c-header-nav-items mx-2"
        direction="down"
      >
        <CDropdownToggle nav header>
            <div className="c-avatar">
              <CImg
                src={avatar6}
                className="c-avatar-img"
                alt="admin@bootstrapmaster.com"
              />
            </div>
        </CDropdownToggle>
        <CDropdownMenu className="pt-0">
          <CDropdownItem
            header
            tag="div"
            color="light"
            className="text-center"
          >
            <strong>Account</strong>
          </CDropdownItem>
          <CDropdownItem><CIcon name="cil-bell" className="mr-2" /> Updates<CBadge color="info" className="ml-auto">42</CBadge></CDropdownItem>
          <CDropdownItem><CIcon name="cil-envelope-open" className="mr-2" /> Messages<CBadge color="success" className="ml-auto">42</CBadge></CDropdownItem>
          <CDropdownItem><CIcon name="cil-task" className="mr-2" /> Tasks<CBadge color="danger" className="ml-auto">42</CBadge></CDropdownItem>
          <CDropdownItem><CIcon name="cil-comment-square" className="mr-2" /> Comments<CBadge color="warning" className="ml-auto">42</CBadge></CDropdownItem>
          <CDropdownItem
            header
            tag="div"
            color="light"
            className="text-center"
          >
            <strong>Settings</strong>
          </CDropdownItem>
          <CDropdownItem><CIcon name="cil-user" className="mr-2" /> Profile</CDropdownItem>
          <CDropdownItem><CIcon name="cil-settings" className="mr-2" /> Settings</CDropdownItem>
          <CDropdownItem><CIcon name="cil-credit-card" className="mr-2" /> Payments<CBadge color="secondary" className="ml-auto">42</CBadge></CDropdownItem>
          <CDropdownItem><CIcon name="cil-file" className="mr-2" /> Projects<CBadge color="primary" className="ml-auto">42</CBadge></CDropdownItem>
          <CDropdownItem divider />
          <CDropdownItem><CIcon name="cil-lock-locked" className="mr-2" /> Lock Account</CDropdownItem>
          <CDropdownItem onClick={this.props.onLogout}><CIcon name="cil-account-logout" className="mr-2" /> Logout</CDropdownItem>
          {/*<CDropdownItem><i className="fa fa-lock"></i> Logout</CDropdownItem>*/}
        </CDropdownMenu>
      </CDropdown>
    );
  }

  render() {
    const { notif, accnt, tasks, mssgs } = this.props;
    return (
        notif ? this.dropNotif() :
          accnt ? this.dropAccnt() :
            tasks ? this.dropTasks() :
              mssgs ? this.dropMssgs() : null
    );
  }
}

DefaultHeaderDropdown.propTypes = propTypes;
DefaultHeaderDropdown.defaultProps = defaultProps;

export default DefaultHeaderDropdown;
