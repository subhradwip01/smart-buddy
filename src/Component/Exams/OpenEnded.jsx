import React from "react";
import { cn, formatTimeDelta } from "../../libs/utils";
import {differenceInSeconds} from "date-fns";
import { BarChart,ChevronRight, Loader2, Timer } from "lucide-react";
import {Card, CardDescription, CardHeader, CardTitle} from "../../UI/Card"
import {Button, buttonVariants} from "../../UI/Button"
import { OpenEndedPercentage } from "./OpenEndedParcentage";
import { BankAnsInput } from "./BankAnsInput";
import { Toaster, toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import axios from "axios";

export const OpenEnded = ({ exam }) => {
    const [hasEnded, setHasEnded] = React.useState(false);
    const [questionIndex, setQuestionIndex] = React.useState(0);
    const [blankAnswer, setBlankAnswer] = React.useState("");
    const [averagePercentage, setAveragePercentage] = React.useState(0);
    const currentQuestion = React.useMemo(() => {
      return exam.questions[questionIndex];
    }, [questionIndex, exam.questions]);

    const { mutate: endGame } = useMutation({
      mutationFn: async () => {
        const payload = {
          examId: exam.id,
        };
        const response = await axios.post(`/api/endGame`, payload);
        return response.data;
      },
    });
    const [now, setNow] = React.useState(new Date());
    const { mutate: checkAnswer, isLoading: isChecking } = useMutation({
      mutationFn: async () => {
        let filledAnswer = blankAnswer;
        document.querySelectorAll("#user-blank-input").forEach((input) => {
          filledAnswer = filledAnswer.replace("_____", input.value);
          input.value = "";
        });
        const payload= {
          questionId: currentQuestion.id,
          userInput: filledAnswer,
        };
        const response = await axios.post(`/api/checkAnswer`, payload);
        return response.data;
      },
    });
    React.useEffect(() => {
      if (!hasEnded) {
        const interval = setInterval(() => {
          setNow(new Date());
        }, 1000);
        return () => clearInterval(interval);
      }
    }, [hasEnded]);
  
    const handleNext = React.useCallback(() => {
      checkAnswer(undefined, {
        onSuccess: ({ percentageSimilar }) => {
          toast.success(`Your answer is ${percentageSimilar}% similar to the correct answer`,);
          setAveragePercentage((prev) => {
            return (prev + percentageSimilar) / (questionIndex + 1);
          });
          if (questionIndex === exam.questions.length - 1) {
            endGame();
            setHasEnded(true);
            return;
          }
          setQuestionIndex((prev) => prev + 1);
        },
        onError: (error) => {
          console.error(error);
          toast.error("Something went wron");
        },
      });
    }, [checkAnswer, questionIndex, toast, endGame, exam.questions.length]);
    React.useEffect(() => {
      const handleKeyDown = (event) => {
        const key = event.key;
        if (key === "Enter") {
          handleNext();
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [handleNext]);
  
    if (hasEnded) {
      return (
        <div className="absolute flex flex-col justify-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <div className="px-4 py-2 mt-2 font-semibold text-white bg-green-500 rounded-md whitespace-nowrap">
            You Completed in{" "}
            {formatTimeDelta(differenceInSeconds(now, exam.timeStarted))}
          </div>
          <Link
            to={`/stats/${exam.id}`}
            className={cn(buttonVariants({ size: "lg" }), "mt-2")}
          >
            View Statistics
            <BarChart className="w-4 h-4 ml-2" />
          </Link>
        </div>
      );
    }
  
    return (
    <React.Fragment>
      <Toaster/>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 md:w-[80vw] max-w-4xl w-[90vw] top-1/2 left-1/2">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            {/* topic */}
            <p>
              <span className="text-slate-400">Topic</span> &nbsp;
              <span className="px-2 py-1 text-white rounded-lg bg-slate-800">
                {exam.topic}
              </span>
            </p>
            <div className="flex self-start mt-3 text-slate-400">
              <Timer className="mr-2" />
              {formatTimeDelta(differenceInSeconds(now, exam.timeStarted))}
            </div>
          </div>
          <OpenEndedPercentage percentage={averagePercentage} />
        </div>
        <Card className="w-full mt-4">
          <CardHeader className="flex flex-row items-center">
            <CardTitle className="mr-5 text-center divide-y divide-zinc-600/50">
              <div>{questionIndex + 1}</div>
              <div className="text-base text-slate-400">
                {exam.questions.length}
              </div>
            </CardTitle>
            <CardDescription className="flex-grow text-lg">
              {currentQuestion?.question}
            </CardDescription>
          </CardHeader>
        </Card>
        <div className="flex flex-col items-center justify-center w-full mt-4">
          <BankAnsInput
            setBlankAnswer={setBlankAnswer}
            answer={currentQuestion.answer}
          />
          <Button
            variant="outline"
            className="mt-4"
            disabled={isChecking || hasEnded}
            onClick={() => {
              handleNext();
            }}
          >
            {isChecking && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            Next <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
      </React.Fragment>
    );
  };
