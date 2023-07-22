import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget,remaining,currency} = useContext(AppContext);
    const [value, setValue] = useState(budget)

    
    const handleChange = (event) => {
        if (event.target.value > 20000) {
            alert("Value cannot exceed 20,000");
            setValue(budget);
        } else if (event.target.value < (budget - remaining)) {
            alert("You cannot reduce the budget value lower than spending");
            setValue(budget);
        } else {
            setValue(event.target.value);
            dispatch({
                type: 'SET_BUDGET',
                payload: setValue(event.target.value),  
            });
        }
    };


    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
            required='required'
            type='number'
            step='10'
            value={value}
            style={{size: 4}}
            onChange={handleChange}></input>

        </div>
    );
};
export default Budget;
