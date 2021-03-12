import React, { useState, useContext, useEffect, useCallback } from 'react'
import LanguageButton from './LanguageButton'
import MenuActivation from './MenuActivation'
import LanguageLink from './LanguageLink'
import NavButtons from './NavButtons'
import NavLink from './NavLink'
import styles from './Nav.module.css'
import { GlobalContext } from '../contexts/contexts'

const Nav = () => {
    const global = useContext(GlobalContext)

    const [active, setActive] = useState(true)
    const [language, setLanguage] = useState(global.globals.language.identifier)
    const [navStyles, setNavStyles] = useState(`${styles.Nav} ${styles.Menu}`)
    const [languageStyles, setLanguageStyles] = useState(`${styles.Nav} ${styles.Language}`)

    const toggleMenu = useCallback(() => {
        const activeStyle = `${styles.Nav} ${styles.Menu} ${styles.Active}`
        const inactiveStyle = `${styles.Nav} ${styles.Menu} ${styles.Inactive}`
        setActive(current => !current)
        if(active) setNavStyles(activeStyle)
        else setNavStyles(inactiveStyle)
    }, [active, setNavStyles])

    const toggleLanguage = useCallback(() => {
        const activeStyle = `${styles.Nav} ${styles.Language} ${styles.Active}`
        const inactiveStyle = `${styles.Nav} ${styles.Language} ${styles.Inactive}`
        setActive(current => !current)
        if(active) setLanguageStyles(activeStyle)
        else setLanguageStyles(inactiveStyle)
    }, [active, setLanguageStyles])

    const closeMenuByEsc = useCallback((e) => {
        if(e.which === 27 && !active) {
            toggleMenu()
            toggleLanguage()
            setActive(true)
        }
    }, [active, toggleMenu, toggleLanguage])

    useEffect(() => {
        global.setLanguage(language)
        global.mutateData()
    }, [language, global])

    useEffect(() => {
        window.addEventListener('keyup', closeMenuByEsc)
        return () => window.removeEventListener('keyup', closeMenuByEsc)
    }, [closeMenuByEsc])

    return (
        <>
            {active && (
                <NavButtons>
                    <LanguageButton onClick={toggleLanguage} />
                    <MenuActivation onClick={toggleMenu} />
                </NavButtons>
            )}

            <nav className={languageStyles} data-language={global.globals.language.menuTitle} onClick={toggleLanguage}>
                {
                    global.globals.languages.map(language => (
                        <LanguageLink to='#' key={language.identifier} onClick={() => setLanguage(language.identifier)} identifier={language.identifier} descriptor={language.descriptor} />
                    ))
                }
            </nav>

            <nav className={navStyles} onClick={toggleMenu}>
                {
                    global.links.map(link => (
                        <NavLink to={link.to} title={link.title} icon={link.icon} key={link.uid} uid={link.uid} active={global.activeLink === link.uid} setActive={global.setActive} />
                    )
                )}
            </nav>
        </>
    )
}

export default Nav