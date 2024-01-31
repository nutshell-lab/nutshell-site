# Tracker le progrès avec des sondes pensées pour votre métier.

Tracker les humains pour mieux vendre est un aspect devenu fondamental de l'ingénierie logicielle. De plus en plus performants, les outils de tracking et d'analytics permettent en effet de tout savoir sur tout le monde sans payer personne. Dans cet article, nous explorerons les bénéfices de cette pratique éthiquement discutable et la manière dont nous proposons sa pratique chez Nutshell.

## Vous avez Google Analytics ?
Pour mettre en place un environnement d'observations des différents indicateurs mesurant la performance de votre activité, vous utilisez selon toute vraisemblance la solution-monopole de Google. Bien que son utilisation ait été rendue illégale en raison des nombreuses violations de la vie privée des utilisateurs par la CNIL et d'autres institutions européenne ; il demeure l'outil le plus utilisé actuellement sur le marché.

Et pourtant, d'autres raisons pourraient détourner un directeur marketing de l'utilisation de Google Analytics :

* Des développements/configurations sont nécessaires pour tracker réellement des indicateurs pertinents pour votre activité ?
* En réalité, seule une sous-partie des utilisateurs est trackés (ceux qui acceptent les cookies marketing et qui n'ont pas d'extension de navigateur bloquant le tracking). EN 2022, 42.7% des utilisateurs utilisent des bloqueurs.
* Pas de présence de certaines fonctionnalités pourtant critiques (entonnoir de conversion, diagramme Sankey, A/B Testing, etc)
* Un tracking code lourd qui réduit la vitesse de chargement des pages.

## L'éthique derrière le tracking

Les scandales sur la collecte et l'utilisation des données personnelles des utilisateurs fait régulièrement scandale dans la presse numérique. Si le besoin de comprendre son activité et comment nos clients interagissent avec notre entreprise, les extrémités souvent mises en place pour un tracking systématique et intrusif des utilisateurs est souvent absurde. La volonté de pister l'utilisateur pour déterminer les habitudes de l'utilisateur au-delà du domaine de l'entreprise, bien que techniquement possible grâce aux cookies, est moralement qualifiable d'espionnage et se trouve tout à fait inutile pour la plupart des modèles économiques. Ainsi, recourir à des outils tels que Google Analytics, Facebook Pixel ou autres outils fonctionnant de pairs avec les GAFAM n'est pas le meilleur investissement pour inciter le marché à prendre une direction plus humaine. Pire encore, bon nombre d'utilisateurs bloquent manuellement ou automatiquement (au moyen d'extension de navigateur) les cookies, voire les interactions avec des noms de domaines appartenant à un GAFAM.

Des solutions éthiques existent et permettent : 
* Un tracking sans cookies où l'activité de l'utilisateur et ses interactions avec votre entreprise sont capturées
* L'utilisateur reste anonyme, car ses données personnelles ne quittent jamais son ordinateur
* Aucun blocage n'a lieu puisqu'aucun cookie n'est utilisé
* Souvent open-source, vous pouvez même les positionner derrière votre propre domaine pour éviter d'éventuels blocages DNS.

## A/B Testing ? Pour quoi faire ?
Encore très peu mis en place dans les stratégies marketing, l'A/B testing reprend la méthode scientifique pour comparer un groupe (A) profitant d'un nouveau levier marketing contre un autre groupe (B) n'en profitant pas. Sans ce groupe témoin, comment savoir si les metrics que vous observez sont dus à la mise en place de votre nouveau levier ou bien à d'autres modifications qui portent leur fruit seulement maintenant ? (SEO, article de blog en vogue, backlinks, etc).

## Tracker mieux en trackant partout
Le tracking est souvent mis en place avec l'installation rapide d'un Google Analytics sur un site internet. Pourtant, l'analyse de l'activité peut s'effectuer via bien d'autres indicateurs provenant du reste de votre système d'exploitation :

* Bases de données (utilisateur, produits, ventes, fournisseurs, etc.)
* CRM (acquisition client, qualité du sourcing, évolution du panier moyen par client, etc.)
* Logiciel de comptabilité (volumes des ventes, évolution du taux de transformation, fréquences d'achats)
* ERP (coûts des matières premières, turnover des fournisseurs, complétion des processus, etc.)

Toutes ces mesures vous permettent de faire émerger des indicateurs qui prouvent la bonne santé de votre entreprise et sa capacité à évoluer sur son marché. Ils sont des outils stratégiques indispensables pour implémenter votre gouvernance d'entreprise.

## Que faire ?
Comme nous l'avons montré ci-dessus, en utilisant uniquement la version de base de Google Analytics, vous allez être rapidement limité dans votre stratégie de suivi de l'activité. Plusieurs choix s'offrent alors à vous pour mettre en place un tracking distribué sur l'ensemble de vos outils et faire émerger des indicateurs vraiment pertinents en recoupant les informations issues de l'ensemble de votre système d'informations :

* Choisir un des fournisseurs sur le marché (Google Analytics, SAP BO, Power BI, Google Looker) et mettre en place une équipe d'expert pour la brancher sur vos sources de données.
* Opter pour des outils Open-Source pour concevoir votre propre environnement de tracking sur mesure.

En choisissant un logiciel sur le marché, vous profitez du renom du fournisseur et d'une solution prête à mettre en place. Cette mise en place prendra malgré tout un temps conséquent, mais vous pourrez vous offrir une équipe d'expert vendue comme un service par le fournisseur à un prix relativement exorbitant. En terme d'embauche d'experts pour manipuler et configurer l'outil, vous aurez une facilité de recrutement relative à la popularité du fournisseur.
Pour ce qui est des défauts, vous enfermez votre entreprise dans une technologie sur laquelle vous n'avez aucun pouvoir et vous n'aurez pas votre mot à dire tant sur l'évolution des fonctionnalités que du prix à payer pour continuer d'utiliser l'outil.

En mettant en place des outils open-source, vous installez en ensemble de briques logicielles fonctionnant de concert et interchangeables avec d'autres alternatives si vous étiez amené à reconsidérer une partie de votre stratégie. Mieux encore, les outils open-source peuvent être dupliqué et leur code modifié par vos propres équipes, vous assurant d'avoir la main mise sur l'évolution de votre capacité à tracker et suivre votre activité. Les compétences sur le marché sont plus éparses, car les logiciels open-source sont légion ; pour autant, n'importe quel bon développeur pourra prendre en main un logiciel open-source, le configurer et le faire évoluer pour correspondre à vos besoins.

Chez Nutshell, nous avons mis en place bien des stratégies de tracking au fil du temps : des Google Analytics sur-alimentés à des stacks open-source. En ce moment, nos préférences se décomposent ainsi :

* Metabase: Dashboards personnalisés (Éditeur de dashboard no-code ou SQL)
* Tracking code éthique : Plausible
* Stockage des événements : Clickhouse
* Sources de données : Bases de données métiers, Sales (Sage), CRM (PipeDrive)

## Pour conclure
Le domaine du tracking est monopolisé par de très gros acteurs et surtout par Google Analytics qui détient une large majorité du marché. Ces usines-outil nécessitent une configuration très lourde pour devenir réellement pertinent pour une entreprise de taille moyenne ; elles sont compliquées à utiliser par les équipes non-techniques et obligent l'entreprise à s'enfermer dans la technologie fournie. L'évolution de l'outil et des tarifs sont en dehors du contrôle de l'entreprise qui doit s'adapter aux changements imposés par le fournisseur, forçant parfois une migration vers de nouvelles versions de l'outil, les précédentes versions étant rendues illégales en raison des entraves aux législations en vigueur. Des solutions plus éthiques et plus évolutives existent pourtant sur le marché. Bien moins chères sur le long terme, open-source, modifiables et interchangeables, elles permettent à l'entreprise de mettre en place un tracking fin, correspondant aux problématiques métiers avec exactitude et pertinence en s'interconnectant avec toutes les sources de données du système d'informations (ERP, CRM, Sales, Bases de données internes).

