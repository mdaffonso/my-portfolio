import React from 'react'
import styles from './MenuActivation.module.css'

const MenuActivation = (props) => {
    return (
        <button tabIndex={1} className={styles.MenuActivation} aria-label="menu" {...props}>
            •••
        </button>
    )
}

export default MenuActivation