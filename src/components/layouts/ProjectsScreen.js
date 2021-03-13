import React, {useState, useContext, useEffect} from 'react'
import styles from './ProjectsScreen.module.css'
import projects from '../../data/projects'
import {GlobalContext} from '../../contexts/contexts'
import Card from '../Card'

const ProjectsScreen = () => {

    const { globals, setActive } = useContext(GlobalContext)
    const [data, setData] = useState(projects[0])

    useEffect(() => {
        setData(projects.find(item => item.language === globals.language.identifier))
    }, [globals])

    useEffect(() => {
        setActive(data.sectionId)
    })

    return (
        !globals.loading.status && ( 
            <section className={styles.ProjectsScreen}>
                <h1 className={styles.Title}>{data?.title}</h1>
                
                <p className={styles.Intro}>
                    {data?.content.intro}
                </p>

                <div className={styles.Cards}>
                    {
                        data?.content?.body.map(item => (
                            <Card 
                                title={item.title} 
                                front={item.front} 
                                back={item.back} 
                                technologies={item.technologies}
                                image={`./thumb-${item.image}.png`}
                                imageLarge={`./large-${item.image}.png`}
                                link={item.live}
                                key={item.image} 
                            />
                        ))
                    }
                </div>
            </section>
        )
    )
}

export default ProjectsScreen