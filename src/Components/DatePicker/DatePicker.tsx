import React, { useEffect, useState } from 'react';
import './datePicker.scss';
import DateSelect from './DateSelect';

const daysArray = Array.from(new Array(31), (_, index) => {
    let day = 1+ index
    if(day < 10) {
        return '0' + day
    } else {
        return `${day}`
    }
});
const monthsArray = Array.from(new Array(12), (_, index) => {
    let month = 1+ index
    if(month < 10) {
        return '0' + month
    } else {
        return `${month}`
    }
});
const startYear = new Date().getFullYear() - 18;
const yearsArray = Array.from(new Array(100), (_, index) => `${startYear - index}`);


interface IDatePickerProps {
    callBack: (value: string) => void;
    errortext: string
}



const DatePicker: React.FC<IDatePickerProps> = (props) => {

    const { callBack, errortext } = props;

    const [day, setDay] = useState<string>('');
    const [month, setMonth] = useState<string>('');
    const [year, setYear] = useState<string>('');

    useEffect(() => {
        if (day && month && year) {
            callBack(`${year}-${month}-${day}`)
        };
    }, [day, month, year])

    const handleGetDay = (value: string) => {
        setDay(value);
    };

    const handleGetMonth = (value: string) => {
        setMonth(value);
    };

    const handleGetYear = (value: string) => {
        setYear(value);
    };

    return (
        <div className='date-picker '>
            <span>Дата</span>
            <div className='date-select-wrap'>
                <DateSelect
                    startValue={day}
                    name= {'день'}
                    data={daysArray}
                    callBack={handleGetDay} />
                <DateSelect
                    startValue={month}
                    name={'месяц'}
                    data={monthsArray}
                    callBack={handleGetMonth} />
                <DateSelect
                    startValue={year}
                    name={'год'} 
                    data={yearsArray}
                    callBack={handleGetYear} />
            </div>
            {errortext ? <span className='input-error'>{errortext}</span> : null}
        </div>
    );
};

export default DatePicker;