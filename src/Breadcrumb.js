import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';

const getPaths = (pathname, root) => {
  const paths = [root];
  if (pathname === root) return paths;

  let pathnameSliced=pathname;
  if (root !== '/')
    pathnameSliced = pathname.slice(root.length);

  pathnameSliced.split('/').reduce((prev, curr) => {
    const currPath = prev == '' ? curr : `${prev}/${curr}`;
    paths.push(currPath);
    return currPath;
  });
  return paths;
};

const findRouteName = (url, routes) => {
  return _.result(_.find(routes, {path: url}), 'name');
};

const BreadcrumbsItem = ({match, routes}) => {
  const routeName = findRouteName(match.url, routes);
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
  }),
  path: PropTypes.string,
  routes: PropTypes.any
};

const getPath = (root, path = null) => {
  if (root == path || !path)
    return root;
  else
    return [root, path].join(root == '/' ? '' : '/');
};

const Breadcrumbs = (args) => {
  const paths = getPaths(args.location.pathname, args.root);
  const items = paths.map((path, i) => <Route key={i.toString()}
                                              path={getPath(args.root, path)}
                                              render={props => <BreadcrumbsItem {...props}
                                                                                routes={args.appRoutes}/>}/>);
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
  appRoutes: [{path: '/', exact: true, name: 'Home', component: null}],
  root: '/'
};

class AppBreadcrumb extends Component {
  render() {
    const {className, tag: Tag, root, ...attributes} = this.props;

    delete attributes.children;

    const classes = classNames(className);

    let processedRoot = root;
    if (root !== '/')
      if (root.slice(-1) == '/')
        processedRoot = root.slice(0, -1);

    return (
      <Tag className={classes}>
        <Route path="/:path" render={props => <Breadcrumbs {...props} root={processedRoot} {...attributes} />}/>
      </Tag>
    );
  }
}

AppBreadcrumb.propTypes = propTypes;
AppBreadcrumb.defaultProps = defaultProps;

export default AppBreadcrumb;
