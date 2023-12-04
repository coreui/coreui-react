import React,{useState} from 'react'
import { useConfiguratorFormContext } from 'src/contexts/ConfiguratorFormContext'
import { useNavigate } from 'react-router-dom';

import { CButton, CRow, CCol,CFormInput,CForm} from '@coreui/react'

const ConfiguratorRuntimeSpecs = () => {
  const [ss58Valid, setSs58Valid] = useState(true)
  const [paraIdValid, setParaIdValid] = useState(true)
  const [tokenSymbolValid, setTokenSymbolValid] = useState(true)
  const [decimalsValid, setDecimalsValid] = useState(true)

  const [validated, setValidated] = useState(true)
  const { runtime, setRuntime } = useConfiguratorFormContext();

  const navigate = useNavigate()

  const handleAmountChange = (event, max, setter, path) => {
    const amount = Math.floor(Number(event.target.valueAsNumber));
    if (event.target.valueAsNumber > max) {
        setter(false);
    } else {
        setter(true);
        setRuntime(runtime => {

            // Clone the runtime object to avoid direct mutation
            let newRuntime = JSON.parse(JSON.stringify(runtime));

            
            // Split the path and reduce it to the specific property
            path.split('.').reduce((obj, key, index, array) => {
                if (index === array.length - 1) {
                    obj[key] = amount;
                } else {
                    return obj[key];
                }
            }, newRuntime);

            return newRuntime;
        });
    }
};

const handleTokenSymbolChange = (event, max, setter) => {
  const value = event.target.value;
  if (value.length > max) { 
    setter(false);
  } else {
    setter(true);
    setRuntime(runtime => {
        // Clone the runtime object to avoid direct mutation
        let newRuntime = JSON.parse(JSON.stringify(runtime));
        let { template, specs } = newRuntime;

        specs.tokenSymbol = value;
        return { template, specs };
    });
  }
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
              <p>The following is a basic configuration of your runtime parameters.</p>
              <p><strong>ParaId</strong> refers to the ID your Parachain will have on the Relaychain.</p>
              <p><strong>ss58 Format</strong> is the prefix allowing to identify an address belonging to this parachain.</p>
              <p><strong>tokenSymbol</strong> refers to the ticker of the token of this parachain.</p>
              <p><strong>Decimals</strong> is the amount of decimals for the token of this parachain.</p>
            </CRow>
            <CRow>
              <CCol md={7}>
                <CFormInput 
                  max={10000}
                  onChange={() => handleAmountChange(event, 10000, setParaIdValid, 'specs.paraId')}
                  invalid={!paraIdValid} 
                  step={1} 
                  type="number" 
                  value={runtime?.specs?.paraId ? runtime.specs.paraId : ""} 
                  size="lg" 
                  aria-label="lg input example"
                  required
                  feedbackInvalid={paraIdValid ? "" : "Please make it an integer below 10_000"}
                  label="ParaId"
                />
              </CCol>
            </CRow> 
            <CRow className='mt-4'>
              <CCol md={7}>
                <CFormInput 
                  max={100}
                  step={1}
                  onChange={() => handleAmountChange(event, 100, setSs58Valid, 'specs.ss58')}
                  invalid={!ss58Valid} 
                  label="ss58 Format"
                  type="number"
                  value={runtime?.specs?.ss58 ? runtime.specs.ss58 : ""} 
                  size="lg"
                  aria-label="lg input example"
                  required
                  feedbackInvalid={ss58Valid ? "" : "Please make it an integer below 100"}
                />
              </CCol>
            </CRow>
            <CRow className='mt-4'>
              <CCol md={7}>
                <CFormInput 
                  max={8}
                  step={1}
                  onChange={(event) => handleTokenSymbolChange(event, 8, setTokenSymbolValid)}
                  invalid={!tokenSymbolValid} 
                  label="TokenSymbol"
                  type="text"
                  value={runtime?.specs?.tokenSymbol ? runtime.specs.tokenSymbol : ""} 
                  size="lg"
                  aria-label="lg input example"
                  required
                  feedbackInvalid={tokenSymbolValid ? "" : "Please make the len below 8"}
                />
              </CCol>
            </CRow>
            <CRow className='mt-4'>
              <CCol md={7}>
                <CFormInput 
                  max={30}
                  step={1}
                  onChange={(event) => handleAmountChange(event, 1000, setDecimalsValid, 'specs.decimals')}
                  invalid={!decimalsValid} 
                  label="Decimals"
                  type="number"
                  value={runtime?.specs?.decimals ? runtime.specs.decimals : ""} 
                  size="lg"
                  aria-label="lg input example"
                  required
                  feedbackInvalid={decimalsValid ? "" : "Please make it an integer below 1_000"}
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
}

export default ConfiguratorRuntimeSpecs
