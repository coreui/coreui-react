import React, { FC, lazy, ReactNode, Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Highlight, Language } from 'prism-react-renderer'
import CIcon from '@coreui/icons-react'
import { cibCodesandbox, cilCheckAlt, cilCopy } from '@coreui/icons'
import { CNav, CNavLink, CTooltip, useClipboard } from '@coreui/react'
import { openStackBlitzProject } from '../utils/stackblitz'
import { openCodeSandboxProject } from '../utils/codesandbox'
import { isInViewport } from '@coreui/react'

interface CodeSnippets {
  js?: string
  ts?: string
}

export interface ExampleSnippetLazyProps {
  children: ReactNode
  className?: string
  code?: string | CodeSnippets
  codeSandbox?: boolean
  component?: string
  componentName?: string
  pro?: boolean
  stackBlitz?: boolean
}

const ExampleSnippetLazy: FC<ExampleSnippetLazyProps> = ({
  children,
  className = '',
  code,
  codeSandbox = true,
  component,
  componentName,
  pro = false,
  stackBlitz = true,
}) => {
  const exampleSnippetRef = useRef<HTMLDivElement>(null)
  const [codeJS, setCodeJS] = useState<string>()
  const [codeTS, setCodeTS] = useState<string>()
  const [language, setLanguage] = useState<'js' | 'ts'>('js')
  const [visible, setVisible] = useState(false)
  const { copy, isCopied } = useClipboard()

  const Preview = useMemo(() => {
    if (!component) return null
    return lazy(() =>
      import(`@example/${component}.tsx`)
        .then((module) => ({ default: module[component] }))
        .catch((error) => {
          console.error(`Failed to load Preview component for ${component}:`, error)
          return { default: () => <div>Preview not available.</div> }
        })
    )
  }, [component])

  const handleScroll = () => {
    setVisible(true)
  }

  useEffect(() => {
    if (exampleSnippetRef.current && isInViewport(exampleSnippetRef.current)) {
      setVisible(true)
    }
  }, [])

  useEffect(() => {
    if (visible) {
      window.removeEventListener('scroll', handleScroll)
    } else {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const loadCode = async () => {
      if (code) {
        if (typeof code === 'string') {
          setCodeJS(code)
        } else {
          setCodeJS(code.js)
          setCodeTS(code.ts)
        }
      } else if (component) {
        try {
          const tsModule = await import(`!!raw-loader!@example/${component}.tsx`)
          setCodeTS(tsModule.default)
          setCodeJS(tsModule.default)
        } catch (error) {
          console.error(`Failed to load TypeScript code for component ${component}:`, error)
        }

        try {
          const jsModule = await import(`!!raw-loader!@example/${component}.jsx`)
          setCodeJS(jsModule.default)
        } catch {
          // JSX version may not exist
        }
      }
    }

    loadCode()
  }, [code, component])

  const hasJS = codeJS !== undefined && codeJS !== ''
  const hasTS = codeTS !== undefined && codeTS !== ''

  useEffect(() => {
    if (!hasJS && hasTS) {
      setLanguage('ts')
    } else {
      setLanguage('js')
    }
  }, [hasJS, hasTS])

  const handleCopy = () => {
    const codeToCopy = language === 'js' ? codeJS : codeTS
    if (codeToCopy) copy(codeToCopy)
  }

  const prismLanguage: Language = language === 'js' ? 'jsx' : 'tsx'
  const showJSTab = hasJS && !(typeof code === 'object' && code?.js === code?.ts)
  const showTSTab = hasTS

  const getProjectName = (): string => {
    if (React.isValidElement(children)) {
      const childType = (children as React.ReactElement).type
      if (typeof childType === 'string') return childType
      if (typeof childType === 'function' && childType.name) return childType.name
    }
    return 'ExampleProject'
  }

  return (
    <div className="docs-example-snippet" ref={exampleSnippetRef}>
      {visible && (
        <div className={`docs-example ${className}`}>
          {children ? (
            children
          ) : Preview ? (
            <Suspense fallback={<div>Loading preview...</div>}>
              <Preview />
            </Suspense>
          ) : (
            <div>No component specified.</div>
          )}
        </div>
      )}
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
                    name: component || getProjectName(),
                    language,
                    code: language === 'js' ? codeJS || '' : codeTS || '',
                    componentName,
                    pro,
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
                    name: component || getProjectName(),
                    language,
                    code: language === 'js' ? codeJS || '' : codeTS || '',
                    componentName,
                    pro,
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
      {visible && (hasJS || hasTS) && (
        <div className="highlight">
          <Highlight
            code={language === 'js' ? codeJS || '' : codeTS || ''}
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

ExampleSnippetLazy.displayName = 'ExampleSnippetLazy'

export default ExampleSnippetLazy
