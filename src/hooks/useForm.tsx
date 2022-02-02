import { useState, useEffect } from "react";

export interface IValues {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
}

const useForm = (validate: any) => {
    const [values, setValues] = useState<IValues>({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        console.log(name)
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = () => {
        setErrors(validate(values));
    }

    return { handleChange, handleSubmit, values, errors };
};

export default useForm;