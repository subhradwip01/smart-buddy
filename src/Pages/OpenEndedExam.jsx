import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { OpenEnded } from '../Component/Exams/OpenEnded';
import { getOpenEnded } from '../api-service/exam-service';
import toast from 'react-hot-toast';

const OpenEndedExam = () => {
  const {examId} = useParams();
  const navigation = useNavigate();
  const [exam,setExam] = useState(null);

  const [isLoading,setIsLoading] = useState(false);
  useEffect(()=>{
    const getExamDetails = async () =>{
      setIsLoading(true);
      try{
        const res = await getOpenEnded(examId);
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
  return (
    <OpenEnded exam={exam}/>
    // <></>
  )
}

export default OpenEndedExam