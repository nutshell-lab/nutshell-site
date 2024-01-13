
import type { RouteRecordName } from 'vue-router'
import type { UseSeoMetaInput, Title } from '@unhead/schema'

type Matrix = { [n: RouteRecordName]: UseSeoMetaInput }
const matrix = <Matrix>{
    'index': {
        title: 'Nutshell - Agence digitale sur-mesure',
        description: 'Les équipes de Nutshell infiltrent votre domaine pour concevoir des technologies vraiment pertinentes. ERP, CRM, logiciel Saas, si vous en avez besoin, on peut sûrement vous le fabriquer.',
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
        title: 'Les dossiers Nutshell - Articles et Astuces pour vous aider à décider',
        description: 'Explorez les dossiers Nutshell pour découvrir des articles détaillés et des ressources sur le fonctionnement des projets informatiques.'
    },
    'dossiers-erp-sur-mesure': {
        title: 'Utiliser un ERP en entreprise - Nutshell',
        description: 'Votre ERP d’entreprise est-il efficace ? Vérifiez-le ! Découvrez les bénéfices et les possibilités de ce progiciel ainsi que le concept d’ERP sur-mesure.'
    },
    'blog': {
        title: 'Blog Nutshell - Dernières actualités et tendances dans le monde du projet informatique',
        description: 'Le blog Nutshell vous tient informé des dernières actualités, des tendances dans le domaine du projet informatique et offre des articles enrichissants.'
    },
    'blog-slug': {
        ogType: 'article',
    }
}

const default_meta = <UseSeoMetaInput & { title: Title }>{
    title: 'Nutshell - Agence digitale sur-mesure',
    description: 'Les équipes de Nutshell infiltrent votre domaine pour concevoir des technologies vraiment pertinentes. ERP, CRM, logiciel Saas, si vous en avez besoin, on peut sûrement vous le fabriquer.',
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
    useSeoMeta({
        title: () => value.value.title,
        ogTitle: () => value.value.ogTitle,
        twitterTitle: () => value.value.ogTitle,
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