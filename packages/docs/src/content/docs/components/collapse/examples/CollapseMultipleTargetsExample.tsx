import React, { useState } from 'react'
import { CButton, CCollapse, CCard, CCardBody, CCol, CRow } from '@coreui/react'

export const CollapseMultipleTargetsExample = () => {
  const [visibleA, setVisibleA] = useState(false)
  const [visibleB, setVisibleB] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisibleA(!visibleA)}>
        Toggle first element
      </CButton>
      <CButton color="primary" onClick={() => setVisibleB(!visibleB)}>
        Toggle second element
      </CButton>
      <CButton
        color="primary"
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
                richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                cred nesciunt sapiente ea proident.
              </CCardBody>
            </CCard>
          </CCollapse>
        </CCol>
        <CCol xs={6}>
          <CCollapse visible={visibleB}>
            <CCard className="mt-3">
              <CCardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                cred nesciunt sapiente ea proident.
              </CCardBody>
            </CCard>
          </CCollapse>
        </CCol>
      </CRow>
    </>
  )
}
