import axios from "axios";
import {globalConfig} from '../../declaration';


export interface ISignUpRequest {
    birth_date: string, //YYYY-MM-DD
    day: string,
    month: string,
    year: string,
    username: string,
    mima_name: string,
    email: string,
    password: string,
    confirm_password: string

}


export const SignUp = async (data: ISignUpRequest) => {
    return await axios.post(`${globalConfig.api_URL}/api/auth/sign_up/`, data);
}