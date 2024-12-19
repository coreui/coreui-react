import React from 'react'
import { CAlert } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBurn, cilCheckCircle, cilInfo, cilWarning } from '@coreui/icons'

export const AlertIcons2Example = () => {
  return (
    <>
      <CAlert color="primary" className="d-flex align-items-center">
        <CIcon icon={cilInfo} className="flex-shrink-0 me-2" width={24} height={24} />
        <div>An example alert with an icon</div>
      </CAlert>
      <CAlert color="success" className="d-flex align-items-center">
        <CIcon icon={cilCheckCircle} className="flex-shrink-0 me-2" width={24} height={24} />
        <div>An example success alert with an icon</div>
      </CAlert>
      <CAlert color="warning" className="d-flex align-items-center">
        <CIcon icon={cilWarning} className="flex-shrink-0 me-2" width={24} height={24} />
        <div>An example warning alert with an icon</div>
      </CAlert>
      <CAlert color="danger" className="d-flex align-items-center">
        <CIcon icon={cilBurn} className="flex-shrink-0 me-2" width={24} height={24} />
        <div>An example danger alert with an icon</div>
      </CAlert>
    </>
  )
}
