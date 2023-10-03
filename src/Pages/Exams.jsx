import React from 'react'
import BaseLayout from '../Layout/BaseLayout'
import { LoadingQuestions } from '../Component/LoadingQuestions'
import loading from "../assets/loading.gif"
import { HistoryTable } from '../Component/HistoryTable'
import { QuizCard } from '../Component/QuizCard'
import { Link } from 'react-router-dom'
import { buttonVariants } from '../UI/Button'

const Exams = () => {
  const exams = [
    {
      id:1,
      topic: "Physics",
      type: "MCQ",
      marksEarned: 90,
      totalMarks:100
    },
    {
        id:2,
        topic: "Maths",
        type: "MCQ",
        marksEarned: 90,
        totalMarks:100,
      },
      {
        id:3,
        topic: "Chemistry",
        type: "MCQ",
        marksEarned: 90,
        totalMarks:100
      },
      {
        id:4,
        topic: "Maths",
        type: "MCQ",
        marksEarned: 90,
        totalMarks:100
      },
      {
        id:5,
        topic: "Physics",
        type: "MCQ",
        marksEarned: 90,
        totalMarks:100
      },
      {
        id:6,
        topic: "Physics",
        type: "MCQ",
        marksEarned: 90,
        totalMarks:100
      },
      {
        id:7,
        topic: "Physics",
        type: "MCQ",
        marksEarned: 90,
        totalMarks:100
      },
      {
        id:7,
        topic: "Physics",
        type: "MCQ",
        marksEarned: 90,
        totalMarks:100
      },
      {
        id:7,
        topic: "Physics",
        type: "MCQ",
        marksEarned: 90,
        totalMarks:100
      },
      {
        id:7,
        topic: "Physics",
        type: "MCQ",
        marksEarned: 90,
        totalMarks:100
      },
      {
        id:7,
        topic: "Physics",
        type: "MCQ",
        marksEarned: 90,
        totalMarks:100
      },
      {
        id:7,
        topic: "Physics",
        type: "MCQ",
        marksEarned: 90,
        totalMarks:100
      },
      {
        id:7,
        topic: "Physics",
        type: "MCQ",
        marksEarned: 90,
        totalMarks:100
      },
  ]
  
  return (
    <BaseLayout>
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
        
    </BaseLayout>
  )
}

export default Exams