import { useState, useEffect } from "react";

export interface IValues {
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
    date?: string
}



const useForm = (validate: any, date: string) => {
    const [values, setValues] = useState<IValues>({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState<any>({
       
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        console.log(name)
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = () => {
        setErrors(validate(values, date));
    }

    return { handleChange, handleSubmit, values, errors };
};

export default useForm;