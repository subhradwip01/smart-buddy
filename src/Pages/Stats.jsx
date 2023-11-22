import { buttonVariants } from "../UI/Button";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {ResultsCard} from "../Component/statistics/ResultsCard"
import {AccuracyCard} from "../Component/statistics/AccuracyCard";
import {TimeTakenCard} from "../Component/statistics/TimeTakenCard";
import {QuestionsList} from "../Component/statistics/QuestionList";
import BaseLayout from "../Layout/BaseLayout";
import { getStats } from "../api-service/exam-service";
import { ExamInfoCard } from "../Component/statistics/ExamInfoCard";


const Statistics = () => {
//   const game = 
//   if (!game) {
//     return redirect("/");
//   }
const [exam,setExam] = useState(null);
const [isLoading,setIsLoading] = useState(true);
const {examId} = useParams();
  let accuracy = 0;
  useEffect(()=>{
    const getExamStats = async ()=>{
      const res = await getStats(examId);
      console.log(res.data.exam);
      setExam(res.data.exam)
    }
    getExamStats()
  },[])


  
  return (
    <BaseLayout>
      {!exam && isLoading ? 
      <div className='w-full h-full justify-center items-center'>Loading...</div>
      : 
      <div className="p-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Summary</h2>
          <div className="flex items-center space-x-2">
            <Link to="/history" className={buttonVariants()}>
              Back to All Exams
            </Link>
          </div>
        </div>

        <div className="grid gap-4 mt-4 md:grid-cols-12">
          <ExamInfoCard examType={exam.examType} examStarted={exam.examStarted} examEnd={exam.examEnd} noOfQuestions={exam.noOfQuestions} totalMarks={exam.totalMarks} earnedMarks={exam.examType=='MCQ' ? exam.earnedMarks['$numberDecimal'] : exam.accuracy} topic={exam.topic}/>
          <ResultsCard accuracy={exam.accuracy} />
          <AccuracyCard accuracy={exam.accuracy} />
          <TimeTakenCard
            timeEnded={new Date(exam.examEnd ?? Date.now)}
            timeStarted={new Date(exam.examStarted ?? Date.now)}
          />
        </div>
        <QuestionsList questions={exam.questions} />
      </div>
      }
    </BaseLayout>
  );
};

export default Statistics;