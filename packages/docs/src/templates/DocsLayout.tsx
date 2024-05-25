import React, { FC } from 'react'
import { Ads, Banner, Seo, Toc } from '../components'
import { CContainer } from '@coreui/react/src/'

interface DocsLayoutProps {
  children: any // eslint-disable-line @typescript-eslint/no-explicit-any
  data: any // eslint-disable-line @typescript-eslint/no-explicit-any
  pageContext: any // eslint-disable-line @typescript-eslint/no-explicit-any
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
      <CContainer lg className="my-md-4 flex-grow-1">
        <main className="docs-main order-1">
          <div className="docs-intro ps-lg-4">
            <Banner pro={pro_component} />
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
            <p className="docs-lead">{description}</p>
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
          </div>
          {data && data.mdx && <Toc items={data.mdx.tableOfContents.items} />}
          <div className="docs-content ps-lg-4">{children}</div>
        </main>
      </CContainer>
    </>
  )
}

DocsLayout.displayName = 'DocsLayout'

export default DocsLayout
