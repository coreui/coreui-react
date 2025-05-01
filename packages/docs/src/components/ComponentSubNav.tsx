import React, { forwardRef, HTMLAttributes, useMemo, useRef } from 'react'
import { Link } from 'gatsby'
import { CContainer, CNav, CNavItem, CNavLink } from '@coreui/react'
import useStickyObserver from '../hooks/useStickyObserver' // Adjust the path as needed

type Fields = {
  slug: string
}

type Node = {
  id: string
  fields: Fields
}

export interface Item {
  node: Node
}

export interface ComponentSubNavProps extends HTMLAttributes<HTMLDivElement> {
  nodes: Item[]
}

const findShortestSlug = (items: Item[]): string | undefined => {
  if (items.length === 0) {
    return undefined
  }

  let shortestSlug = items[0].node.fields.slug

  for (const item of items) {
    const currentSlug = item.node.fields.slug
    if (currentSlug.length < shortestSlug.length) {
      shortestSlug = currentSlug
    }
  }

  return shortestSlug
}

const ComponentSubNav = forwardRef<HTMLDivElement, ComponentSubNavProps>(
  ({ nodes, ...rest }, ref) => {
    const parentPathname = findShortestSlug(nodes)
    const hasNavAccessibility = useMemo(
      () => nodes.some((edge) => edge.node.fields.slug.includes('accessibility')),
      [nodes]
    )
    const hasNavAPI = useMemo(
      () => nodes.some((edge) => edge.node.fields.slug.includes('api')),
      [nodes]
    )
    const hasNavStyling = useMemo(
      () => nodes.some((edge) => edge.node.fields.slug.includes('styling')),
      [nodes]
    )

    const hasNavBootstrap = useMemo(
      () => nodes.some((edge) => edge.node.fields.slug.includes('bootstrap')),
      [nodes]
    )

    // Ref for the sentinel element
    const sentinelRef = useRef<HTMLDivElement>(null)

    // Use the custom hook to track sticky state
    const isSticky = useStickyObserver(sentinelRef)

    return (
      <>
        <div ref={sentinelRef} style={{ height: '1px' }} />
        <div
          className={`component-sub-nav-wrapper bg-body position-sticky z-3 ${isSticky ? 'sticky shadow-sm' : ''}`}
          ref={ref}
          {...rest}
        >
          <CContainer lg className="px-3 px-sm-4">
            <CNav
              className="docs-nav component-sub-nav"
              variant="underline-border"
              role={undefined}
            >
              <CNavItem>
                <CNavLink as={Link} to={parentPathname} activeClassName="active">
                  Features
                </CNavLink>
              </CNavItem>
              {hasNavAPI && (
                <CNavItem>
                  <CNavLink as={Link} to={`${parentPathname}api/`} activeClassName="active">
                    API
                  </CNavLink>
                </CNavItem>
              )}
              {hasNavStyling && (
                <CNavItem>
                  <CNavLink as={Link} to={`${parentPathname}styling/`} activeClassName="active">
                    Styling
                  </CNavLink>
                </CNavItem>
              )}
              {hasNavAccessibility && (
                <CNavItem>
                  <CNavLink
                    as={Link}
                    to={`${parentPathname}accessibility/`}
                    activeClassName="active"
                  >
                    Accessibility
                  </CNavLink>
                </CNavItem>
              )}
              {hasNavBootstrap && (
                <CNavItem>
                  <CNavLink as={Link} to={`${parentPathname}bootstrap/`} activeClassName="active">
                    Use with Bootstrap
                  </CNavLink>
                </CNavItem>
              )}
            </CNav>
          </CContainer>
        </div>
      </>
    )
  }
)

ComponentSubNav.displayName = 'ComponentSubNav'

export default ComponentSubNav
