import React from 'react'
import { useParams } from 'react-router-dom'
import MCQ from '../Component/Exams/MCQ';

const MCQExam = () => {
  const {examId} = useParams();
  const exam = {} // api calls
  return (
    <MCQ exam={exam}/>
  )
}

export default MCQExam