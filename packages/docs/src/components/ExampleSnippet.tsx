import React, { FC, ReactNode, useState } from 'react'
import { Highlight, Language } from 'prism-react-renderer'

import CIcon from '@coreui/icons-react'
import { cibCodesandbox, cilCheckAlt, cilCopy } from '@coreui/icons'
import { CNav, CNavLink, CTooltip, useClipboard } from '@coreui/react'

import { openStackBlitzProject } from '../utils/stackblitz'
import { openCodeSandboxProject } from '../utils/codesandbox'

interface CodeSnippets {
  js?: string
  ts?: string
}

export interface ExampleSnippetProps {
  children: ReactNode
  className?: string
  code: string | CodeSnippets
  codeSandbox?: boolean
  componentName?: string
  stackBlitz?: boolean
}

const ExampleSnippet: FC<ExampleSnippetProps> = ({
  children,
  className = '',
  code,
  codeSandbox = true,
  componentName,
  stackBlitz = true,
}) => {
  const [language, setLanguage] = useState<'js' | 'ts'>('js')
  const { copy, isCopied } = useClipboard()

  // Type Guards to determine the shape of 'code' prop
  const isCodeString = typeof code === 'string'
  const codeJS = isCodeString ? code : code.js || code.ts
  const codeTS = isCodeString ? code : code.ts
  const hasJS = Boolean(codeJS)
  const hasTS = Boolean(codeTS)

  // Set initial language based on available code snippets
  React.useEffect(() => {
    if (!hasJS && hasTS) {
      setLanguage('ts')
    } else {
      setLanguage('js')
    }
  }, [hasJS, hasTS])

  const handleCopy = () => {
    const codeToCopy = language === 'js' ? codeJS : codeTS
    if (codeToCopy) {
      copy(codeToCopy)
    }
  }

  const prismLanguage: Language = language === 'js' ? 'jsx' : 'tsx'

  // Determine if both languages are available
  const showJSTab = hasJS && (isCodeString || code.js !== code.ts)
  const showTSTab = hasTS

  return (
    <div className="docs-example-snippet">
      {children && <div className={`docs-example ${className}`}>{children}</div>}
      <div className="highlight-toolbar border-top">
        <CNav className="px-3" variant="underline-border">
          {showJSTab && (
            <CNavLink as="button" active={language === 'js'} onClick={() => setLanguage('js')}>
              JavaScript
            </CNavLink>
          )}
          {showTSTab && (
            <CNavLink as="button" active={language === 'ts'} onClick={() => setLanguage('ts')}>
              TypeScript
            </CNavLink>
          )}
          <span className="ms-auto"></span>
          {codeSandbox && (
            <CTooltip content="Try it on CodeSandbox">
              <button
                type="button"
                className="btn btn-transparent"
                aria-label="Try it on CodeSandbox"
                onClick={() =>
                  openCodeSandboxProject({
                    name: React.isValidElement(children) && (children as any).type?.name,
                    language: language,
                    code: language === 'js' ? codeJS : codeTS || '',
                    componentName,
                  })
                }
                disabled={language === 'ts' && !hasTS}
              >
                <CIcon icon={cibCodesandbox} />
              </button>
            </CTooltip>
          )}
          {stackBlitz && (
            <CTooltip content="Try it on StackBlitz">
              <button
                type="button"
                className="btn btn-transparent px-1"
                aria-label="Try it on StackBlitz"
                onClick={() =>
                  openStackBlitzProject({
                    name: React.isValidElement(children) && (children as any).type?.name,
                    language: language,
                    code: language === 'js' ? codeJS : codeTS || '',
                    componentName,
                  })
                }
                disabled={language === 'ts' && !hasTS}
              >
                <svg
                  className="icon"
                  width="56"
                  height="78"
                  viewBox="0 0 56 78"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.4273 48.2853C23.7931 47.5845 23.0614 46.8837 22.3298 46.8837H1.11228C0.0148224 46.8837 -0.350997 45.8326 0.380642 45.1318L40.9866 0.282084C41.7182 -0.418693 43.1815 0.282084 42.8157 1.33325L32.9386 30.0651C32.5727 30.7659 32.9386 31.4666 33.6702 31.4666H54.8877C55.9852 31.4666 56.351 32.5178 55.6194 33.2186L15.0134 77.7179C14.2818 78.4187 12.8185 77.7179 13.1843 76.6667L23.4273 48.2853Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </CTooltip>
          )}
          <CTooltip content={isCopied ? 'Copied' : 'Copy to clipboard'}>
            <button
              type="button"
              className="btn btn-transparent px-1"
              aria-label="Copy to clipboard"
              onClick={handleCopy}
              disabled={(language === 'js' && !hasJS) || (language === 'ts' && !hasTS)}
            >
              <CIcon icon={isCopied ? cilCheckAlt : cilCopy} />
            </button>
          </CTooltip>
        </CNav>
      </div>

      <div className="highlight">
        <Highlight
          code={language === 'js' ? codeJS : codeTS || ''}
          language={prismLanguage}
          theme={{ plain: {}, styles: [] }}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })} key={i}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} key={key} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  )
}

ExampleSnippet.displayName = 'ExampleSnippet'

export default ExampleSnippet
