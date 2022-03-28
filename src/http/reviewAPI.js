import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('section')
    return data
}

export const createCourses = async (course) => {
    const {data} = await $authHost.post('api/course', course)
    return data
}

export const fetchCourses = async () => {
    const {data} = await $host.get('api/course', )
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}
