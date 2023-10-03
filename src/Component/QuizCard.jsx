import * as React from "react"

import { Button } from "../UI/Button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../UI/Card"
import { QuizConfig } from "./QuizConfigModal"

export function QuizCard({type}) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{type==='MCQ' ? "MCQ" : "Open Ended"}</CardTitle>
        <CardDescription>Get your AI generated Exam in Just One Click</CardDescription>
      </CardHeader>
      <CardContent>
        Take {type==='MCQ' ? "MCQ Quiz" : "Open Ended Exam"} based on the your subject choice. Our AI will help you you to generate questions set for you based on the difficulty level
      </CardContent>
      <CardFooter className="flex justify-between">
        <QuizConfig type={type}/>
      </CardFooter>
    </Card>
  )
}
