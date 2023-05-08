import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { CBadge, CTable } from '@coreui/react/src/index'
import { Callout, CodeBlock, Example } from '../components'

interface MdxLayoutProps {
  data: any
  children: any
}

const MdxLayout: FC<MdxLayoutProps> = ({ children }) => {
  return (
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
          // TODO: find better soultion
          const isApiTable =
            props.children[0].props.children.props.children[0].props.children &&
            props.children[0].props.children.props.children[0].props.children.includes('Property')
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
            <Callout {...rest}>
              {title && <h5>{title}</h5>}
              {children}
            </Callout>
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
  )
}

MdxLayout.displayName = 'MdxLayout'

export default MdxLayout

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      tableOfContents(maxDepth: 3)
    }
  }
`
