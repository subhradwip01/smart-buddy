import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "../../UI/Card";
import { Target, LucidePenBox,  } from "lucide-react";

const ExamInfoCard = ({ examType,earnedMarks,totalMarks,noOfQuestions,topic,examStarted,examEnd }) => {
  earnedMarks = Math.round(earnedMarks * 100) / 100;
  const examDate = new Intl.DateTimeFormat('en-DE').format(new Date(examStarted));
  const examStartTime = new Date(examStarted).getHours()+":"+new Date(examStarted).getMinutes();
  const examEndTime = new Date(examEnd).getHours()+":"+new Date(examEnd).getMinutes();

  return (
    <Card className="md:col-span-7">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-2xl font-bold">Exam Details</CardTitle>
        <LucidePenBox />
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
           <p className="font-medium">Exam Type</p>
           <p>{examType=="OPEN_ENDED"?"Open Ended":"MCQ"}</p>
        </div>
        <div className="flex justify-between items-center">
           <p className="font-medium">Exam Date</p>
           <p>{examDate}</p>
        </div>
        <div className="flex justify-between items-center">
           <p className="font-medium">Started At</p>
           <p>{examStartTime}</p>
        </div>
       {examEnd && <div className="flex justify-between items-center">
           <p className="font-medium">Ended At</p>
           <p>{examEndTime}</p>
        </div>}
        <div className="flex justify-between items-center">
           <p className="font-medium">Topic</p>
           <p>{topic}</p>
        </div>
        <div className="flex justify-between items-center">
           <p className="font-medium">Number of Questions</p>
           <p>{noOfQuestions}</p>
        </div>
        <div className="flex justify-between items-center">
           <p className="font-medium">Total Marks</p>
           <p>{totalMarks}</p>
        </div>
        <div className="flex justify-between items-center">
           <p className="font-medium">Scored Marks</p>
           <p>{earnedMarks}</p>
        </div>

      </CardContent>
    </Card>
  );
};

export {ExamInfoCard};