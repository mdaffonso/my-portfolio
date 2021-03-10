import React, { useState } from 'react'
import styles from './ImageContainer.module.css'
import Spinner from './Spinner'

const ImageContainer = ({src, alt}) => {
    const [loading, setLoading] = useState(true)
    const [display, setDisplay] = useState('none')

    const handleLoad = () => {
        setLoading(false)
        setDisplay('block')
    }

    return (
        <div className={styles.ImageContainer}>
            {loading && <Spinner />}
            <img src={src} className={styles.ImageLarge} style={{display: display}} alt={alt} onClick={e => e.stopPropagation()} onLoad={handleLoad} />
        </div>
    )
}

export default ImageContainer