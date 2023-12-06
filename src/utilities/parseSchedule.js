//This function will return just the onCoreDemand schedule

export const parseSchedule = (schedule, api, paraID) => {
    let data;
    schedule.forEach(([block_execution, call_data])=>{
        //block_execution has the information of the block at which the scheduler is scheduled to be triggered
        //call_data is an array of the calls that will be triggered at the block_execution height
        //filter only for calls that are to create a onDemandAssignmentProvider for a paraID.
        //It returns the amount left to be executed.
        const actions = call_data.toHuman();
            actions.map(value =>{
                if(value && value.call.Inline){
                   const tx = api.createType('Call', value.call.Inline);
                   const humanTx = tx.toHuman();
                   const paraTargetNumber = Number(humanTx.args.para_id.split(",").join(""))
                   if (humanTx.section === "onDemandAssignmentProvider" && paraTargetNumber === paraID){
                        data = value.maybePeriodic[1]
                   }
                }
           })
    })
    
    return data
} 