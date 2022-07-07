import React, { FC } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'

const ScssDocs: FC = ({ file, capture }: { file?: string; capture?: string }) => {
  const _file = file
  const captureStart = `scss-docs-start ${capture}`
  const captureEnd = `scss-docs-end ${capture}`
  const re = new RegExp(`${captureStart}((?:.|\n)*)${captureEnd}`)
  const code = re.exec(_file)

  return (
    <Highlight {...defaultProps} code={code[1]} language="scss">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

ScssDocs.displayName = 'ScssDocs'

export default ScssDocs
