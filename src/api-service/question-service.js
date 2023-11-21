import api from "./config";

export const checkQuestion = (data) =>{
    return api.post("/question/checkAnswer",data);
}