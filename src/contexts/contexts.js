import React, {createContext, useState} from 'react'
import { useData } from '../hooks/hooks'

export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {
    const [globals, setLanguage, mutateData, toggleLoading] = useData('en')

    const [ active, setActive ] = useState('about')
    const [ modalAnimate, setModal ] = useState(false)
    const [ modalContent, setModalContent ] = useState(null)

    return (
        <GlobalContext.Provider value={{globals, setLanguage, mutateData, toggleLoading, modalContent, setModalContent, modalAnimate, setModal, setActive, activeLink: active, links: globals.sections}}>
            {children}
        </GlobalContext.Provider>
    )
}