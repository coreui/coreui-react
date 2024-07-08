import React, { FC, ReactNode } from 'react'
import { Highlight } from 'prism-react-renderer'
import { cilClone, cilCode, cilMediaPlay } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CTab, CTabContent, CTabList, CTabPanel, CTabs, CTooltip } from '@coreui/react/src/index'

interface BlockProps {
  children: ReactNode
  className?: string
  code?: string
  pro?: boolean
  title?: string
}

const Block: FC<BlockProps> = ({ children, className, code, pro, title, ...rest }) => {
  return pro ? (
    <>
      <div className="d-flex align-items-baseline">
        <h2 className="fs-5 mb-4 me-auto">{title}</h2>
        <a
          className="link-primary link-underline link-underline-opacity-0 fw-semibold"
          href="https://coreui.io/pricing/?framework=react&src=react-docs&cta=blocks"
        >
          Get the code →
        </a>
      </div>
      <div
        className={`docs-block mb-5 ${className} ${className && className.includes('p-') ? '' : 'p-3'}`}
        {...rest}
      >
        {children}
      </div>
    </>
  ) : (
    <CTabs activeItemKey="preview" className="mb-5">
      <div className="d-flex align-items-baseline mb-3">
        <h2 className="fs-5 me-auto">{title}</h2>
        <div className="actions d-flex flex-nowrap">
          <CTabList className="tabs-blocks flex-nowrap">
            <CTab className="flex-nowrap" itemKey="preview">
              <CIcon icon={cilMediaPlay} className="me-2" /> Preview
            </CTab>
            <CTab className="flex-nowrap" itemKey="code">
              <CIcon icon={cilCode} className="me-2" />
              Code
            </CTab>
          </CTabList>
          <div
            className="d-flex vr mx-4 my-auto text-body text-opacity-75"
            style={{ height: '1.5rem' }}
          ></div>
          <CTooltip content="Copied!" placement="top" trigger={['click', 'focus']}>
            <button
              className="btn-clipboard"
              onClick={() => {
                code && navigator.clipboard.writeText(code)
              }}
            >
              <CIcon icon={cilClone} />
            </button>
          </CTooltip>
        </div>
      </div>
      <CTabContent>
        <CTabPanel itemKey="preview">
          <div
            className={`docs-block ${className} ${className && className.includes('p-') ? '' : 'p-3'}`}
            {...rest}
          >
            {children}
          </div>
        </CTabPanel>
        {code && (
          <CTabPanel itemKey="code">
            <div className="highlight blocks">
              <Highlight code={code?.trim()} language="tsx" theme={{ plain: {}, styles: [] }}>
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
          </CTabPanel>
        )}
      </CTabContent>
    </CTabs>
  )
}

Block.displayName = 'Block'

export default Block
