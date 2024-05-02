import React from 'react'
import styles from './Chat.module.scss'
import UserBubble from "../../Bubble/UserBubble/UserBubble";
import BotBubble from "../../Bubble/BotBubble/BotBubble";
import { isTextMessage, dishesList, textMessage } from "../../../types";

interface ChatProps {
    messages: (textMessage | dishesList)[]
}

const Chat: React.FC<ChatProps> = ({ messages }) => {
    return (
        <div className={styles.chatWrapper}>
            <div className={styles.chat}>
                <div className={styles.messages}>
                    {messages.map(message => {
                        if (isTextMessage(message)) {
                            if (message.source === 'user') {
                                return <UserBubble content={message.content} />
                            } else {
                                return <BotBubble content={message.content} />
                            }
                        } else {
                            return <BotBubble dishesList={message} />
                        }
                    })}
                </div>
                <div className={styles.anchor}></div>
            </div>
        </div>
    )
}

export default Chat
