import React from 'react'
import styles from './ShutterButton.module.scss'

interface ShutterButtonProps {
    classname: string,
    onClick: () => void,
}

const ShutterButton: React.FC<ShutterButtonProps> = ({ classname, onClick }) => {
    return (
        <div className={[classname, styles.button].join(' ')} onClick={onClick}></div>
    )
}

export default ShutterButton
