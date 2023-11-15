import React, { useState } from 'react'
import BaseLayout from '../Layout/BaseLayout'
import { Button, buttonVariants } from '../UI/Button'
import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { Input } from '../UI/Input'
import { Chat } from '../Component/ChatWindow/Chat'
import { SendHorizontal } from 'lucide-react'
const ExpertChat = () => {
  const [command, setCommand] = useState("");
  const [isLoading,setIsLoading] = useState(false);
  const [chatData, setChatData] = useState([
    {
      message: "What is thermodynamics obased on the DOC?",
      sender: "USER"
    },
    {
      message:"Thermodynamics is the study of the relations between heat, work, temperature, and energy. The laws of thermodynamics describe how the energy in a system changes and whether the system can perform useful work on its surroundings.",
      sender:"Expert"
    }
  ])

  const onCommandType = (e) => {
    setCommand(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setChatData(prev=>[...prev,{
      message:command,
      sender:"USER"
    }])
    setCommand("");
    setTimeout(()=>{
      setIsLoading(false);
      setChatData(prev=>[...prev,{
        message:"This is the reply",
        sender:"Tutor"
      }])
    },[3000])
  }

  return (
    <BaseLayout>
      <div className='p-4 h-screen flex flex-col gap-2'>
        <div>
          <Link to="/talk-to-expert" className={buttonVariants({ variant: 'outline' })}><ChevronLeft size={20} />Back</Link>
        </div>
        {/* Chat Window */}
        <Chat chats={chatData}/>
        {/* Chat Input */}
        <form onSubmit={onSubmit} className='flex gap-1'>
        <Input readOnly={isLoading} name="command" onChange={onCommandType} value={command} placeHolder="Eg. Make the important notes from the Doc"/>
        <Button variant='outline' onClick={onSubmit}>
        <SendHorizontal />
        </Button>
        </form>
        
      </div>
    </BaseLayout>
  )
}

export default ExpertChat