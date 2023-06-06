import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Highlight, { defaultProps } from 'prism-react-renderer'

const ScssDocs: FC = ({ file, capture }: { file?: string; capture?: string }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { ext: { eq: ".scss" } }) {
        edges {
          node {
            name
            relativePath
            id
            internal {
              content
            }
          }
        }
      }
    }
  `)

  const _file = data.allFile.edges.find((node: any) => node.node.relativePath === file)
  const captureStart = `// scss-docs-start ${capture}`
  const captureEnd = `// scss-docs-end ${capture}`
  const re = new RegExp(`${captureStart}((?:.|\n)*)${captureEnd}`)
  const code = re.exec(_file.node.internal.content)[1].trim()

  return (
    <div className="highlight">
      <Highlight
        {...defaultProps}
        code={code
          .replaceAll('--#{$prefix}', '--cui-')
          .replaceAll('\n  -', '\n-')
          .replaceAll('\n  @', '\n@')}
        language="sass"
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className}>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i })
              return (
                <div className={lineProps.className} key={i}>
                  {line.map((token, key) => {
                    const tokenProps = getTokenProps({ token, key })
                    return (
                      <span className={tokenProps.className} key={key}>
                        {tokenProps.children}
                      </span>
                    )
                  })}
                </div>
              )
            })}
          </pre>
        )}
      </Highlight>
    </div>
  )
}

ScssDocs.displayName = 'ScssDocs'

export default ScssDocs
