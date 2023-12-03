import React from 'react'
import { useConfiguratorFormContext } from 'src/contexts/ConfiguratorFormContext'
import {Link} from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import {cilArrowLeft} from '@coreui/icons'
import { CRow, CCol, CButtonToolbar, CButtonGroup, CButton} from '@coreui/react'

const ConfiguratorCollators = () => {

  const { collators, setCollators } = useConfiguratorFormContext();

  const handleClick = (qty) => {
    console.log(typeof qty)
    setCollators(qty)
  }

  return (
    <>
      <CRow className='d-flex flex-row'>
        <CCol md={1}>
          <Link to='/configure'>
            <CIcon size="lg" className="text-secondary" icon={cilArrowLeft}/>
          </Link>
        </CCol>
        <CCol md={11}>
          <p className='fs-5 fw-light'>Pick the number of collators to be deployed.</p>
          <CButtonToolbar className='mt-4' role="group" aria-label="Large button group">
            <CButtonGroup role="group" aria-label="Third group">
              <CButton className='fw-light' active={collators === 1 ? true : false} onClick={() => handleClick(1)} color="info" variant="outline">1 Collator</CButton>
              <CButton className='fw-light' active={collators === 2 ? true : false} onClick={() => handleClick(2)} color="info" variant="outline">2 Collators</CButton>
              <CButton className='fw-light' active={collators === 3 ? true : false} onClick={() => handleClick(3)} color="info" variant="outline">3 Collators</CButton>
              <CButton className='fw-light' active={collators === 4 ? true : false} onClick={() => handleClick(4)} color="info" variant="outline">4 Collators</CButton>
              <CButton className='fw-light' active={collators === 5 ? true : false} onClick={() => handleClick(5)} color="info" variant="outline">5 Collators</CButton>
              <CButton className='fw-light' active={collators === 6 ? true : false} onClick={() => handleClick(6)} color="info" variant="outline">6 Collators</CButton>
              <CButton className='fw-light' active={collators === 7 ? true : false} onClick={() => handleClick(7)} color="info" variant="outline">7 Collators</CButton>
              <CButton className='fw-light' active={collators === 8 ? true : false} onClick={() => handleClick(8)} color="info" variant="outline">8 Collators</CButton>
              <CButton className='fw-light' active={collators === 9 ? true : false} onClick={() => handleClick(9)} color="info" variant="outline">9 Collators</CButton>
              <CButton className='fw-light' active={collators === 10 ? true : false} onClick={() => handleClick(10)} color="info" variant="outline">10 Collators</CButton>
            </CButtonGroup>
          </CButtonToolbar>
        </CCol>
      </CRow>
      <CRow className='mt-4'>
        <Link className='text-center' to="/configure">
          <CButton className='fw-light'>Confirm</CButton>
        </Link>
      </CRow>
    </>
  );
};

export default ConfiguratorCollators

