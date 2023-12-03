const submit = async ({collators, runtime, setStateStatus, paraId, configurationContext }) => {
    
    let jsonData = {
        paraId,
        template: runtime.template.value,
        collators_count: collators,
        properties: {
            symbol: "PORT",
            ss58: number,
            decimals : number
        },
    }
    
    setStateStatus({executing: 'executing', status: 'info', message: 'Submitting Configuration'});
    
    const response = await fetch(`${process.env.REACT_APP_API_URL}/network`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    });
    
    const data = await response.json();
    
    if (data.result === 'OK') {
        configurationContext.setNetwork(data.network);
        setStateStatus({executing: 'success', status: 'success', message: 'Configuration Submitted'});
    } else {
        setStateStatus({executing: 'failed', status: 'danger', message: 'Configuration Submission Failed'});
    }
    
    return data;
}

export default submit;