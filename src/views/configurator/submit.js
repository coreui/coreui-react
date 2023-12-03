
// Your JSON data
let jsonData = {
    "settings": {
        "provider": "native"
    },
    "relaychain": {
        "chain": "rococo-local",
        "default_command": "./bin/polkadot",
        "nodes": [
            {
                "name": "alice",
            },
            {
                "name": "bob",
            }
        ]
    },
    "parachains": [
        {
            "id": 2100,
            "cumulus_based": true,
            "chain": "local",
            "add_to_genesis": false,
            "onboard_as_parachain": false,
            "collators": []
        }
    ]
};

const submit = async ({collators, runtime, coretime, setStateStatus }) => {

    jsonData.parachains[0].collators = Array.from({ length: collators }, (_, i) => ({
        "name": `parachain-collator${(i + 1).toString().padStart(2, '0')}`,
        "command": "./bin/parachain-template-node"
    }));
    
    setStateStatus({executing: 'executing', status: 'info', message: 'Submitting Configuration'});
    
    const response = await fetch(`${process.env.REACT_APP_API_URL}/network`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    });
    
    const data = await response.json();

    console.log('submit data', data);
    
    if (data.result === 'OK') {
        setStateStatus({executing: 'success', status: 'success', message: 'Configuration Submitted'});
    } else {
        setStateStatus({executing: 'failed', status: 'danger', message: 'Configuration Submission Failed'});
    }
    
    return data;
}

export default submit;