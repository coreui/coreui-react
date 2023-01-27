import React, { FC, useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { CBadge, CCallout, CCol, CContainer, CRow, CTable } from '@coreui/react/src/index'
import {
  Ads,
  Banner,
  CodeBlock,
  Example,
  Footer,
  Header,
  Seo,
  Sidebar,
  Toc,
} from './../components/'
import './../styles/styles.scss'
import jsonData from './../data/other_frameworks.json'

import { AppContext } from './../AppContext'

interface DocsLayoutProps {
  data: any
  children: any
}

const humanize = (text: string) => {
  const string = text
    .split('-')
    .reduce(
      (accumulator, currentValue) =>
        accumulator + ' ' + currentValue[0].toUpperCase() + currentValue.slice(1),
    )
  return string[0].toUpperCase() + string.slice(1)
}

const DocsLayout: FC<DocsLayoutProps> = ({ data: { mdx }, children }) => {
  const [sidebarVisible, setSidebarVisible] = useState()
  const frameworks = mdx.frontmatter.other_frameworks
    ? mdx.frontmatter.other_frameworks.split(', ')
    : false

  const otherFrameworks = JSON.parse(JSON.stringify(jsonData))

  return (
    <AppContext.Provider
      value={{
        sidebarVisible,
        setSidebarVisible,
      }}
    >
      <Seo
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
        name={mdx.frontmatter.name}
      />
      <Sidebar currentRoute={mdx.frontmatter.route} />
      <div className="wrapper d-flex flex-column min-vh-100">
        <Header />
        <div className="body flex-grow-1 px-3">
          <CContainer lg>
            <CRow>
              <CCol lg={9}>
                <Banner pro={mdx.frontmatter.pro_component} />
                <h1>{mdx.frontmatter.title}</h1>
                <p className="docs-lead fs-4 fw-light">{mdx.frontmatter.description}</p>
                <Ads code="CEAICKJY" placement="coreuiio" />
                {frameworks && (
                  <>
                    <h2>Other frameworks</h2>
                    <p>
                      CoreUI components are available as native Angular, Bootstrap (Vanilla JS), and
                      Vue components. To learn more please visit the following pages.
                    </p>
                    <ul>
                      {frameworks.map((item: string, index: number) => (
                        <React.Fragment key={index}>
                          {Object.keys(otherFrameworks[item]).map(
                            (el, index) =>
                              el !== 'react' && (
                                <li key={index}>
                                  <a href={otherFrameworks[item][el]}>
                                    <>
                                      {el[0].toUpperCase() + el.slice(1)} {humanize(item)}
                                    </>
                                  </a>
                                </li>
                              ),
                          )}
                        </React.Fragment>
                      ))}
                    </ul>
                  </>
                )}
                <MDXProvider
                  components={{
                    strong: (props: any) => {
                      if (props.children.type == 'em') {
                        const color = props.children.props.children.includes('Deprecated')
                          ? 'warning'
                          : 'primary'
                        return (
                          <>
                            <br />
                            <CBadge {...props.children.props} color={color} />
                          </>
                        )
                      } else {
                        return <strong>{props.children}</strong>
                      }
                    },
                    pre: (props: any) => <CodeBlock {...props} />,
                    table: (props: any) => {
                      const isApiTable =
                        props.children[0].props.children.props.children[0].props.children &&
                        props.children[0].props.children.props.children[0].props.children.includes(
                          'Property',
                        )
                      return (
                        <CTable
                          responsive
                          {...props}
                          className={`table ${isApiTable && ' table-striped table-api'}`}
                        />
                      )
                    },
                    Callout: (props: any) => {
                      const { children, title, ...rest } = props
                      return (
                        <CCallout {...rest}>
                          {title && <h5>{title}</h5>}
                          {children}
                        </CCallout>
                      )
                    },
                    Example: (props: any) => {
                      const { children, ...rest } = props
                      return (
                        <Example {...rest}>
                          {React.Children.map(children, (child) => {
                            if (React.isValidElement(child)) {
                              return React.cloneElement(child)
                            }
                            return
                          })}
                        </Example>
                      )
                    },
                  }}
                >
                  {children}
                </MDXProvider>
              </CCol>
              <CCol lg={3}>
                <Toc items={mdx.tableOfContents.items} />
              </CCol>
            </CRow>
          </CContainer>
        </div>
        <Footer />
      </div>
    </AppContext.Provider>
  )
}

DocsLayout.propTypes = {
  children: PropTypes.node,
  data: PropTypes.any,
}

DocsLayout.displayName = 'DocsLayout'

export default DocsLayout

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
        name
        route
        pro_component
        other_frameworks
      }
      tableOfContents(maxDepth: 3)
    }
  }
`
