import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Route, Link, matchPath} from 'react-router-dom';
import CBreadcrumbCustom from './CBreadcrumbCustom';
import CBreadcrumbItem from './CBreadcrumbItem';

let routes;

const getPaths = pathname=>{
  const paths = ['/'];
  if (pathname === '/') return paths;
  pathname.split('/').reduce((prev, curr) => {
    const currPath = `${prev}/${curr}`;
    paths.push(currPath);
    return currPath;
  });
  return paths;
};

const findRouteName = url=>{
  const aroute = routes.find(route => matchPath(url, {path: route.path, exact: route.exact}));
  return (aroute && aroute.name) ? aroute.name : null
};

//component - CoreUI / CBreadcrumbRouteItem

const CBreadcrumbRouteItem = ({ match }) => {
  const routeName = findRouteName(match.url);
  if (routeName) {
    return (
      match.isExact ?
        <CBreadcrumbItem active>{routeName}</CBreadcrumbItem>
       :
        <CBreadcrumbItem>
          <Link to={match.url || ''}>
            {routeName}
          </Link>
        </CBreadcrumbItem>
    );
  }
  return null;
};

CBreadcrumbRouteItem.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
    isExact: PropTypes.bool
  })
};

//component - CoreUI / CBreadcrumbRouter

let postItems;

const CBreadcrumbRouter = args=>{

  const paths = getPaths(args.location.pathname);
  const items = paths.map(
    (path, i) => <Route key={i.toString()} path={path} component={CBreadcrumbRouteItem} />
  );
  if (postItems)
    items.push(postItems);

  // render

  return items;
  /*
  return (
    <CBreadcrumbCustom>
      {items}
    </CBreadcrumbCustom>
  );
  */

};

//component - CoreUI / CBreadcrumb

const CBreadcrumb = props=>{

  const {
    children,
    className,
    custom,
    //
    routesProps,
    ...attributes
  } = props;

  if (children)
    postItems = children;
  else {
    postItems = null;
  }

  routes = props.appRoutes;

  //render

  delete attributes.appRoutes;
  const classes = classNames(className);

  if (!custom){
    return (
      <CBreadcrumbCustom {...attributes} listClassName={classes}>
        <Route path="/:path" component={CBreadcrumbRouter} {...routesProps} />
      </CBreadcrumbCustom>
    );
  }

  return (
    <CBreadcrumbCustom {...attributes} listClassName={classes}>
      {children}
    </CBreadcrumbCustom>
  );

}

CBreadcrumb.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  custom: PropTypes.bool,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  appRoutes: PropTypes.any,
  match: PropTypes.object,
  routesProps: PropTypes.object
};

CBreadcrumb.defaultProps = {
  tag: 'div',
  className: '',
  appRoutes: [{ path: '/', exact: true, name: 'Home', component: null }]
};

export default CBreadcrumb;
