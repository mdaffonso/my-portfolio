import React, {useState, useContext, useEffect} from 'react'
import styles from './AboutScreen.module.css'
import about from '../../data/about'
import {GlobalContext} from '../../contexts/contexts'

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
            <section className={styles.AboutScreen}>
                <div className={styles.Titles}>
                    <h1 className={styles.Title}>{data?.title}</h1>
                    <h3 className={styles.Subtitle}>{data?.subtitle}</h3>
                </div>
                
                <div className={styles.Intro}>
                    {data?.content.intro}
                </div>

                <div className={styles.ExtraContent}>
                    {data?.content.extra}
                </div>
            </section>
        )
    )
}

export default AboutScreen