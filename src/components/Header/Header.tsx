import React from 'react'
import styles from './Header.module.scss'
import { GiForkKnifeSpoon as MenuIcon } from 'react-icons/gi'
import { IoMdArrowBack as BackIcon } from 'react-icons/io'

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.header}>
                <MenuIcon className={styles.menuIcon} />
                <h1>Chatbot</h1>
                <BackIcon className={styles.backIcon} />
            </div>
        </div>
    )
}

export default Header
