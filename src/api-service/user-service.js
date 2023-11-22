import api from "./config";

export const signin = (data) =>{
    return api.post("/user/signin",data);
}
export const signup = (data) =>{
    return api.post("/user/signup",data);
}

export const getUserInfo = () =>{
    return api.get("/user/getUserInfo");
}