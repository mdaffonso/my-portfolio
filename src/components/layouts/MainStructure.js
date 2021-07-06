import React from 'react'

import Nav from '../Nav'
import Modal from '../Modal'
import Meta from '../Meta'

import styles from './MainStructure.module.css'

const MainStructure = ({children}) => {
    return (
        <>
            <Meta />
            <div className={styles.MainStructure}>
                <Nav />
                <main id='main'>
                    {children}
                </main>
                <Modal />
            </div>
        </>
    )
}

export default MainStructure