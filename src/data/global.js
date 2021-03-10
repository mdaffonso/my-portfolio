import languages from './languages'
import gr from './globalReference'

const global = [
    {
        loading: {
            status: false,
            text: 'Loading content...',
        },
        language: {
            menuTitle: 'language',
            identifier: 'en',
            descriptor: 'english',
        },
        languages: languages,
        sections: [
            { uid: gr.uid.about, to: gr.route.about, title: 'about me' },
            { uid: gr.uid.projects, to: gr.route.projects, title: 'projects' },
            { uid: gr.uid.contact, to: gr.route.contact, title: 'contact' },
        ],
    },

    {
        loading: {
            status: false,
            text: 'Carregando conteúdo...',
        },
        language: {
            menuTitle: 'idioma',
            identifier: 'pt',
            descriptor: 'português',
        },
        languages: languages,
        sections: [
            { uid: gr.uid.about, to: gr.route.about, title: 'sobre mim' },
            { uid: gr.uid.projects, to: gr.route.projects, title: 'projetos' },
            { uid: gr.uid.contact, to: gr.route.contact, title: 'contato' },
        ],
    },
]

export default global