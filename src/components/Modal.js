import React, { useContext, useEffect, useState } from 'react'
import styles from './Modal.module.css'
import { GlobalContext } from '../contexts/contexts'

const Modal = () => {

    const { modalAnimate, setModal, modalContent } = useContext(GlobalContext)
    const [modalClass, setModalClass] = useState(styles.OffScreen)
    const [buttonClass, setButtonClass] = useState(styles.OffScreen)
    const [contentClass, setContentClass] = useState(styles.OffScreen)
    const [firstRender, setFirstRender] = useState(true)

    const toggleModal = () => {
        setModal()
    }

    useEffect(() => {
        if(firstRender) return;
        if(!modalAnimate) {
            setModalClass(`${styles.Modal} ${styles.ModalOut}`)
            setButtonClass(`${styles.ModalClose} ${styles.ModalCloseOut}`)
            setContentClass(`${styles.ModalContent} ${styles.ModalContentOut}`)
            return
        }
        
        setModalClass(`${styles.Modal} ${styles.ModalIn}`)
        setButtonClass(`${styles.ModalClose} ${styles.ModalCloseIn}`)
        setContentClass(`${styles.ModalContent} ${styles.ModalContentIn}`)
        // eslint-disable-next-line
    }, [modalAnimate])

    useEffect(() => {
        setFirstRender(false)
    }, [])

    return (
        <>
            <button className={buttonClass} onClick={toggleModal} />
            <div className={modalClass} />
            <div className={contentClass} onClick={toggleModal}>
                {modalContent}
            </div>
        </>
    )
}

export default Modal