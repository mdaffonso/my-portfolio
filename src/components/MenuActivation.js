import React from 'react'
import styles from './MenuActivation.module.css'

const MenuActivation = (props) => {
    return (
        <button className={styles.MenuActivation} aria-label="menu" {...props}>
            •••
        </button>
    )
}

export default MenuActivation