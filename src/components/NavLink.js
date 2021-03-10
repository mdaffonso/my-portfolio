import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavLink.module.css'

const NavLink = ({to, title, active, setActive, uid}) => {
    const style = () => {
        const activeStyle = active && styles.NavLinkActive
        return `${styles.NavLink} ${activeStyle}`
    }

    return (
        <Link to={to} className={style()} onClick={() => setActive(uid)}>{title}</Link>
    )
}

export default NavLink