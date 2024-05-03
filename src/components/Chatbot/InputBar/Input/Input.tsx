import React from 'react'
import styles from './Input.module.scss'
import TextareaAutosize from "react-textarea-autosize";
import { IoCameraOutline as CameraIcon } from "react-icons/io5";

interface InputProps {
    onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    inputValue: string,
    cameraButtonOnClick: (e: React.MouseEvent<SVGElement>) => void,
}

const Input: React.FC<InputProps> = ({ onInputChange, inputValue, cameraButtonOnClick }) => {
    return (
        <div className={styles.inputContainer}>
            {/* <textarea placeholder="Type here" value={value} onChange={(e) => onInput(e)} /> */}
            <TextareaAutosize minRows={1} maxRows={6} onChange={onInputChange} value={inputValue} />
            <CameraIcon className={styles.cameraIcon} onClick={cameraButtonOnClick} />
        </div>
    )
}

export default Input
