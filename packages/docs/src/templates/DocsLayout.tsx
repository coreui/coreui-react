import React, { FC, ReactNode, useEffect, useMemo, useRef, useState } from 'react'
import { CContainer } from '@coreui/react'
import { Ads, Banner, ComponentSubNav, Footer, Header, Sidebar, Toc } from '../components'
// @ts-expect-error json file
import jsonData from './../data/other_frameworks.json'

import { Item } from '../components/ComponentSubNav'
import type { TocItem } from '../components/Toc'

interface DocsLayoutProps {
  children: ReactNode
  data: DocsData
  location: Location
  pageContext: PageContext
  path: string
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

const humanize = (text: string): string => {
  return text
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const DocsLayout: FC<DocsLayoutProps> = ({ children, data, location, pageContext, path }) => {
  const docsNavRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const [docsNavHeight, setDocsNavHeigh] = useState<number>(0)
  const [headerHeight, setHeaderHeight] = useState<number>(0)
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

  const handleScroll = () => {
    if (docsNavRef.current) {
      setDocsNavHeigh(docsNavRef.current.offsetHeight)
    }
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Sidebar />
      <div className="wrapper flex-grow-1">
        <Header ref={headerRef} />
        {hasNav && (
          <ComponentSubNav
            nodes={data?.allMdx?.edges as Item[]}
            style={{ top: `${headerHeight}px` } as React.CSSProperties}
            ref={docsNavRef}
          />
        )}
        {path === '/404/' ? (
          <CContainer lg className="px-4">
            {children}
          </CContainer>
        ) : (
          <CContainer lg className="my-md-4 flex-grow-1 px-4">
            <main className="docs-main order-1">
              <div className="docs-intro">
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
                <Ads code="CEAICKJY" location={location.pathname} placement="coreuiio" />
                {frameworks.length > 0 && (
                  <>
                    <h2>Other Frameworks</h2>
                    <p>
                      CoreUI components are available as native Angular, Bootstrap (Vanilla JS), and
                      Vue components. To learn more please visit the following pages.
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
              {data?.mdx && (
                <Toc
                  items={data.mdx.tableOfContents.items}
                  style={{ top: `${docsNavHeight + headerHeight + 16}px` }}
                />
              )}
              <div className="docs-content">{children}</div>
            </main>
          </CContainer>
        )}
        <Footer />
      </div>
    </>
  )
}

DocsLayout.displayName = 'DocsLayout'

export default DocsLayout
