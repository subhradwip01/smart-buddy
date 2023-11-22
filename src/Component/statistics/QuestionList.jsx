import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../UI/table";



const QuestionsList = ({ questions }) => {
  return (
    <React.Fragment>
    <Table className="mt-4">
      <TableCaption>End of list.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[10px]">No.</TableHead>
          <TableHead>Question & Correct Answer</TableHead>
          <TableHead>Your Answer</TableHead>

          {questions[0]?.questionType === "open_ended" && (
            <TableHead className="w-[10px] text-right">Accuracy</TableHead>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        <>
          {questions?.map(
            (
              { answer, question, userAnswer, percentageCorrect, isCorrect },
              index
            ) => {
              return (
                <TableRow key={index}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>
                    {question} <br />
                    <br />
                    <span className="font-semibold">{answer}</span>
                  </TableCell>
                  {questions[0].questionType === "open_ended" ? (
                    <TableCell className={`font-semibold`}>
                      {userAnswer}
                    </TableCell>
                  ) : (
                    <TableCell
                      className={`${
                        isCorrect ? "text-green-600" : "text-red-600"
                      } font-semibold`}
                    >
                      {userAnswer}
                    </TableCell>
                  )}

                  {percentageCorrect && (
                    <TableCell className="text-right">
                      {percentageCorrect['$numberDecimal}']}
                    </TableCell>
                  )}
                </TableRow>
              );
            }
          )}
        </>
      </TableBody>
    </Table>
    </React.Fragment>
  );
};

export {QuestionsList};