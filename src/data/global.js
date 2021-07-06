import languages from './languages'
import gr from './globalReference'

const global = [
    {
        loading: {
            status: false,
            text: 'Loading content...',
        },
        language: {
            skip: 'skip to content',
            menuTitle: 'language',
            closeButton: 'close menu',
            ...languages[0]
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
            skip: 'pular para o conteúdo',
            menuTitle: 'idioma',
            closeButton: 'fechar menu',
            ...languages[1]
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