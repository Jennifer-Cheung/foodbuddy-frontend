import React, { useCallback, useState } from 'react'
import styles from './Chatbot.module.scss'
import Chat from "./Chat/Chat";
import InputBar from "./InputBar/InputBar";
import { dishesList, textMessage } from "../../types";

interface ChatbotProps {
    cameraButtonOnClick: (e: React.MouseEvent<SVGElement>) => void,
    messages: (textMessage | dishesList)[],
    onSendClick: () => void,
    inputValue: string,
    onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
}

const Chatbot: React.FC<ChatbotProps> = ({ cameraButtonOnClick, messages, onSendClick, inputValue, onInputChange }) => {
    return (
        <div className={styles.chatbotWrapper}>
            <Chat messages={messages} />
            <InputBar inputValue={inputValue} onInputChange={onInputChange} onClick={onSendClick}
                      cameraButtonOnClick={cameraButtonOnClick} />
        </div>
    )
}

export default Chatbot
