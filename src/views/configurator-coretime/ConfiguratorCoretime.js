import React, {useState} from 'react'
import { useConfiguratorFormContext } from 'src/contexts/ConfiguratorFormContext'
import {useNavigate} from 'react-router-dom'
import { CFormInput, CRow, CCol, CButton, CForm } from '@coreui/react'

const ConfiguratorCoretime = () => {
  const [validAmount, setValidAmount] = useState(true)
  const [validEvery, setValidEvery] = useState(true)
  const [validated, setValidated] = useState(true)
  const { coretime, setCoretime } = useConfiguratorFormContext();

  const navigate = useNavigate()

  const handleAmountChange = (event) => {
    let amount = Math.floor(Number(event.target.valueAsNumber));
    if (event.target.valueAsNumber > 10000){
      setValidAmount(false)
    } else {
      setValidAmount(true)
    }
    setCoretime({...coretime, amount})
  }

  const handleEveryChange = (event) => {
    let every = Math.floor(Number(event.target.valueAsNumber));
    if (event.target.valueAsNumber > 1000){
      setValidEvery(false)
    } else {
      setValidEvery(true)
    }
    setCoretime({...coretime, every})
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      event.preventDefault()
      navigate("/configure")
    }
    setValidated(true)
  }

  return (
    <CForm className="needs-validation" noValidate onSubmit={handleSubmit} validated={validated}>
      <CRow className='d-flex flex-row'>
            <CRow className='mb-3'>
              <p>In order to configure your Coretime needs, you need to select: <strong>Amount</strong> and <strong>Frequency</strong> of validation.</p>
              <p><strong>Amount</strong> dictates how many blocks of your parachain you want to pre-configure to be validated by the Relay Chain. For the purposes of this MVP the cap is 10_000 blocks.</p>
              <p><strong>Frequency</strong> configures every how many blocks of the Relay Chain you wish to submit a Parachain Block.</p>
              <p className='mt-2'><strong>Example</strong>. Objective is to have one thousand Parachain blocks validated by the Relay Chain, and this to happen every 10 Relay Chain blocks. Configuration would look as follows:</p>
              <ul className='ms-4'>
                <li>Amount: 1_000</li>
                <li>Frequency: 10</li>
              </ul>
            </CRow>
            <CRow>
              <CCol md={7}>
                <CFormInput 
                  max={10000}
                  onChange={() => handleAmountChange(event)}
                  invalid={!validAmount} 
                  step={1} 
                  type="number" 
                  value={coretime.amount ? coretime.amount : ""} 
                  size="lg" 
                  aria-label="lg input example"
                  required
                  feedbackInvalid={validAmount ? "" : "Please make it an integer below 10_000"}
                  label="Amount: Parachain Blocks to be validated"
                />
              </CCol>
            </CRow> 
            <CRow className='mt-4'>
              <CCol md={7}>
                <CFormInput 
                  max={1000}
                  step={1}
                  onChange={(event) => handleEveryChange(event)}
                  invalid={!validEvery} 
                  label="Frequency: Every how many Relaychan Blocks should Parachain blocks be validated"
                  type="number"
                  value={coretime.every ? coretime.every : ""}
                  size="lg"
                  aria-label="lg input example"
                  required
                  feedbackInvalid={validEvery ? "" : "Please make it an integer below 1_000"}
                />
              </CCol>
            </CRow>
      </CRow>
      <CRow className='mt-4'>
        <CCol className='d-flex justify-content-center'>
          <CButton type="submit" className='fw-light'>Confirm</CButton>
        </CCol>
      </CRow>
    </CForm>
  );
};

export default ConfiguratorCoretime


