import api from "./config";

export const createExam = (data) =>{
    return api.post("/exam",data);
}
export const getExam = (data) =>{
    return api.get("/exam",data);
}