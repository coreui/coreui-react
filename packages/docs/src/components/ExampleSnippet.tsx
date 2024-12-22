import React, { FC, lazy, Suspense, useEffect, useMemo, useState } from 'react'
import { Highlight, Language } from 'prism-react-renderer'
import CIcon from '@coreui/icons-react'
import { cibCodesandbox, cilCheckAlt, cilCopy } from '@coreui/icons'
import { CNav, CNavLink, CTooltip, useClipboard } from '@coreui/react/src/'
import { openStackBlitzProject } from '../utils/stackblitz'
import { openCodeSandboxProject } from '../utils/codesandbox'

export interface ExampleSnippetProps {
  className?: string
  codeSandbox?: boolean
  component: string
  componentName?: string
  pro?: boolean
  stackBlitz?: boolean
}

const ExampleSnippet: FC<ExampleSnippetProps> = ({
  className = '',
  codeSandbox = true,
  component,
  componentName = 'Example Component',
  pro = false,
  stackBlitz = true,
}) => {
  const [clipboardCode, setClipboardCode] = useState<string>()
  const [highlightCode, setHighlightCode] = useState<string>()
  const [language, setLanguage] = useState<'js' | 'ts'>('js')
  const { copy, isCopied } = useClipboard()

  const Preview = useMemo(() => {
    if (!component) return null
    return lazy(() =>
      import(`@example/${component}.tsx`)
        .then((module) => ({ default: module[component] }))
        .catch((error) => {
          console.error(`Failed to load Preview component for ${component}:`, error)
          return { default: () => <div>Preview not available.</div> }
        }),
    )
  }, [component])

  useEffect(() => {
    const loadCode = async () => {
      try {
        const module = await import(`!!raw-loader!@example/${component}.${language}x`)
        setClipboardCode(module.default)
      } catch {
        const tsModule = await import(`!!raw-loader!@example/${component}.tsx`)
        setClipboardCode(tsModule.default)
      }
    }

    loadCode()
  }, [component, language])

  useEffect(() => {
    const loadCode = async () => {
      try {
        const module = await import(`!!raw-loader!@example/${component}.short.${language}x`)
        setHighlightCode(module.default)
      } catch {
        try {
          const tsModule = await import(`!!raw-loader!@example/${component}.short.tsx`)
          setHighlightCode(tsModule.default)
        } catch {
          setHighlightCode(clipboardCode)
        }
      }
    }

    loadCode()
  }, [clipboardCode])

  const handleCopy = () => {
    if (clipboardCode) copy(clipboardCode)
  }

  const prismLanguage: Language = language === 'js' ? 'jsx' : 'tsx'

  return (
    <div className="docs-example-snippet">
      <div className={`docs-example ${className}`}>
        {Preview ? (
          <Suspense fallback={<div>Loading preview...</div>}>
            <Preview />
          </Suspense>
        ) : (
          <div>No component specified.</div>
        )}
      </div>
      <div className="highlight-toolbar border-top">
        <CNav as="div" className="px-3" variant="underline-border" role={undefined}>
          <CNavLink as="button" active={language === 'js'} onClick={() => setLanguage('js')}>
            JavaScript
          </CNavLink>
          <CNavLink as="button" active={language === 'ts'} onClick={() => setLanguage('ts')}>
            TypeScript
          </CNavLink>
          <span className="ms-auto"></span>
          {codeSandbox && clipboardCode && (
            <CTooltip content="Try it on CodeSandbox">
              <button
                type="button"
                className="btn btn-transparent"
                aria-label="Try it on CodeSandbox"
                onClick={() =>
                  openCodeSandboxProject({
                    name: component,
                    language,
                    code: clipboardCode,
                    componentName,
                    pro,
                  })
                }
              >
                <CIcon icon={cibCodesandbox} />
              </button>
            </CTooltip>
          )}
          {stackBlitz && clipboardCode && (
            <CTooltip content="Try it on StackBlitz">
              <button
                type="button"
                className="btn btn-transparent px-1"
                aria-label="Try it on StackBlitz"
                onClick={() =>
                  openStackBlitzProject({
                    name: component,
                    language,
                    code: clipboardCode,
                    componentName,
                    pro,
                  })
                }
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
            >
              <CIcon icon={isCopied ? cilCheckAlt : cilCopy} />
            </button>
          </CTooltip>
        </CNav>
      </div>
      {highlightCode && (
        <div className="highlight">
          <Highlight
            code={highlightCode}
            language={prismLanguage}
            theme={{ plain: {}, styles: [] }}
          >
            {({ className: highlightClass, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={highlightClass} style={style}>
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
      )}
    </div>
  )
}

ExampleSnippet.displayName = 'ExampleSnippet'

export default ExampleSnippet
