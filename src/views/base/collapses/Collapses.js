import React, { useState } from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CCollapse, CRow } from '@coreui/react'
import { DocsExample } from 'src/components'

const Collapses = () => {
  const [visible, setVisible] = useState(false)
  const [visibleHorizontal, setVisibleHorizontal] = useState(false)
  const [visibleA, setVisibleA] = useState(false)
  const [visibleB, setVisibleB] = useState(false)

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Collapse</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">You can use a link or a button component.</p>
            <DocsExample href="components/collapse">
              <CButton
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setVisible(!visible)
                }}
              >
                Link
              </CButton>
              <CButton onClick={() => setVisible(!visible)}>Button</CButton>
              <CCollapse visible={visible}>
                <CCard className="mt-3">
                  <CCardBody>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
                    anderson cred nesciunt sapiente ea proident.
                  </CCardBody>
                </CCard>
              </CCollapse>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Collapse</strong> <small> Horizontal</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">You can use a link or a button component.</p>
            <DocsExample href="components/collapse#horizontal">
              <CButton
                className="mb-3"
                onClick={() => setVisibleHorizontal(!visibleHorizontal)}
                aria-expanded={visibleHorizontal}
                aria-controls="collapseWidthExample"
              >
                Button
              </CButton>
              <div style={{ minHeight: '120px' }}>
                <CCollapse id="collapseWidthExample" horizontal visible={visibleHorizontal}>
                  <CCard style={{ width: '300px' }}>
                    <CCardBody>
                      This is some placeholder content for a horizontal collapse. It&#39;s hidden by
                      default and shown when triggered.
                    </CCardBody>
                  </CCard>
                </CCollapse>
              </div>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Collapse</strong> <small> multi target</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              A <code>&lt;CButton&gt;</code> can show and hide multiple elements.
            </p>
            <DocsExample href="components/collapse#multiple-targets">
              <CButton onClick={() => setVisibleA(!visibleA)}>Toggle first element</CButton>
              <CButton onClick={() => setVisibleB(!visibleB)}>Toggle second element</CButton>
              <CButton
                onClick={() => {
                  setVisibleA(!visibleA)
                  setVisibleB(!visibleB)
                }}
              >
                Toggle both elements
              </CButton>
              <CRow>
                <CCol xs={6}>
                  <CCollapse visible={visibleA}>
                    <CCard className="mt-3">
                      <CCardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident.
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </CCol>
                <CCol xs={6}>
                  <CCollapse visible={visibleB}>
                    <CCard className="mt-3">
                      <CCardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident.
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </CCol>
              </CRow>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Collapses
