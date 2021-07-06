import React, {useState, useContext, useEffect} from 'react'
import styles from './NotFoundScreen.module.css'
import notFound from '../../data/notFound'
import {GlobalContext} from '../../contexts/contexts'
import { Helmet } from 'react-helmet-async'

const NotFoundScreen = () => {

    const { globals, setActive } = useContext(GlobalContext)
    const [data, setData] = useState(notFound[0])

    useEffect(() => {
        setData(notFound.find(item => item.language === globals.language.identifier))
    }, [globals])

    useEffect(() => {
        setActive('')
    })

    return (
        !globals.loading.status && ( 
            <>
                <Helmet>
                    <title>
                        {data?.title} | Matheus Affonso
                    </title>
                </Helmet>

                <section className={styles.NotFoundScreen}>
                    <h1 className={styles.Title}>{data?.title}</h1>

                    <p className={styles.Content}>
                        {data?.content}
                    </p>
                </section>
            </>
        )
    )
}

export default NotFoundScreen