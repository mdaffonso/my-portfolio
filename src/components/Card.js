import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../contexts/contexts'
import styles from './Card.module.css'
import CardButton from './CardButton'

const Card = (props) => {

    const {setModal, setModalContent} = useContext(GlobalContext)

    const [state, setState] = useState(false)
    const [cardClass, setCardClass] = useState(styles.Card)

    const flip = () => {
        setState(state => !state)
    }

    const toggleModal = () => {
        setModal(current => !current)
        setModalContent(modalContent)
    }

    const modalContent = () => (
        <div className={styles.CardImageContainer}>
            <img src={props.imageLarge} className={styles.CardImageLarge} alt={props.back} onClick={e => e.stopPropagation()} />
        </div>
    )

    useEffect(() => {
        if(state === true) setCardClass(`${styles.Card} ${styles.CardFlip}`)
        else setCardClass(styles.Card)
    }, [state])

    return (
        <div className={styles.CardContainer}>
            <div className={cardClass}>
                <div className={styles.CardFront}>
                    <h2 className={styles.CardTitle}>{props.title}</h2>
                    { props.image && <button style={{backgroundImage: `url(${props.image})`}} className={styles.CardImage} onClick={toggleModal} /> }
                    { props.link && <a href={props.link} target='_blank' rel='noreferrer'>{props.link.replaceAll(/https:|\/|www./g, '')}</a>}
                    <p>{ props.front }</p>

                    <CardButton onClick={flip}>+</CardButton>
                </div>

                <div className={styles.CardBackBackground} />
                <div className={styles.CardBack}>
                    <p>{props.back}</p>
                    <p className={styles.CardBackTechnologies}>{props.technologies.title} {props.technologies.list.join(', ')}</p>

                    <CardButton onClick={flip} variant>-</CardButton>
                </div>
            </div>
        </div>
    )
}

Card.defaultProps = {
    title: "Título do Card",
    front: "Texto que deve aparecer na face frontal do card.",
    back: "Texto que deve aparecer no verso do card.",
    technologies: {
        title: "Título",
        list: []
    },
    image: null,
    link: null,
}

export default Card