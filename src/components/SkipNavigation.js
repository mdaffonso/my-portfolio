import React, { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from '../contexts/contexts'
import styles from './SkipNavigation.module.css'

const SkipNavigation = () => {
    const global = useContext(GlobalContext)
    const button = useRef()
    const [buttonStyle, setButtonStyle] = useState(styles.SkipNavigation)

    const focusSkip = () => {
        setButtonStyle(`${styles.SkipNavigation} ${styles.In}`)
    }

    const blurSkip = () => {
        setButtonStyle(styles.SkipNavigation)
    }

    useEffect(() => {
        button.current.addEventListener('focus', focusSkip)
        button.current.addEventListener('blur', blurSkip)
    }, [])

    return (
        <a tabIndex={1} ref={button} href='#main' className={buttonStyle}>{global.globals.language.skip}</a>
    )
}

export default SkipNavigation