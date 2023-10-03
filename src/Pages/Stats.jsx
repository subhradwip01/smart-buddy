import { buttonVariants } from "../UI/Button";
import { Link, useParams } from "react-router-dom";
import React from "react";
import {ResultsCard} from "../Component/statistics/ResultsCard"
import {AccuracyCard} from "../Component/statistics/AccuracyCard";
import {TimeTakenCard} from "../Component/statistics/TimeTakenCard";
import {QuestionsList} from "../Component/statistics/QuestionList";
import BaseLayout from "../Layout/BaseLayout";


const Statistics = () => {
//   const game = 
//   if (!game) {
//     return redirect("/");
//   }
const exam = {}
const {examId} = useParams();
  let accuracy = 0;

//   if (game.gameType === "mcq") {
//     let totalCorrect = game.questions.reduce((acc, question) => {
//       if (question.isCorrect) {
//         return acc + 1;
//       }
//       return acc;
//     }, 0);
//     accuracy = (totalCorrect / game.questions.length) * 100;
//   } else if (game.gameType === "open_ended") {
//     let totalPercentage = game.questions.reduce((acc, question) => {
//       return acc + (question.percentageCorrect ?? 0);
//     }, 0);
//     accuracy = totalPercentage / game.questions.length;
//   }
//   accuracy = Math.round(accuracy * 100) / 100;

  return (
    <BaseLayout>
      <div className="p-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Summary</h2>
          <div className="flex items-center space-x-2">
            <Link to="/history" className={buttonVariants()}>
              Back to All Exams
            </Link>
          </div>
        </div>

        <div className="grid gap-4 mt-4 md:grid-cols-7">
          <ResultsCard accuracy={accuracy} />
          <AccuracyCard accuracy={accuracy} />
          <TimeTakenCard
            timeEnded={new Date(exam.timeEnded ?? Date.now)}
            timeStarted={new Date(exam.timeStarted ?? Date.now)}
          />
        </div>
        {/* <QuestionsList questions={exam.questions} /> */}
      </div>
    </BaseLayout>
  );
};

export default Statistics;