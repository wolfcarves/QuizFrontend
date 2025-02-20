import axios, { InternalAxiosRequestConfig } from "axios"

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api/v1",
})

const checkToken = (config: InternalAxiosRequestConfig) => {
    return config
}

axiosInstance.interceptors.request.use(checkToken)
