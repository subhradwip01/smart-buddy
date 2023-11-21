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
import { createExam } from "../api-service/exam-service"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export function QuizConfig({type}) {
  const [isLoading,setIsLoading] = useState(false); 
  const navigate = useNavigate();
  const [examConfig,setExamConfig] = useState({
    topic:"",
    noOfQuestions:1,
    type:type,
  })
  console.log(type);
  const onSubmit = async (e) =>{
    // e.preventDefault();
    setIsLoading(true);
    try{
    if(type==='MCQ'){
      // MCQ generate
      console.log(examConfig);
      const res = await createExam(examConfig);
      console.log(res);
      toast.success('Great! Exam is ready to start');
      navigate(`/exam/mcq/${res.data.exam}`)
    }else{
      // Open Ended
      console.log(examConfig);
      const res = await createExam(examConfig)
      console.log(res);
      toast.success('Great! Exam is ready to start');
      navigate(`/exam/openEnd/${res.data.exam}`)
    }
  }catch(e){
    console.log(e);
    toast.error('Oops! Unbale to Create the Exam. Please try Again')
  }finally{
    setIsLoading(false);
  }
    
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
              Choose A Topic
            </Label>
            <Input
              id="topic"
              placeholder="eg. Phycics Class 11"
              type="text"
              autoCapitalize="none"
              value={examConfig.topic}
              onChange={(e)=>setExamConfig(prev=>({...prev,[e.target.id]:e.target.value}))}
            />
          </div>
          
          {/* <div className="grid gap-1">
            <Label htmlFor="prompt">
              Write Promp for your topic
            </Label>
            <Textarea
              id="prompt"
              value={examConfig.prompt}
              placeholder="Questions from CBSE Physics, medium level, class 11"
              type="text"
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect="off"
              className="resize-none"
              disabled={isLoading}
              onChange={(e)=>setExamConfig(prev=>({...prev,[e.target.id]:e.target.value}))}
            />
          </div> */}
          <div className="grid gap-1">
            <Label htmlFor="number-of-questions">
              Choose Number Of Questions
            </Label>
            <Input
              id="noOfQuestions"
              placeholder="eg. 5"
              type="number"
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect="off"
              disabled={isLoading}
              min={10}
              max={20}
              value={examConfig.noOfQuestions}
              onChange={(e)=>setExamConfig(prev=>({...prev,[e.target.id]:e.target.value}))}
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
