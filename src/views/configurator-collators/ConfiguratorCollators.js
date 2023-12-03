import React from 'react'
import { useLocalStorageContext } from 'src/contexts/LocalStorageContext'
import {Link} from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import {cilArrowLeft} from '@coreui/icons'
import { CCol, CButtonToolbar, CButtonGroup, CButton} from '@coreui/react'

const ConfiguratorCollators = () => {

  const { collators, setCollators } = useLocalStorageContext();

  // Example function to update collators
  const addCollator = (newCollator) => {
    setCollators([...collators, newCollator]);
  };

  const handleClick = (qty) => {
    console.log("number of collators", qty)
  }

  return (
    <>
      <CCol md={1}>
        <Link to='/configure'>
          <CIcon size="lg" className="text-secondary" icon={cilArrowLeft}/>
        </Link>
      </CCol>
      <CCol>
        <p className='fs-5 fw-light'>Pick the number of collators to be deployed.</p>
        <CButtonToolbar role="group" aria-label="Large button group">
          <CButtonGroup className="me-2" role="group" aria-label="Third group">
            <CButton active={1 === 1 ? true : false} onClick={() => handleClick(1)} color="info" variant="outline">1 Collator</CButton>
            <CButton active={1 === 2 ? true : false} onClick={() => handleClick(2)} color="info" variant="outline">2 Collators</CButton>
            <CButton active={1 === 3 ? true : false} onClick={() => handleClick(3)} color="info" variant="outline">3 Collators</CButton>
            <CButton active={1 === 4 ? true : false} onClick={() => handleClick(4)} color="info" variant="outline">4 Collators</CButton>
            <CButton active={1 === 5 ? true : false} onClick={() => handleClick(5)} color="info" variant="outline">5 Collators</CButton>
            <CButton active={1 === 6 ? true : false} onClick={() => handleClick(6)} color="info" variant="outline">6 Collators</CButton>
            <CButton active={1 === 7 ? true : false} onClick={() => handleClick(7)} color="info" variant="outline">7 Collators</CButton>
            <CButton active={1 === 8 ? true : false} onClick={() => handleClick(8)} color="info" variant="outline">8 Collators</CButton>
            <CButton active={1 === 9 ? true : false} onClick={() => handleClick(9)} color="info" variant="outline">9 Collators</CButton>
            <CButton active={1 === 10 ? true : false} onClick={() => handleClick(10)} color="info" variant="outline">10 Collators</CButton>
          </CButtonGroup>
        </CButtonToolbar>
      </CCol>
    </>
  );
};

export default ConfiguratorCollators

