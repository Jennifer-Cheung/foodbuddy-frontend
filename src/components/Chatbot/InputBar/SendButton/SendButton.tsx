import React from 'react'
import { IoMdSend as SendIcon } from 'react-icons/io'
import styles from './SendButton.module.scss'

interface SendButtonProps {
    onClick: (e: React.MouseEvent<HTMLElement>) => void
}

const SendButton: React.FC<SendButtonProps> = ({ onClick }) => {
    return (
        <div className={styles.sendButton} onClick={onClick}>
            <SendIcon className={styles.sendIcon} />
        </div>
    )
}

export default SendButton
