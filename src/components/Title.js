import React from 'react'
import styles from './Title.module.css'

const Title = ({children}) => {
    return (
        <h1 className={styles.Title}>{children}</h1>
    )
}

export default Title