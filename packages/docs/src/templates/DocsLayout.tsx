import React, { FC } from 'react'
import { Ads, Banner, Seo, Toc } from '../components'
import { CCol, CContainer, CRow } from '@coreui/react/src/'

interface DocsLayoutProps {
  children: any
  data: any
  pageContext: any
}

// @ts-expect-error json file
import jsonData from './../data/other_frameworks.json'

const humanize = (text: string) => {
  const string = text
    .split('-')
    .reduce(
      (accumulator, currentValue) =>
        accumulator + ' ' + currentValue[0].toUpperCase() + currentValue.slice(1),
    )
  return string[0].toUpperCase() + string.slice(1)
}

const DocsLayout: FC<DocsLayoutProps> = ({ children, data, pageContext }) => {
  const title = pageContext.frontmatter ? pageContext.frontmatter.title : ''
  const description = pageContext.frontmatter ? pageContext.frontmatter.description : ''
  const name = pageContext.frontmatter ? pageContext.frontmatter.name : ''
  const other_frameworks = pageContext.frontmatter ? pageContext.frontmatter.other_frameworks : ''
  const pro_component = pageContext.frontmatter ? pageContext.frontmatter.pro_component : ''
  const route = pageContext.frontmatter ? pageContext.frontmatter.route : ''
  const frameworks = other_frameworks ? other_frameworks.split(', ') : false
  const otherFrameworks = JSON.parse(JSON.stringify(jsonData))

  return (
    <>
      <Seo title={title} description={description} name={name} />
      <CContainer lg>
        <CRow>
          <CCol lg={9}>
            <Banner pro={pro_component} />
            <h1>{title}</h1>
            <p className="docs-lead fs-4 fw-light">{description}</p>
            <Ads code="CEAICKJY" location={route} placement="coreuiio" />
            {frameworks && (
              <>
                <h2>Other frameworks</h2>
                <p>
                  CoreUI components are available as native Angular, Bootstrap (Vanilla JS), and Vue
                  components. To learn more please visit the following pages.
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
            {children}
          </CCol>
          {data && data.mdx && (
            <CCol lg={3}>
              <Toc items={data.mdx.tableOfContents.items} />
            </CCol>
          )}
        </CRow>
      </CContainer>
    </>
  )
}

DocsLayout.displayName = 'DocsLayout'

export default DocsLayout
