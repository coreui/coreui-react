import React, { FC } from 'react'
import { Highlight } from 'prism-react-renderer'

interface CodeBlockProps {
  children: any
}

const CodeBlock: FC<CodeBlockProps> = ({ children }) => {
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
