import React, {useState, useContext, useEffect} from 'react'
import { v4 as id } from 'uuid'
import styles from './ContactScreen.module.css'
import contact from '../../data/contact'
import {GlobalContext} from '../../contexts/contexts'
import parse from 'html-react-parser'

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
            <section className={styles.ContactScreen}>
                <h1 className={styles.Title}>{data?.title}</h1>
                
                <div className={styles.Intro}>
                    {parse(data.content.intro.text
                        .replace(/\[email]/, `<a href="mailto:${data.content.intro.email}">${data.content.intro.email}</a>`)
                        .replace(/\[phone]/, `<span class=${styles.Phone}>${data.content.intro.phone}</span>`)
                    )}
                </div>

                <div className={styles.SocialMedia}>
                    {data.content.links.map(entry => (
                        <div key={id()} className={styles.LinkContainer}>
                            <a href={entry.href} target='_blank' rel='noreferrer' aria-label={entry.name}>
                                <img src={`./cont-${entry.icon}.png`} alt={entry.name} />
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        )
    )
}

export default ContactScreen