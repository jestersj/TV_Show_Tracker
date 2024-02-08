import {$host} from "./index";
import jwt_decode from "jwt-decode";

const registration = async (email, password) => {
    const {data} = await $host.post('user/registration', {email, password})
    return {info: jwt_decode(data.token), token: data.token}
}

const login = async (email, password) => {
    const {data} = await $host.post('user/login', {email, password})
    return {info: jwt_decode(data.token), token: data.token}
}

export {
    registration,
    login
}