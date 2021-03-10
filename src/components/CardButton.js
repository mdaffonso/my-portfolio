import React, { useState } from 'react'
import styles from './CardButton.module.css'

const CardButton = (props) => {

    const initialClass = props.variant 
        ? styles.ButtonMinus 
        : styles.ButtonPlus

    const [buttonClass, setButtonClass] = useState(initialClass)

    const clickHandler = () => {
        setButtonClass(current => `${current} ${styles.ButtonFlip}`)
        setTimeout(() => {
            setButtonClass(current => current.split(' ')[0])
        }, 300)
        props.onClick()
    }

    return (
        <button className={buttonClass} onClick={clickHandler}>{props.children}</button>
    )
}

export default CardButton