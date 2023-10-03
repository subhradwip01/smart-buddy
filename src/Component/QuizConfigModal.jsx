import { useState } from "react"
import { Button } from "../UI/Button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../UI/dialog"
import { Input } from "../UI/Input"
import { Label } from "../UI/Label"
import { LoadingQuestions } from "./LoadingQuestions"
import { Textarea } from "../UI/textarea"
import { DialogOverlay, DialogPortal } from "@radix-ui/react-dialog"

export function QuizConfig({type}) {
  const [isLoading,setIsLoading] = useState(false); 
  const onSubmit = () =>{
    setIsLoading(true);
    if(type==='MCQ '){
      // MCQ generate
    }else{
      // Open Ended
    }
    setTimeout(()=>{
      setIsLoading(false);
    },[3000])
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Take Exam</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {!isLoading ?<> <DialogHeader>
          <DialogTitle>Config Exam</DialogTitle>
          <DialogDescription>
            Choose Topics and Number of Question You Want
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-2">
          
          <div className="grid gap-1">
            <Label htmlFor="topic">
              Write Promp for your topic
            </Label>
            <Textarea
              id="topic"
              placeholder="Questions from CBSE Physics, medium level, class 11"
              type="text"
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect="off"
              className="resize-none"
              disabled={isLoading}
            />
          </div>
       
          <div className="grid gap-1">
            <Label htmlFor="number-of-questions">
              Choos Number Of Questions
            </Label>
            <Input
              id="number-of-questions"
              placeholder="eg. 5"
              type="number"
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect="off"
              disabled={isLoading}
              min={10}
              max={20}
            />
          </div>
          </div>
        <DialogFooter>
          <Button onClick={onSubmit}>Start</Button>
        </DialogFooter> </>: <LoadingQuestions/>}
      </DialogContent>
    </Dialog>
  )
}
