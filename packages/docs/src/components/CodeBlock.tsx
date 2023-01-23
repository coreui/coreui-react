import React, { FC } from 'react'
import PropTypes from 'prop-types'
import Highlight, { defaultProps } from 'prism-react-renderer'

interface CodeBlockProps {
  children: any
}

const CodeBlock: FC<CodeBlockProps> = ({ children }) => {
  const _children = children && children.props.children
  const language = children.props.className
    ? children.props.className.replace(/language-/, '')
    : 'jsx'

  return (
    <div className="code mb-4">
      <Highlight {...defaultProps} theme={undefined} code={_children?.trim()} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                <span className="line-no">{i + 1}</span>
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

CodeBlock.propTypes = {
  children: PropTypes.any,
}

CodeBlock.displayName = 'CodeBlock'

export default CodeBlock
