import use_case_erp from '~/assets/illustrations/use_case_erp.webp'
import use_case_crm from '~/assets/illustrations/use_case_crm.webp'
import use_case_analytics from '~/assets/illustrations/use_case_analytics.webp'
import use_case_strategy from '~/assets/illustrations/use_case_strategy.webp'

export default [
    {
        id: 'erp',
        title: "Un ERP sur-mesure est-il un choix judicieux pour votre entreprise ?",
        category: "ERP",
        picture: use_case_erp,
        caption: "use case 001",
		path: "/dossiers/erp-sur-mesure",
    },
    {
        id: 'crm',
        title: "Un CRM personnalisé vous permet de proposer le meilleur à vos clients.",
        category: "CRM",
        picture: use_case_crm,
        caption: "use case 002",
		path: "/dossiers/crm-sur-mesure",
		disabled: true,
    },
    {
        id: 'analytics',
        title: "Tracker le progrès avec des sondes pensées pour votre métier.",
        category: "ANALYTICS",
        picture: use_case_analytics,
        caption: "use case 003",
		path: "/dossiers/analytics",
		disabled: true,
    },
    {
        id: 'strategy',
        title: "Introduction au marché du projet informatique.",
        category: "STRATÉGIE",
        picture: use_case_strategy,
        caption: "use case 004",
		path: "/dossiers/strategy",
		disabled: true,
    },
]