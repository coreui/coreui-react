import React, { FC } from 'react'
import { Highlight, Prism } from 'prism-react-renderer'

interface CodeBlockProps {
  children: any // eslint-disable-line @typescript-eslint/no-explicit-any
}

const CodeBlock: FC<CodeBlockProps> = ({ children }) => {
  ;(typeof global === 'undefined' ? window : global).Prism = Prism
  // eslint-disable-next-line unicorn/prefer-module
  require('prismjs/components/prism-bash')
  require('prismjs/components/prism-scss')
  const _children = children && children.props.children
  const language = children.props.className
    ? children.props.className.replace(/language-/, '')
    : 'jsx'

  return (
    <div className="highlight">
      <Highlight code={_children?.trim()} language={language} theme={{ plain: {}, styles: [] }}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}

CodeBlock.displayName = 'CodeBlock'

export default CodeBlock
