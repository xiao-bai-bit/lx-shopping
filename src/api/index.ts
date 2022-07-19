import axios, { AxiosInstance } from 'axios'
import { config } from 'process'

const http:AxiosInstance = axios.create({
    timeout:3000
})

http.interceptors.request.use(config=>{
    return config
})

http.interceptors.response.use(response=>{
    return response.data
})
export default http