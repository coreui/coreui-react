import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CBreadcrumb, CBreadcrumbItem } from '../index'
import { Link, useLocation, matchPath } from 'react-router-dom';

//component - CoreUI / CBreadcrumbRouter
const getPaths = pathname => {
  const paths = ['/']
  if (pathname === '/') return paths;
  pathname.split('/').reduce((prev, curr) => {
    const currPath = `${prev}/${curr}`
    paths.push(currPath)
    return currPath
  })
  return paths
}

const CBreadcrumbRouteItem = ({name, path}, currPath) => {
  if (path === currPath) {
    return <CBreadcrumbItem key={path} active>{name}</CBreadcrumbItem>
  } else {
    return <CBreadcrumbItem key={path}>
      <Link to={path}>
        {name}
      </Link>
    </CBreadcrumbItem>
  }
}

const CBreadcrumbRouter = props => {

  const {
    className,
    innerRef,
    routes,
    ...attributes
  } = props

  let items = null
  if (routes) {
    const currPath = useLocation().pathname
    const paths = getPaths(currPath)
    const currRoutes = paths.map(path => {
      return routes.find(route => matchPath(path, {
        path: route.path,
        exact: route.exact
      }))
    }).filter(route => route)
    items = currRoutes.map(route => {
      return CBreadcrumbRouteItem(route, currPath)
    })
  }


  //render
  const classes = classNames(className)

  return (
    <CBreadcrumb 
      className={classes} 
      {...attributes}
      ref={innerRef}
    >
      {items}
    </CBreadcrumb>
  )
}

CBreadcrumbRouter.propTypes = {
  className: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  routes: PropTypes.array
}

export default CBreadcrumbRouter