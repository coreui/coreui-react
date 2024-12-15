import React, { FC, ReactNode, useMemo } from 'react'
import { Ads, Banner, Seo, Toc } from '../components'
import { CContainer, CNav, CNavItem, CNavLink } from '@coreui/react'
// @ts-expect-error json file
import jsonData from './../data/other_frameworks.json'

import type { TocItem } from '../components/Toc'

interface DocsLayoutProps {
  children: ReactNode
  data: DocsData
  location: Location
  pageContext: PageContext
}

interface DocsData {
  allMdx: {
    edges: Array<{
      node: {
        fields: {
          slug: string
        }
      }
    }>
  }
  mdx?: {
    tableOfContents: {
      items: TocItem[]
    }
  }
}

interface PageContext {
  frontmatter?: Frontmatter
}

interface Frontmatter {
  title?: string
  description?: string
  name?: string
  other_frameworks?: string
  pro_component?: boolean
  route?: string
}

interface OtherFrameworks {
  [key: string]: {
    [key: string]: string
  }
}

interface Fields {
  slug: string
}

interface Node {
  id: string
  fields: Fields
}

interface Item {
  node: Node
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

const humanize = (text: string): string => {
  return text
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const DocsNav: FC<{
  locationPathname: string
  nodes: Item[]
}> = ({ locationPathname, nodes }) => {
  const parentPathname = findShortestSlug(nodes)
  const hasNavAccessibility = useMemo(
    () => nodes.some((edge) => edge.node.fields.slug.includes('accessibility')),
    [nodes],
  )
  const hasNavAPI = useMemo(
    () => nodes.some((edge) => edge.node.fields.slug.includes('api')),
    [nodes],
  )
  const hasNavStyling = useMemo(
    () => nodes.some((edge) => edge.node.fields.slug.includes('styling')),
    [nodes],
  )
  return (
    <CNav className="ms-lg-4 docs-nav bg-body" variant="underline-border">
      <CNavItem>
        <CNavLink href={parentPathname} active={parentPathname === locationPathname}>
          Features
        </CNavLink>
      </CNavItem>
      {hasNavAPI && (
        <CNavItem>
          <CNavLink
            href={`${parentPathname}api/`}
            active={`${parentPathname}api/` === locationPathname}
          >
            API
          </CNavLink>
        </CNavItem>
      )}
      {hasNavStyling && (
        <CNavItem>
          <CNavLink
            href={`${parentPathname}styling/`}
            active={`${parentPathname}styling/` === locationPathname}
          >
            Styling
          </CNavLink>
        </CNavItem>
      )}
      {hasNavAccessibility && (
        <CNavItem>
          <CNavLink
            href={`${parentPathname}accessibility/`}
            active={`${parentPathname}accessibility/` === locationPathname}
          >
            Accessibility
          </CNavLink>
        </CNavItem>
      )}
    </CNav>
  )
}

const DocsLayout: FC<DocsLayoutProps> = ({ children, data, location, pageContext }) => {
  const frontmatter = pageContext.frontmatter || {}

  const {
    title = '',
    description = '',
    name = '',
    other_frameworks: otherFrameworksStr = '',
    pro_component: proComponent = false,
    route = '',
  } = frontmatter
  const frameworks = useMemo(
    () => otherFrameworksStr.split(', ').filter(Boolean),
    [otherFrameworksStr],
  )
  const otherFrameworks: OtherFrameworks = useMemo(() => ({ ...jsonData }), [])
  const hasNav = useMemo(() => data?.allMdx?.edges.length > 1, [data])

  return (
    <>
      <Seo title={title} description={description} name={name} />
      <CContainer lg className="my-md-4 flex-grow-1">
        <main className="docs-main order-1">
          {hasNav && (
            <DocsNav locationPathname={location.pathname} nodes={data?.allMdx?.edges as Item[]} />
          )}
          <div className="docs-intro ps-lg-4">
            {name && name !== title ? (
              <div className="d-flex flex-column">
                <h1 className="order-2 h5 mb-4 text-body-secondary" id="content">
                  {title}
                </h1>
                <h2 className="docs-title order-1 h1">{name}</h2>
              </div>
            ) : (
              <h1 className="docs-title" id="content">
                {title}
              </h1>
            )}
            <Banner pro={proComponent} />
            <p className="docs-lead">{description}</p>
            <Ads code="CEAICKJY" location={route} placement="coreuiio" />
            {frameworks.length > 0 && (
              <>
                <h2>Other Frameworks</h2>
                <p>
                  CoreUI components are available as native Angular, Bootstrap (Vanilla JS), and Vue
                  components. To learn more please visit the following pages.
                </p>
                <ul>
                  {frameworks.map((item) => (
                    <React.Fragment key={item}>
                      {Object.entries(otherFrameworks[item] || {})
                        .filter(([key]) => key !== 'react')
                        .map(([framework, url]) => (
                          <li key={framework}>
                            <a href={url}>
                              {framework.charAt(0).toUpperCase() + framework.slice(1)}{' '}
                              {humanize(item)}
                            </a>
                          </li>
                        ))}
                    </React.Fragment>
                  ))}
                </ul>
              </>
            )}
          </div>
          {data?.mdx && <Toc items={data.mdx.tableOfContents.items} />}
          <div className="docs-content ps-lg-4">{children}</div>
        </main>
      </CContainer>
    </>
  )
}

DocsLayout.displayName = 'DocsLayout'

export default DocsLayout
