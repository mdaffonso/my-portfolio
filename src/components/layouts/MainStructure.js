import React from 'react'

import Nav from '../Nav'
import Modal from '../Modal'

import styles from './MainStructure.module.css'

const MainStructure = ({children}) => {
    return (
        <div className={styles.MainStructure}>
            <Nav />
            <main>
                {children}
            </main>
            <Modal />
        </div>
    )
}

export default MainStructure