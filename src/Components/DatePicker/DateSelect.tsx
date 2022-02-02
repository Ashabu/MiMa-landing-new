import React, { useState } from 'react';
import './datePicker.scss';

const DateSelect = (props) => {

   

    return (
        <div className='date-select '>
            <select name={props.name} value={props.startValue} onChange={(e) => props.callBack(e.target.value)}>
                <option value='' disabled >{props.name}</option>
                {props.data?.map((el, i) => (
                    <option key={el } value={el}>
                        {el}
                    </option>
                ))}
            </select>
            <img src='../../assets/images/select-arrow.png' />
        </div>
    );
};

export default DateSelect;