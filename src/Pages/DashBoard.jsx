import React, { useEffect, useState, useMemo } from "react";
import BaseLayout from "../Layout/BaseLayout";
import { getUserInfo } from "../api-service/user-service";
import { ExamInfoCard } from "../Component/DashBoard/ExamInfoCard";
import { UserInfoCard } from "../Component/DashBoard/UserDetails";
import {ChartData} from "../Component/DashBoard/Chart";
import toast from "react-hot-toast";
const DashBoard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getUserDetails = async () => {
      setIsLoading(true);
      try {
        const res = await getUserInfo();
        console.log(res);
        setUserInfo(res.data);
      } catch (error) {
        toast.error("Oops! Unabel to get your information")
      }finally{
        setIsLoading(false);
      }
      
    };
    getUserDetails();
  }, []);
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  const OVER_ALL_DATA = useMemo(()=>{
    if(!userInfo) return
    let totalMCQMarks = 0;
    let totalScoredMCQMarks = 0;
    let totalMCQExam = 0;

    let totalOpenEndedMarks = 0;
    let totalScoredOpenEndedMarks = 0;
    let totalOpenEndedExam =  0;
    for(let i=0;i<userInfo.exams.length;i++){
      let exam = userInfo.exams[i];
      if(exam.examType=="MCQ"){
        totalMCQExam++;
        totalMCQMarks+=exam.totalMarks;
        totalScoredMCQMarks+=exam.earnedMarks['$numberDecimal']
      }else{ // for open ended;
        totalOpenEndedExam++;
        totalOpenEndedMarks+=exam.totalMarks;
        totalScoredOpenEndedMarks+=exam.earnedMarks['$numberDecimal']
      }
    }
    const gradeData = [
      {type:"MCQ",overAllGrade:Math.round((totalScoredMCQMarks/totalMCQMarks)*100)},
      {type:"Open Ended",overAllGrade:Math.ceil((totalScoredOpenEndedMarks/totalOpenEndedMarks)*100)}
    ]
    const examQueantityData = [
      {type:"Total MCQ Exam",totalExam:totalMCQExam},
      {type:"Total Open Ended",totalExam:totalOpenEndedExam}
    ]
    
    const gradeChart = {
      type: "doughnut",
        data: {
          labels: gradeData.map((row) => row.type),
          datasets: [
            {
              label: "Overall Grade",
              data: gradeData.map((row) => row.overAllGrade),
            },
          ],
        },
        options: {
          plugins: {
              title: {
                  display: true,
                  text: 'Over All Grade Ditributions',
                  padding: {
                      top: 10,
                      bottom: 30
                  }
              }
          }
      }
    }
    const examCountChart = {
      type: "bar",
        data: {
          labels: examQueantityData.map((row) => row.type),
          datasets: [
            {
              label: "Total Exams",
              data: examQueantityData.map((row) => row.totalExam),
            },
          ],
        },
        options: {
          plugins: {
              title: {
                  display: true,
                  text: 'Total Given Exam',
                  padding: {
                      top: 10,
                      bottom: 30
                  }
              }
          }
      }
    }
    let finalData = [];
    finalData.push(gradeChart);
    finalData.push(examCountChart);
    return finalData;
  },[userInfo])
  const MCQ_DATE = useMemo(()=>{

  },[userInfo])
  console.log(OVER_ALL_DATA)
  return (
    <BaseLayout>
      {isLoading && !userInfo ? (
        <div className="w-full h-full justify-center items-center">
          Loading...
        </div>
      ) : !userInfo ? (
        <div className="w-full h-full justify-center items-center">
          Unable to get your information pleease try again
        </div>
      ) : (
        <React.Fragment>
          <h1 className="text-[25px] font-bold text-center my-5">
            Wellcome to Dashboard
          </h1>
          <div className="grid gap-4 mt-4 md:grid-cols-12">
            <UserInfoCard name={userInfo.name} email={userInfo.email}/>
            <ExamInfoCard
              earnedMarks={userInfo.earnedMarks}
              totalExams={userInfo.exams.length}
              percentageMarks={userInfo.percentageMarks}
              totalMarks={userInfo.totalMarks}
            />
          </div>
          <div className="grid gap-4 mt-4 md:grid-cols-12">
          <div className="md:col-span-6 mx-auto">
          <ChartData data={OVER_ALL_DATA[0]} id="exam-grade"/>
          </div>
          <div className="md:col-span-6">
          <ChartData data={OVER_ALL_DATA[1]} id="exam-total"/>
          </div>
          </div>
        </React.Fragment>
      )}
    </BaseLayout>
  );
};

export default DashBoard;
