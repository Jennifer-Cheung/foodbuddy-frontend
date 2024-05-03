import React from 'react'
import styles from './InputBar.module.scss'
import Input from "./Input/Input";
import SendButton from "./SendButton/SendButton";

interface InputBarProps {
    onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    inputValue: string,
    onClick: (e: React.MouseEvent<HTMLElement>) => void,
    cameraButtonOnClick: (e: React.MouseEvent<SVGElement>) => void,
}

const InputBar: React.FC<InputBarProps> = ({ onInputChange, inputValue, onClick, cameraButtonOnClick }) => {
    return (
        <div className={styles.inputBar}>
            <Input onInputChange={onInputChange} inputValue={inputValue} cameraButtonOnClick={cameraButtonOnClick} />
            <SendButton onClick={onClick} />
        </div>
    )
}

export default InputBar
