import { Card } from '../../UI/Card'
import React from 'react'
import { UserMessage } from './UserMessage'
import { ExpertMessage } from './ExpertMessage'

export const Chat = ({ chats }) => {
    return (
        <Card className="w-full h-[80vh] overflow-y-auto scroll flex justify-center items-start">
            <div
                id="allChats"
                className="w-full transition-all duration-1000 bg-white"
            >
                {
                    chats.map(chat=>(
                        chat.sender=="USER" ?
                            <UserMessage message={chat.message}/>
                        :   <ExpertMessage message={chat.message}/>
                    ))
                }

            </div>
        </Card>
    )
}
