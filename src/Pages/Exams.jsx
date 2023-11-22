import React, { useEffect, useState } from 'react'
import BaseLayout from '../Layout/BaseLayout'
import { LoadingQuestions } from '../Component/LoadingQuestions'
import loading from "../assets/loading.gif"
import { HistoryTable } from '../Component/HistoryTable'
import { QuizCard } from '../Component/QuizCard'
import { Link } from 'react-router-dom'
import { buttonVariants } from '../UI/Button'
import { getAllExams } from '../api-service/exam-service'
import toast from 'react-hot-toast'

const Exams = () => {
  const [exams,setExams] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  useEffect(()=>{
    const getAllExamData = async () =>{
      setIsLoading(true);
      try{
        const res = await getAllExams();
        setExams(res.data.exams);
      }catch(e){
        toast.error('Unable to fetch your exam history');
      }finally{
        setIsLoading(false);
      }
    }
    getAllExamData()
  },[])
 
  return (
    <BaseLayout>
     {isLoading && exams.length==0 ? 
      <div className='w-full h-full justify-center items-center'>Loading...</div>
     : 
    <div className='pl-5 pr-8'>
        {/* New Exam Card and Modal For new Exam*/}
        <h1 className='font-bold text-[40px] text-center mb-5 mt-5'>Take Exam Of Your Choice</h1>
        <div className='flex justfy-between items-center gap-3'>
            <QuizCard type='MCQ'/>
            <QuizCard type='OPEN_ENDED'/>
        </div>
        {/* History : Recnently */}
        <div className='mt-5'>
        <div className='flex justify-between'>
        <h4 className='font-bold text-[25px] mb-5'>Recenty Taken Exams</h4>
        <Link to="/history" className={buttonVariants()}>View All</Link>
        </div>
            <HistoryTable history={exams.slice(0,10)}/>
        </div>
        </div> 
}
    </BaseLayout>
  )
}

export default Exams