import React from 'react'
import styles from './UserBubble.module.scss'

interface UserBubbleProps {
    content: string
}

const UserBubble: React.FC<UserBubbleProps> = ({ content }) => {
    return (
        <div className={styles.bubbleWrapper}>
            <div className={styles.userBubble}>
                {content}
            </div>
        </div>
    )
}

export default UserBubble
