import api from "./config";

export const createExam = (data) =>{
    return api.post("/exam",data);
}
export const getOpenEnded = (examId) =>{
    return api.get("/exam/getOpenEnded/"+examId);
}
export const getMCQ = (examId) =>{
    return api.get("/exam/getMCQ/"+examId);
}
export const endExam = (data) => {
    return api.post("/exam/endExam",data);
}

export const getAllExams = () =>{
    return api.get("/exam/getAllExams");
}
export const getStats = (examId) =>{
    return api.get("/exam/getStats/"+examId);
}