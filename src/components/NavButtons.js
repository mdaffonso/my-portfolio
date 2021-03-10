import React, {useCallback, useEffect, useState} from 'react'
import { debounce } from '../utils/utils'
import styles from './NavButtons.module.css'

const NavButtons = (props) => {

    const [containerClass, setContainerClass] = useState(styles.NavButtons)
    const [prevScrollY, setPrevScrollY] = useState(window.scrollY)

    const hideAndShowOnScroll = useCallback(() => {
        if(window.scrollY > prevScrollY) { 
            setContainerClass(`${styles.NavButtons} ${styles.NavButtonsOut}`)
        } else {
            setContainerClass(`${styles.NavButtons} ${styles.NavButtonsIn}`)
        }
        setPrevScrollY(window.scrollY)
    }, [prevScrollY])

    const debouncedHideAndShow = debounce(hideAndShowOnScroll, 25)

    useEffect(() => {
        window.addEventListener('scroll', debouncedHideAndShow)
        return () => window.removeEventListener('scroll', debouncedHideAndShow)
    }, [debouncedHideAndShow])

    return <div className={containerClass} {...props}>{props.children}</div>
}

export default NavButtons