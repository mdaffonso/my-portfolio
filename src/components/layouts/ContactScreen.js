import React, {useState, useContext, useEffect} from 'react'
import styles from './ContactScreen.module.css'
import contact from '../../data/contact'
import {GlobalContext} from '../../contexts/contexts'
import parse from 'html-react-parser'
import { Img } from 'react-image'
import SmallSpinner from '../SmallSpinner'
import { Helmet } from 'react-helmet-async'

const ContactScreen = () => {

    const { globals, setActive } = useContext(GlobalContext)
    const [data, setData] = useState(contact[0])

    useEffect(() => {
        setData(contact.find(item => item.language === globals.language.identifier))
    }, [globals])

    useEffect(() => {
        setActive(data.sectionId)
    })

    return (
        !globals.loading.status && ( 
            <>
                <Helmet>
                    <title>
                        {data?.title} | Matheus Affonso
                    </title>
                </Helmet>
                <section className={styles.ContactScreen}>
                    <h1 className={styles.Title}>{data?.title}</h1>
                    
                    <p className={styles.Intro}>
                        {parse(data.content.intro.text
                            .replace(/\[email]/, `<a href="mailto:${data.content.intro.email}">${data.content.intro.email}</a>`)
                            .replace(/\[phone]/, `<span class=${styles.Phone}>${data.content.intro.phone}</span>`)
                        )}
                    </p>

                    <div className={styles.SocialMedia}>
                        {data.content.links.map(entry => (
                            <div key={entry.icon} className={styles.LinkContainer}>
                                <a href={entry.href} target='_blank' rel='noreferrer' aria-label={entry.name}>
                                    <Img src={`./cont-${entry.icon}.png`} alt={entry.name} loader={<SmallSpinner />} />
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </>
        )
    )
}

export default ContactScreen