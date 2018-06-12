import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';

let routes;

const getPaths = (pathname) => {
  const paths = ['/'];

  if (pathname === '/') return paths;

  pathname.split('/').reduce((prev, curr) => {
    const currPath = `${prev}/${curr}`;
    paths.push(currPath);
    return currPath;
  });
  return paths;
};

const findRouteName = (url) => {
  return _.result(_.find(routes, {root: url}), 'name');
};

const BreadcrumbsItem = ({ match }) => {
  const routeName = findRouteName(match.url);
  if (routeName) {
    return (
      match.isExact ?
        <BreadcrumbItem active>{routeName}</BreadcrumbItem>
       :
        <BreadcrumbItem>
          <Link to={match.url || ''}>
            {routeName}
          </Link>
        </BreadcrumbItem>
    );
  }
  return null;
};

BreadcrumbsItem.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string
  })
};

const getPath = (root, path = null) => {
  const paths = ['', root];

  if (path) paths[2] = path;

  return paths.join('/');
};

const Breadcrumbs = (args) => {
  const paths = getPaths(args.location.pathname.replace(getPath(args.root), ''));
  const items = paths.map((path, i) => <Route key={i.toString()}
                                              path={getPath(args.root, path.substring(1))}
                                              component={BreadcrumbsItem} />);
  return (
    <Breadcrumb>
      {items}
    </Breadcrumb>
  );
};

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  appRoutes: PropTypes.any,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  root: PropTypes.string
};

const defaultProps = {
  tag: 'div',
  className: '',
  appRoutes: [{ path: '/', exact: true, name: 'Home', component: null }],
  root: '/'
};

class AppBreadcrumb extends Component {
  constructor(props) {
    super(props);

    this.state = { routes: props.appRoutes };
    routes = this.state.routes;
  }

  render() {
    const { className, tag: Tag, ...attributes } = this.props;

    delete attributes.children;
    delete attributes.appRoutes;

    const classes = classNames(className);

    return (
      <Tag className={classes}>
        <Route path="/:path" component={Breadcrumbs} {...attributes} />
      </Tag>
    );
  }
}

AppBreadcrumb.propTypes = propTypes;
AppBreadcrumb.defaultProps = defaultProps;

export default AppBreadcrumb;
