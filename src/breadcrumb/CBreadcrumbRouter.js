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

const CBreadcrumbRouteItem = ({name, currPath}, fullCurrPath) => {
  if (currPath === fullCurrPath) {
    return <CBreadcrumbItem key={currPath} active>{name}</CBreadcrumbItem>
  } else {
    return <CBreadcrumbItem key={currPath}>
      <Link to={currPath}>
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
    const currRoutes = paths.map(currPath => {
      const route = routes.find(route => matchPath(currPath, {
        path: route.path,
        exact: route.exact
      }))
      return { ...route, currPath }
    }).filter(route => route && route.name)
    
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
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  routes: PropTypes.array
}

export default CBreadcrumbRouter