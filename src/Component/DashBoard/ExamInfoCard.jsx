import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "../../UI/Card";
import { Target, LucidePenBox,  } from "lucide-react";

const ExamInfoCard = ({ totalExams,totalMarks,earnedMarks,percentageMarks }) => {
  return (
    <Card className="md:col-span-7">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold">Exam Details</CardTitle>
        <LucidePenBox />
      </CardHeader>
      <CardContent className="flex  flex-col t">
        <div className="flex justify-between items-center">
           <p className="font-medium">Total Attempeted Exam</p>
           <p>{totalExams}</p>
        </div>
        <div className="flex justify-between items-center">
           <p className="font-medium">Total Marks</p>
           <p>{totalMarks}</p>
        </div>
        <div className="flex justify-between items-center">
           <p className="font-medium">Total Scored Marks</p>
           <p>{earnedMarks}</p>
        </div>
        <div className="flex justify-between items-center">
           <p className="font-medium">Overall Parcentage</p>
           <p>{percentageMarks}%</p>
        </div>
      </CardContent>
    </Card>
  );
};

export {ExamInfoCard};