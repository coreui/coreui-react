//This component will help export a wasm given a particular hash.

import CIcon from '@coreui/icons-react'
import { cilCloudDownload } from '@coreui/icons'

//CONTEXT
import { useApiContextRC } from '../../contexts/ConnectRelayContext'


const ExportWasm = ({wasmHash, paraID}) => {
    
    const apiContextRC = useApiContextRC()
    const rcApi = apiContextRC.api

    const exportWasm = async () => {
        const element = document.createElement("a");
        const wasm = await (await rcApi.query.paras.codeByHash(wasmHash)).toHuman();
        const file = new Blob([wasm], {type: 'text/plain;charset=utf-8'});
        element.href = URL.createObjectURL(file);
        element.download = `[PORTICO] wasm-paraID-${paraID}.txt`;
        document.body.appendChild(element);
        element.click();
    }


    return (
        <CIcon onClick={() => exportWasm()} className='me-2'  size='lg' icon={cilCloudDownload}/>
    );

}


export default ExportWasm;