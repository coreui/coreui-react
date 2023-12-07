const submit = async ({setStateStatus,localStorageContext, configurationContext}) => {
    const {collators, runtime, coretime  } = configurationContext;
    const {paraId, ss58, tokenSymbol, decimals} = runtime.specs;
    let jsonData = {
        para_id: paraId,
        template: runtime.template.value,
        collators_count: collators,
        properties: {
            symbol: tokenSymbol,
            ss58,
            decimals,
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
    localStorageContext.setNetworkStatus(data.result);
    
    if (data.result === 'OK') {
        localStorageContext.setNetwork(data.network);
        localStorageContext.setCoretime({...coretime, scheduled: false, lastBlock: null});
        localStorageContext.setRuntime(jsonData);
        configurationContext.restartForm();
        setStateStatus({executing: 'success', status: 'success', message: 'Configuration Submitted'});
    } else {
        setStateStatus({executing: 'failed', status: 'danger', message: 'Configuration Submission Failed'});
    }
    
    return data;
}

export default submit;