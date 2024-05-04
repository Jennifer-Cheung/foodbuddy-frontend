import styles from './App.module.scss';
import Header from "./components/Header/Header";
import Chatbot from "./components/Chatbot/Chatbot";
import { useCallback, useState } from "react";
import Camera from "./components/Camera/Camera";
import React from 'react'
import { dishesList, textMessage } from "./types";

function App() {
    const [showCamera, setShowCamera] = useState<boolean>(false)
    const [messages, setMessages] = useState<(textMessage | dishesList)[]>([])
    const [inputValue, setInputValue] = useState<string>('')
    const [image, setImage] = useState<string>('')

    const cameraButtonOnClick = useCallback((e: React.MouseEvent<SVGElement>) => {
        setShowCamera(true)
    }, [])

    const cancelCamera = useCallback(async (hasPhoto: boolean = false) => {
        setShowCamera(false)
        if (hasPhoto) {
            const newMessage: textMessage = {
                source: 'user',
                content: 'Photo is taken.'
            }

            const data = new FormData()
            data.append('base64', image.substring(23))
            const response = await fetch('http://localhost:5000/api/recommend?prompt="What can I eat from this menu?"', {
                body: data,
                method: 'POST',
            })
            const botResponse = await response.json()
            const botMessage: dishesList = JSON.parse(botResponse.substring(8, botResponse.length-3))
            setMessages([botMessage, newMessage, ...messages])
        }
    }, [messages, image])

    const onSendClick = useCallback(async () => {
        const newMessage: textMessage = {
            source: 'user',
            content: inputValue
        }

        setMessages([newMessage, ...messages])

        const response = await fetch(`http://localhost:5000/api/respond?prompt=${inputValue}`)
        const botResponse = await response.json()
        const botMessage: textMessage = {
            source: 'bot',
            content: botResponse
        }

        setMessages([botMessage, newMessage, ...messages])

        setInputValue('')
    }, [inputValue, messages])

    const onInputChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value)
    }, [])

    return (
        <div className={styles.layoutContainer}>
            <Header />
            <Chatbot
                cameraButtonOnClick={cameraButtonOnClick}
                onInputChange={onInputChange}
                inputValue={inputValue}
                messages={messages}
                onSendClick={onSendClick} />
            {showCamera ? <Camera cancelOnClick={cancelCamera} image={image} setImage={setImage} /> : null}
        </div>
    );
}

export default App;
