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

export interface IGamesResponse {
    base_url: string,
    cover_image: string,
    game_id: string,
    id: number,
    is_active: boolean,
    is_test: boolean,
    max_ante: number,
    min_ante: number,
    name: string
}



export const SignUp = async (data: ISignUpRequest) => {
    return await axios.post(`${globalConfig.api_URL}/api/auth/sign_up/`, data);
}

export const Games = async () => {
    return await axios.get<IGamesResponse[]>(`${globalConfig.api_URL}/api/games/games`);
}