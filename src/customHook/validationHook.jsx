import React from 'react';
import { useState } from 'react';

const ValidationHook = (initialValues,initialErrorValues) => {
    const [inputs, setInputs] = useState(initialValues);
    const [errors, setErrors] = useState(initialErrorValues);

    const setDataToState=(event) =>{
        setInputs(inputs=>({ ...inputs,[event.target.name]:event.target.value }))
    }
    const checkValid=(event) =>{
        console.log("called checkValid");
        console.log(event);
        if (event.target.type==="text" || event.target.type==="password" ) {
            if (event.target.value ==="" ) {
                setErrors(errors => ({ ...errors, [event.target.name+"Error"]: "This field is required" }));
            } else {
                setErrors(errors=>({...errors,[event.target.name+"Error"]:""}))
            }   
        }
    }
    return {
        setDataToState,
        checkValid,
        inputs,
        errors
    }
};

export default ValidationHook;