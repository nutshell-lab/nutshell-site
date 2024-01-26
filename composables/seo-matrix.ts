
import type { RouteRecordName } from 'vue-router'
import type { UseSeoMetaInput, Title } from '@unhead/schema'

type Matrix = { [n: RouteRecordName]: UseSeoMetaInput }
const matrix = <Matrix>{
    'index': {
        title: 'Nutshell - Agence digitale sur-mesure',
        description: 'Nutshell explore votre secteur pour créer des technologies adaptées : ERP, CRM, logiciels en Saas, nous pouvons les concevoir selon vos besoins.',
    },
    'projets': {
        title: 'Nutshell - Sélection de projets',
        description: 'Découvrez une brève compilation de nos derniers projets.'
    },
    'projects-actinuum': {
        title: 'Actinuum - Automatiser la formation professionnelle par Nutshell',
        description: 'Découvrez comment Nutshell a analysé les processus métier d\'un organisme de formation pour développer un logiciel type ERP sur-mesure',
    },
    'dossiers': {
        title: 'Dossiers et Articles Nutshell',
        description: 'Explorez les dossiers Nutshell pour découvrir des articles détaillés et des ressources sur le fonctionnement des projets informatiques.'
    },
    'dossiers-erp-sur-mesure': {
        title: 'Utiliser un ERP en entreprise - Nutshell',
        description: 'Votre ERP d’entreprise est-il efficace ? Vérifiez-le ! Découvrez les bénéfices et les possibilités de ce progiciel ainsi que le concept d’ERP sur-mesure.',
        ogImage: {
            url: 'https://nutshell-lab.com/seo/erp-sur-mesure.png',
            type: 'image/png',
            width: '375',
            height: '166',
        },
    },
    'blog-slug': {
        ogType: 'article',
    }
}

const default_meta = <UseSeoMetaInput & { title: Title }>{
    title: 'Nutshell - Agence digitale sur-mesure',
    description: 'Nutshell explore votre secteur pour créer des technologies adaptées : ERP, CRM, logiciels en Saas, nous pouvons les concevoir selon vos besoins.',
    ogImage: {
        url: 'https://nutshell-lab.com/logo_nutshell.png',
        type: 'image/png',
        width: '2205',
        height: '630',
        alt: 'Logo Nutshell'
    },
    ogType: 'website',
}

export const useSeoMatrix = () => {
    const route = useRoute()
    const value = computed<UseSeoMetaInput & { title: Title }>(() => ({
        ...default_meta,
        ...(route.name ? matrix[route.name] : {}),
    }))
    useHead(() => ({
        link: [
            {
            rel: 'canonical',
            href: 'https://nutshell-lab.com' + route.path,
            },
        ],
    }))
    useSeoMeta({
        title: () => value.value.title,
        ogTitle: () => value.value.title?.toString(),
        twitterTitle: () => value.value.title?.toString(),
        description: () => value.value.description,
        ogDescription: () => value.value.description,
        twitterDescription: () => value.value.description,
        ogImage: () => value.value.ogImage,
        twitterImage: () => value.value.ogImage,
        ogType: () => value.value.ogType,
        ogUrl: () => 'https://nutshell-lab.com' + route.path,
        ogLocale: () => 'fr_FR',
        robots: () => 'index, follow',
        author: () => 'Nutshell Lab'
    })
}