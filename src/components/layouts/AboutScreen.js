import React, {useState, useContext, useEffect} from 'react'
import styles from './AboutScreen.module.css'
import about from '../../data/about'
import {GlobalContext} from '../../contexts/contexts'
import { Helmet } from 'react-helmet-async'

const AboutScreen = () => {

    const { globals, setActive } = useContext(GlobalContext)
    const [data, setData] = useState(about[0])
    
    useEffect(() => {
        setData(about.find(item => item.language === globals.language.identifier))
    }, [globals])

    useEffect(() => {
        setActive(data.sectionId)
    })

    return (
        !globals.loading.status && ( 
            <>
                <Helmet>
                    <title>
                        Matheus Affonso | Web Dev
                    </title>
                </Helmet>

                <section className={styles.AboutScreen}>
                    <header className={styles.Titles}>
                        <h1 className={styles.Title}>{data?.title}</h1>
                        <h3 className={styles.Subtitle}>{data?.subtitle}</h3>
                    </header>
                    
                    <p className={styles.Intro}>
                        {data?.content.intro}
                    </p>

                    <p className={styles.ExtraContent}>
                        {data?.content.extra}
                    </p>
                </section>
            </>
        )
    )
}

export default AboutScreen