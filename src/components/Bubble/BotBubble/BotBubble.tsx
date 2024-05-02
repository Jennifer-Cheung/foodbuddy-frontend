import React from 'react'
import styles from './BotBubble.module.scss'
import { dishesList } from "../../../types";
import { AiFillWarning as WarningIcon } from 'react-icons/ai'

interface BotBubbleProps {
    content?: string,
    dishesList?: dishesList
}

const BotBubble: React.FC<BotBubbleProps> = ({content, dishesList}) => {
    return (
        <div className={styles.bubbleWrapper}>
            <div className={styles.botBubble}>
                {dishesList
                    ? <div className={styles.list}>
                        {dishesList["goodDishes"].map(dish => (
                            <div className={styles.listItem}>
                                <span>{dish.name}</span>
                                <div className={styles.tags}>
                                    {dish.tags.map(tag => (
                                        <div className={styles.goodTag}>{tag}</div>
                                    ))}
                                </div>
                                <span className={styles.description}>
                                    Based on your profile of&nbsp;
                                    {dish.profileTags.map((profileTag, index) => (
                                        <span>
                                            <span className={styles.goodProfileTag}>
                                                {profileTag}
                                            </span>
                                            <span>
                                                {index !== (dish.profileTags.length - 1) ? ', ' : ''}
                                            </span>
                                        </span>
                                    ))}
                                </span>
                            </div>
                        ))}
                        {dishesList["badDishes"].map(dish => (
                            <div className={styles.listItem}>
                                <div className={styles.warningDishName}>
                                    <WarningIcon className={styles.warningIcon} />
                                    <span>{dish.name}</span>
                                </div>
                                <div className={styles.tags}>
                                    {dish.tags.map(tag => (
                                        <div className={styles.badTag}>{tag}</div>
                                    ))}
                                </div>
                                <span className={styles.description}>
                                    Based on your profile of&nbsp;
                                    {dish.profileTags.map((profileTag, index) => (
                                        <span>
                                            <span className={styles.badProfileTag}>
                                                {profileTag}
                                            </span>
                                            <span>
                                                {index !== (dish.profileTags.length - 1) ? ', ' : ''}
                                            </span>
                                        </span>
                                    ))}
                                </span>
                            </div>
                        ))}
                    </div>
                    : (content ? content : 'No message.')
                }
            </div>
        </div>
    )
}

export default BotBubble
