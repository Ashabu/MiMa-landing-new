import { IValues } from "./useForm";


const validateInfo = (values: IValues, date: string) => {
    let errors: any  = {
        
    };

    if(!values.username.trim()) {
        errors.username = 'Please Enter Username';
    };

    if(date == '') {
        errors.date = 'Please Chose Date'
    }

    if(!values.email) {
        errors.email = 'Please Enter Email'
    } else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Invalid  Email'
    }

    if(!values.password) {
        errors.password = 'Please Enter Password'
    } else if ( !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(values.password)) {
        errors.password = 'Pasword Too Weak'
    }


    if(!values.confirmPassword) {
        errors.confirmPassword = 'Please Fill out the form'
    }
    else if (values.password != values.confirmPassword) {
        errors.confirmPassword = 'Password do not match'
    }
    
    
    return errors;



}

export default validateInfo;