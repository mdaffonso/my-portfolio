import React, {useContext} from 'react'
import styles from './LanguageButton.module.css'
import {GlobalContext} from '../contexts/contexts'

const LanguageButton = (props) => {
    const {globals} = useContext(GlobalContext)

    return (
        <button tabIndex={-1} className={styles.LanguageButton} aria-label={globals.language.descriptor} {...props}>
            {globals.language.identifier}
        </button>
    )
}

export default LanguageButton