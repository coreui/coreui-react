import React, { FC, useMemo } from 'react'
import { graphql, PageProps } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import {
  Block,
  Callout,
  CodeBlock,
  ClassNamesDocs,
  Example,
  ExampleSnippet,
  JSXDocs,
  ScssDocs,
  Seo,
} from '../components'

import { CalloutProps } from '../components/Callout'
import { CodeBlockProps } from '../components/CodeBlock'
import { ExampleProps } from '../components/Example'
import { ExampleSnippetProps } from '../components/ExampleSnippet'
import { ScssDocsProps } from '../components/ScssDocs'
import type { TocItem } from '../components/Toc'

interface DataProps {
  mdx: {
    tableOfContents: Toc
  }
  allMdx: {
    edges: Array<{
      node: {
        id: string
        fields: {
          slug: string
        }
      }
    }>
  }
}

interface PageContextType {
  frontmatter: {
    title: string
    description: string
    name: string
  }
}

interface Toc {
  items: TocItem[]
}

const MdxLayout: FC<PageProps<DataProps>> = ({ children }) => {
  const components = useMemo(
    () => ({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Block: (props: any) => {
        const { children, ...rest } = props
        return <Block {...rest}>{children}</Block>
      },
      Callout: (props: CalloutProps) => {
        const { children, title, ...rest } = props
        return (
          <Callout {...rest}>
            {title && <h5>{title}</h5>}
            {children}
          </Callout>
        )
      },
      ClassNamesDocs: (props: { files: string | string[] }) => <ClassNamesDocs {...props} />,
      Example: (props: ExampleProps) => {
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
      ExampleSnippet: (props: ExampleSnippetProps) => <ExampleSnippet {...props} />,
      JSXDocs: (props: { code: string }) => <JSXDocs {...props} />,
      ScssDocs: (props: ScssDocsProps) => <ScssDocs {...props} />,
      pre: (props: CodeBlockProps) => <CodeBlock {...props} />,
      table: (props) => (
        <div className="table-responsive table-docs border rounded mb-3">
          <table className="table table-docs" {...props} />
        </div>
      ),
    }),
    []
  )
  return <MDXProvider components={components}>{children}</MDXProvider>
}

MdxLayout.displayName = 'MdxLayout'

export default MdxLayout

export const Head = ({ pageContext }: { pageContext: PageContextType }) => {
  const { frontmatter } = pageContext

  const title = frontmatter?.title || ''
  const description = frontmatter?.description || ''
  const name = frontmatter?.name || ''

  return (
    <>
      <html lang="en" />
      <Seo title={title} description={description} name={name} />
    </>
  )
}

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
