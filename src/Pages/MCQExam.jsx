import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import MCQ from '../Component/Exams/MCQ';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getMCQ } from '../api-service/exam-service';
const MCQExam = () => {
  const {examId} = useParams();
  const navigation = useNavigate();
  const [exam,setExam] = useState(null);

  const [isLoading,setIsLoading] = useState(false);
  useEffect(()=>{
    const getExamDetails = async () =>{
      setIsLoading(true);
      try{
        const res = await getMCQ(examId);
        console.log(res);
        setExam(res.data.exam);
      }catch(e){
        toast.error("Unbale to access the exam please retry!");
        navigation("/exam");
      }finally{
        setIsLoading(false);
      }
    }
    getExamDetails();
  },[])
  if(isLoading || !exam){
    return <div className='w-full h-full flex justify-center items-center text-black text-xxl font-bold'>Loading....</div>
  }
  console.log(exam);
  return (
    <MCQ exam={exam}/>
  )
}

export default MCQExam