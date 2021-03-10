import { useState, useCallback } from 'react'
import global from '../data/global'

export const useData = input => {
    const localLanguage = localStorage.getItem('language') ?? input

    const [dataset, setDataset] = useState(global.find(item => item.language.identifier === localLanguage))
    const [language, setLanguage] = useState(String(localLanguage))

    const toggleLoading = useCallback(() => {
        const loadingStatus = !dataset.loading.status
        setDataset({
            ...dataset, 
            loading: {
                ...dataset.loading, 
                status: loadingStatus
            }
        })
    }, [dataset])

    const setData = useCallback(() => {
        setDataset(global.find(item => item.language.identifier === language))
    }, [language])

    const setLocalLanguage = (i) => {
        setLanguage(i)
        localStorage.setItem('language', i)
    }

    return [dataset, setLocalLanguage, setData, toggleLoading]
}