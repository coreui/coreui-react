import React from 'react'
import { Highlight } from 'prism-react-renderer'

const JSXDocs = ({ code }: { code: string }) => {
  return (
    code && (
      <div className="highlight">
        <Highlight code={code} language="jsx" theme={{ plain: {}, styles: [] }}>
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

JSXDocs.displayName = 'JSXDocs'

export default JSXDocs
