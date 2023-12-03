import React,{useState} from 'react'
import runtimes from './runtime.json'
import {Link} from 'react-router-dom'
import { useConfiguratorFormContext } from 'src/contexts/ConfiguratorFormContext'
import { useNavigate } from 'react-router-dom';

import { CButton, CCard, CCardImage, CCardBody, CCardFooter, CCardTitle, CCardText, CRow, CCol,CFormInput,CForm} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {cibGithub, cilArrowLeft} from '@coreui/icons'

const ConfiguratorRuntimeSpecs = () => {
  const navigate = useNavigate();
  const { runtime, setRuntime } = useConfiguratorFormContext();
  const [validated, setValidated] = useState(false)
  const [ss58Prefix, setSs58Prefix] = useState();
  const [decimals, setDecimals] = useState();
  const [tokenSymbol, setTokenSymbol] = useState();
  const [paraId, setParaId] = useState()

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
  
    // Check if the form is valid
    if (ss58Prefix && decimals && tokenSymbol && paraId ) {
      // If the form is valid, navigate to the next page
      navigate("/configure");
    } else {
      // If the form is not valid, prevent navigation and enable validation feedback
      event.stopPropagation();
    }
  
    // Set the validated state to true to trigger the display of validation feedback
    setValidated(true);
  };

  console.log('!paraId',!paraId)

  const handleInputNumberChangeHandler = (maxValue, setter) => (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && Number.isInteger(value) && value <= maxValue) {
        setter(value.toString());
    }
  };

  return (
    <>
    <CRow>
      <CCol md={1}>
        <Link to='/configure'>
          <CIcon size="lg" className="text-secondary" icon={cilArrowLeft}/>
        </Link>
      </CCol>
      <CCol md={11}>
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }}>
          <CForm
              noValidate
                validated={validated}
                onSubmit={handleSubmit}
          >
            <CFormInput
                type="number"
                id="paraId"
                invalid={true}
                feedbackInvalid={ "Please make it an integer below 10_000"}
                label="Para Id"
                placeholder="Para Id"
                value={paraId}
                text=""
                aria-describedby="Para Id"
                onChange={handleInputNumberChangeHandler(10000,setParaId)}
              />
              <CFormInput
                type="text"
                id="tokenSymbol"
                label="Token Symbol"
                placeholder="PORT"
                value={tokenSymbol}
                onChange={(e) => setTokenSymbol(e.target.value)}
                text=""
                aria-describedby="tokenSymbol"
              />
            <CFormInput
                type="number"
                id="ss58Prefix"
                label="ss58Prefix"
                placeholder="42"
                value={ss58Prefix}
                onChange={handleInputNumberChangeHandler(100,setSs58Prefix)}
                aria-describedby="ss58Prefix"
            />
              <CFormInput
                type="number"
                id="decimals"
                label="Decimals"
                placeholder="12"
                value={decimals}
                text=""
                aria-describedby="Decimals"
                onChange={handleInputNumberChangeHandler(50,setDecimals)}
              />
            <CRow className='mt-4'>
              <CButton type="submit" className='fw-light'>Confirm</CButton>
            </CRow>
          </CForm>
        </CRow>
      </CCol>
    </CRow>

    </>
  )
}

export default ConfiguratorRuntimeSpecs
