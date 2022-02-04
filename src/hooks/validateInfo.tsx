import { IValues } from "./useForm";


const validateInfo = (values: IValues, date: string) => {
    let errors: any  = {
        
    };

    if(!values.username.trim()) {
        errors.username = 'Имя Пользователя (обязательно)';
    };

    if(date == '') {
        errors.date = 'Дата (обязательно)';
    }

    if(!values.email) {
        errors.email = 'Почтовый адрес (обязательно)';
    } else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email =' укажите действующий адрес электронной почты';
    }

    if(!values.password) {
        errors.password = 'Пароль (обязательно)';
    } else if ( !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(values.password)) {
        errors.password = 'Пароль должен быть длиной 8-30 символов и должен содержать как минимум одну цифру и одну букву';
    }


    if(!values.confirmPassword) {
        errors.confirmPassword = 'Подтверждение пароля (обязательно)';
    }
    else if (values.password != values.confirmPassword) {
        errors.confirmPassword = 'Пароли не совпадают';
    }
    
    return errors;



}

export default validateInfo;