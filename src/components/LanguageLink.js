import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './NavLink.module.css'
import { GlobalContext } from '../contexts/contexts'

const LanguageLink = (props) => {
    const { globals } = useContext(GlobalContext)

    const style = () => {
        const activeStyle = globals.language.identifier === props.identifier && styles.NavLinkActive
        return `${styles.NavLink} ${activeStyle}`
    }

    return (
        <Link className={style()} {...props}>{props.descriptor}</Link>
    )
}

export default LanguageLink