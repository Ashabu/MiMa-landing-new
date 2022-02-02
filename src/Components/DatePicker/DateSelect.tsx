import React, { useState } from 'react';
import './datePicker.scss';


interface IDateSelectProps {
    data: string[],
    callBack: (value: string) => void;
    name: string,
    startValue: string
}

const DateSelect: React.FC<IDateSelectProps> = (props) => {
    const {callBack, data, name, startValue} = props;

    return (
        <div className='date-select '>
            <select name={name} value={props.startValue} onChange={(e) => props.callBack(e.target.value)}>
                <option value='' disabled >{name}</option>
                {data?.map((el) => (
                    <option key={el } value={el}>
                        {el}
                    </option>
                ))}
            </select>
            <img src='../../assets/images/down-arrow.svg' />
        </div>
    );
};

export default DateSelect;