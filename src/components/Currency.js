import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {
    const {setName, dispatch} = useContext(AppContext);

    const OnChanges = (event) => {
        setName(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
        })
    }

    const colourStyles = {
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          // const color = chroma(data.color);
          console.log({ data, isDisabled, isFocused, isSelected });
          return {
            ...styles,
            backgroundColor: isFocused ? "#999999" : "yellowgreen",
            color: "#333333"
          };
        }
      };

    return (
        <div className='alert alert-secondary' style={{marginLeft: '2rem' }}>
            <select className="currency-select" id="inputGroupSelect03" style={{backgroundColor: 'yellowgreen', color: 'white'}}
             onChange={OnChanges}>
                <option defaultValue>Currency (£ Pound)</option>
                <option value="Dollar" name="$">$ Dollar</option>
                <option value="Pound" name="£">£ Pound</option>
                <option value="Euro" name="€">€ Euro</option>
                <option value="Ruppee" name="₹">₹ Ruppee</option>

            </select>
        </div>
    );

};

export default Currency;