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

    const [navSwitch, setNavSwitch] = useState('')
    const [active, setActive] = useState(true)
    const [language, setLanguage] = useState(global.globals.language.identifier)
    const [navStyles, setNavStyles] = useState(`${styles.Nav} ${styles.Menu}`)

    const activateOverlay = useCallback(() => {
        const activeStyle = `${styles.Nav} ${styles.Menu} ${styles.Active}`
        const inactiveStyle = `${styles.Nav} ${styles.Menu} ${styles.Inactive}`
        setActive(current => !current)
        if(active) setNavStyles(activeStyle)
        else {
            setNavStyles(inactiveStyle)
            setNavSwitch('')
        }
    }, [active, setNavStyles])

    const toggleMenu = useCallback(() => {
        setNavSwitch('menu')
        activateOverlay()
    }, [setNavSwitch, activateOverlay])

    const toggleLanguage = useCallback(() => {
        setNavSwitch(global.globals.language.menuTitle)
        activateOverlay()
    }, [setNavSwitch, activateOverlay, global])

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
                    <LanguageButton onClick={toggleLanguage} tabIndex={active !== true ? -1 : 1} />
                    <MenuActivation onClick={toggleMenu} tabIndex={active !== true ? -1 : 2} />
                </NavButtons>
            )}

            <nav className={navStyles} data-title={navSwitch} onClick={toggleLanguage}>
                { navSwitch === global.globals.language.menuTitle &&
                    global.globals.languages.map(language => (
                        <LanguageLink to='#' key={language.identifier} onClick={() => setLanguage(language.identifier)} identifier={language.identifier} descriptor={language.descriptor} tabIndex={0} />
                    ))
                }

                { navSwitch === 'menu' &&
                    global.links.map(link => (
                        <NavLink to={link.to} title={link.title} icon={link.icon} key={link.uid} uid={link.uid} active={global.activeLink === link.uid} setActive={global.setActive} tabIndex={0} />
                    )
                )}
            </nav>
        </>
    )
}

export default Nav