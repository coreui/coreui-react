import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import {
  Callout,
  CodeBlock,
  ClassNamesDocs,
  Example,
  JSXDocs,
  ExampleSnippet,
  ScssDocs,
} from '../components'

interface MdxLayoutProps {
  data: any // eslint-disable-line @typescript-eslint/no-explicit-any
  children: any // eslint-disable-line @typescript-eslint/no-explicit-any
}

const MdxLayout: FC<MdxLayoutProps> = ({ children }) => {
  return (
    <MDXProvider
      components={{
        Callout: (props: any) => {
          const { children, title, ...rest } = props
          return (
            <Callout {...rest}>
              {title && <h5>{title}</h5>}
              {children}
            </Callout>
          )
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ClassNamesDocs: (props: any) => <ClassNamesDocs {...props} />,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ExampleSnippet: (props: any) => <ExampleSnippet {...props} />,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        JSXDocs: (props: any) => <JSXDocs {...props} />,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ScssDocs: (props: any) => <ScssDocs {...props} />,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        pre: (props: any) => <CodeBlock {...props} />,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }}
    >
      {children}
    </MDXProvider>
  )
}

MdxLayout.displayName = 'MdxLayout'

export default MdxLayout

export const pageQuery = graphql`
  query PageQuery($id: String, $regex: String) {
    mdx(id: { eq: $id }) {
      tableOfContents(maxDepth: 3)
    }
    allMdx(filter: { fields: { slug: { regex: $regex } } }) {
      edges {
        node {
          id
          fields {
            slug
          }
        }
      }
    }
  }
`
