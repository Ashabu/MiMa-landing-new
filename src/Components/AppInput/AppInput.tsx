import React, {  SyntheticEvent } from 'react';
import './AppInput.scss'

type InputEvent = React.ChangeEvent<HTMLInputElement>;

interface IInputProps {
    value: string
    labelname: string
    name: string,
    inputerror: string,
    onChange: (e: InputEvent )=> void,
    onInput?: (e: InputEvent )=> void,
}






const AppInput: React.FC<IInputProps> = (props) => {
    const {name, labelname, value, onChange, inputerror} = props;

    
    return (
        <div className='input-wrap'>
            <input className='app-input' {...props}/>
            <span>{labelname}</span>
            {inputerror && <span className='input-error'>{inputerror}</span>}
        </div>
    );
};

export default AppInput;