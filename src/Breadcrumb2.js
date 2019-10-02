import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

let routes;
let router;

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

const findRouteName2 = (url) => {
  const matchPath = router.matchPath;
  const aroute = routes.find(route => matchPath(url, {path: route.path, exact: route.exact}));
  return (aroute && aroute.name) ? aroute.name : null
};

const BreadcrumbsItem2 = ({ match }) => {
  const routeName = findRouteName2(match.url);
  const Link = router.Link;
  if (routeName) {
    return (
        // eslint-disable-next-line react/prop-types
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

BreadcrumbsItem2.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string
  })
};

const Breadcrumbs2 = (args) => {
  const Route = router.Route;
  const paths = getPaths(args.location.pathname);
  const items = paths.map((path, i) => <Route key={i.toString()} path={path} component={BreadcrumbsItem2} />);
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
  router: PropTypes.any
};

const defaultProps = {
  tag: 'div',
  className: '',
  appRoutes: [{ path: '/', exact: true, name: 'Home', component: null }]
};

class AppBreadcrumb2 extends Component {
  constructor(props) {
    super(props);

    this.state = { routes: props.appRoutes };
    routes = this.state.routes;
    router = props.router;
  }

  render() {
    const { className, tag: Tag, ...attributes } = this.props;

    delete attributes.children
    delete attributes.appRoutes
    delete attributes.router

    const classes = classNames(className);

    const Route = router.Route;

    return (
      <Tag className={classes}>
        <Route path="/:path" component={Breadcrumbs2} {...attributes} />
      </Tag>
    );
  }
}

AppBreadcrumb2.propTypes = propTypes;
AppBreadcrumb2.defaultProps = defaultProps;

export default AppBreadcrumb2;
