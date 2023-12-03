import React from 'react'
import { useLocation, Link } from 'react-router-dom'

import routes from '../routes'

import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname

  const getRouteName = (pathname, routes) => {
    const currentRoute = routes.find((route) => route.path === pathname)
    return currentRoute ? currentRoute.name : false
  }

  const getBreadcrumbs = (location) => {
    const breadcrumbs = []
    location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`
      const routeName = getRouteName(currentPathname, routes)
      routeName &&
        breadcrumbs.push({
          pathname: currentPathname,
          name: routeName,
          active: index + 1 === array.length ? true : false,
        })
      return currentPathname
    })
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs(currentLocation)

  return (
    <CBreadcrumb className="m-0 ms-2">
      <CBreadcrumbItem><Link to="/">Home</Link></CBreadcrumbItem>
      {breadcrumbs.map((breadcrumb, index) => {
        console.log(index, breadcrumb)
        return (
          <CBreadcrumbItem
            {...(breadcrumb.active ? { active: true } : "")}
            key={index}
          >
            { breadcrumb.active ? 
                breadcrumb.name : 
                <Link to={`${breadcrumb.pathname}`}> {breadcrumb.name} </Link>
            }
          </CBreadcrumbItem>
        )
      })}
    </CBreadcrumb>
  )
}

export default React.memo(AppBreadcrumb)
