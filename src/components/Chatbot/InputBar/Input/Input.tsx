import React, { useState } from 'react'
import styles from './Input.module.scss'
import { IoCameraOutline as CameraIcon } from 'react-icons/io5'
import TextareaAutosize from "react-textarea-autosize";

interface InputProps {
    onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    inputValue: string,
}

const Input: React.FC<InputProps> = ({ onInputChange, inputValue }) => {
    return (
        <div className={styles.inputContainer}>
            {/* <textarea placeholder="Type here" value={value} onChange={(e) => onInput(e)} /> */}
            <TextareaAutosize minRows={1} maxRows={6} onChange={onInputChange} value={inputValue} />
            <CameraIcon className={styles.cameraIcon} />
        </div>
    )
}

export default Input
