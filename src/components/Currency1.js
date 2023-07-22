import React, { useContext,  Select } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {
    const {setName, dispatch} = useContext(AppContext);

    const OnChanges = (event) => {
        setName(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
        })
    }

    const options = [
        {value: "Dollar", label: "$ Dollar"},
        {value: "Pound", label: "£ Pound"},
        {value: "Euro", label: "€ Euro"},
        {value: "Ruppee", label: "₹ Ruppee"},
    ];

    const colourStyles = {
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          // const color = chroma(data.color);
          console.log({ data, isDisabled, isFocused, isSelected });
          return {
            ...styles,
            backgroundColor: isFocused ? "#999999" : "red",
            color: "#333333"
          };
        }
      };

    return (
        <div className='alert alert-secondary' style={{marginLeft: '2rem' }}>
            <Select option={options} style={{colourStyles}}
             onChange={OnChanges}/>
        </div>
    );

};

export default Currency;