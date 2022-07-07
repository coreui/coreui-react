import React, { FC, useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Ads, CodeBlock, Example, Footer, Header, Seo, Sidebar, Toc } from './../components/'
import { CCol, CContainer, CLink, CRow, CTable } from '@coreui/react/src/'
import './../styles/styles.scss'

interface ContextProps {
  sidebarVisible: boolean | undefined
  setSidebarVisible: React.Dispatch<React.SetStateAction<boolean | undefined>>
}

export const myContext = React.createContext({} as ContextProps)

const components = {
  // eslint-disable-next-line react/display-name
  pre: (props: any) => <CodeBlock {...props} />,
  // eslint-disable-next-line react/display-name
  table: (props: any) => <CTable responsive {...props} className="table table-striped table-api" />,
  Example,
}

const DocsLayout: FC = ({ data: { mdx } }) => {
  // const myMarkdownFile = require('@coreui/coreui/scss/_variables.scss').toString()
  const [sidebarVisible, setSidebarVisible] = useState()
  return (
    <>
      <Seo
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
        name={mdx.frontmatter.name}
      />
      <myContext.Provider
        value={{
          sidebarVisible,
          setSidebarVisible,
        }}
      >
        <Sidebar currentRoute={mdx.frontmatter.route} />
        <div className="wrapper d-flex flex-column min-vh-100">
          <Header />
          <div className="body flex-grow-1 px-3">
            <CContainer lg>
              <CRow>
                <CCol lg={9}>
                  <div className="bg-info bg-opacity-10 border-start border-start-5 border-start-info p-4 pb-3 mb-5">
                    <h3 className="mb-4">Support CoreUI Development</h3>
                    <p>
                      CoreUI is an MIT-licensed open source project and is completely free to use.
                      However, the amount of effort needed to maintain and develop new features for
                      the project is not sustainable without proper financial backing.
                    </p>
                    <p>
                      You can support our Open Source software development in the following ways:
                    </p>
                    <ul>
                      <li>
                        Buy the{' '}
                        <CLink href="https://coreui.io/pricing/?support=react">CoreUI PRO</CLink>,
                        and get access to PRO components, and dedicated support.
                      </li>
                      <li>
                        <CLink href="https://opencollective.com/coreui" target="_blank">
                          Became a sponsor
                        </CLink>
                        , and get your logo on BACKERS.md/README.md files or each site of this
                        documentation
                      </li>
                      <li>
                        Give us a star ⭐️ on{' '}
                        <CLink href="https://github.com/coreui/coreui-react" target="_blank">
                          Github
                        </CLink>
                        .
                      </li>
                    </ul>
                  </div>
                  <h1>{mdx.frontmatter.title}</h1>
                  <p className="docs-lead fs-4 fw-light">{mdx.frontmatter.description}</p>
                  <Ads code="CEAICKJY" placement="coreuiio" />
                  <MDXProvider components={components}>
                    <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
                  </MDXProvider>
                </CCol>
                <CCol lg={3}>
                  <Toc items={mdx.tableOfContents} />
                </CCol>
              </CRow>
            </CContainer>
          </div>
          <Footer />
        </div>
      </myContext.Provider>
    </>
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
      body
      frontmatter {
        title
        description
        name
        route
      }
      tableOfContents(maxDepth: 3)
    }
  }
`
