import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Highlight, Prism } from 'prism-react-renderer'

export interface ScssDocsProps {
  file: string
  capture: string
}

const unindent = (text: string) => {
  const lines = text.split('\n')
  // Find first non-empty line to determine indentation
  const firstLine = lines.find((line) => line.trim().length > 0) || ''
  const indentMatch = firstLine.match(/^( *)/)
  const indent = indentMatch ? indentMatch[1] : ''
  const regex = new RegExp(`^${indent}`)
  return lines
    .map((line) => line.replace(regex, ''))
    .join('\n')
    .trimEnd()
}

const ScssDocs = ({ file, capture }: ScssDocsProps) => {
  ;(typeof global === 'undefined' ? window : global).Prism = Prism
  // eslint-disable-next-line unicorn/prefer-module
  require('prismjs/components/prism-scss')

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const _file = data.allFile.edges.find((node: any) => node.node.relativePath === file)
  const captureStart = `// scss-docs-start ${capture}\n`
  const captureEnd = `// scss-docs-end ${capture}\n`
  const re = new RegExp(`${captureStart}([\\s\\S]*?)${captureEnd}`, 'm')
  const captured = re.exec(_file.node.internal.content)
  const code = captured ? captured[1] : undefined

  if (code === undefined) {
    console.error(`Can't find "${capture}" in ${_file.node.relativePath}`)
  }

  return (
    code && (
      <div className="highlight mb-3">
        <Highlight
          code={unindent(code).replaceAll('--#{$prefix}', '--cui-')}
          language="scss"
          theme={{ plain: {}, styles: [] }}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={{ ...style }}>
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
  )
}

ScssDocs.displayName = 'ScssDocs'

export default ScssDocs
