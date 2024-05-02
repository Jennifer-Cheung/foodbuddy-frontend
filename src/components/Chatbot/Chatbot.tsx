import React, { useCallback, useState } from 'react'
import styles from './Chatbot.module.scss'
import Chat from "./Chat/Chat";
import InputBar from "./InputBar/InputBar";
import { dishesList, textMessage } from "../../types";

const Chatbot = () => {
    const [inputValue, setInputValue] = useState<string>('')
    const [messages, setMessages] = useState<(textMessage | dishesList)[]>([])

    const onInputChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value)
    }, [])

    const onClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
        const newMessage: textMessage = {
            source: 'user',
            content: inputValue
        }

        // TODO: Fetch data from API endpoint to get new bot message
        setMessages([newMessage, ...messages])
        setInputValue('')
    }, [inputValue, messages])

    return (
        <div className={styles.chatbotWrapper}>
            <Chat messages={messages} />
            <InputBar inputValue={inputValue} onInputChange={onInputChange} onClick={onClick} />
        </div>
    )
}

export default Chatbot
