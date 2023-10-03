import React from 'react'
import { HistoryTable } from '../Component/HistoryTable'
import BaseLayout from '../Layout/BaseLayout'
const History = () => {
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
         
      ]
  return (
    <BaseLayout>
    <div className='flex flex-col justify-start p-5'>
        <h1 className='font-bold text-[40px] mb-5'>All Exams</h1>
        <HistoryTable history={exams}/>
    </div>
    </BaseLayout>
  )
}

export default History