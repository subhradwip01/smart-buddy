import axios from "axios";
const BASE_URL = "http://localhost:5000/api"

const api = axios.create({
    baseURL: BASE_URL
});

api.interceptors.response.use((response)=>{
    return response
},(error)=>{
    return Promise.reject(error);
})

export function setAuthHeader(token){
    api.defaults.headers.common['Authorization'] = `beareer ${token}`
}

export default api;