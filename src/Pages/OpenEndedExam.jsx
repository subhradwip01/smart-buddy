import React from 'react'
import { useParams } from 'react-router-dom'
import { OpenEnded } from '../Component/Exams/OpenEnded';

const OpenEndedExam = () => {
  const {examId} = useParams();
  const exam = {} // api calls
  return (
    <OpenEnded exam={exam}/>
  )
}

export default OpenEndedExam