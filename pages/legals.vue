<template>
  <v-layout 
    id="legals" 
    row 
    wrap 
    fill-height 
    justify-center 
    align-center
    class="primary">
    <v-flex 
      :class="mediaSpacing"
      xs11
      sm10
      md8
      xl5
      lg6
      class="text-xs-left"
    >
      <v-layout 
        row 
        wrap 
        justify-space-between>
        <v-flex 
          :class="mediaExit" 
          shrink 
          class="pt-2">
          <v-icon 
            class="clickable exit" 
            large 
            @click="routerPush('/')">close</v-icon>
        </v-flex>
        <v-flex 
          shrink 
          class="regular">
          <v-card 
            flat 
            class="transparent accent--text">
            <v-card-text 
              :class="mediaTitle" 
              class="pa-0 text-xs-right relative top" ><span class="string">Mentions légales<br >de Nutshell Lab</span></v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      
      <v-card 
        flat 
        class="transparent accent--text mt-4">
        <v-card-text class="pa-0 title text-xs-left" >Effectif depuis le : 7 Mai 2019</v-card-text>
      </v-card>

      <v-layout class="mt-4">
        <v-flex class="number-container relative">
          <span class="number underline">01</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4">
          <span class="category accent--text headline">Définitions</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number">1.0</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading"><span class="accent--text bold">Client&nbsp;:</span>&nbsp;tout professionnel ou personne physique capable au sens des articles 1123 et suivants du Code civil, ou personne morale, qui visite le Site objet des présentes conditions générales.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number">1.1</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading"><span class="accent--text bold">Prestations et Services&nbsp;:</span>&nbsp;ce que <div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> met à disposition de ses Clients.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number">1.2</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading"><span class="accent--text bold">Contenu&nbsp;:</span>&nbsp;ensemble des éléments constituants l’information présente sur le Site, notamment textes – images – vidéos.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number">1.3</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading"><span class="accent--text bold">Informations clients&nbsp;:</span>&nbsp;Ci après dénommé «&nbsp;Information (s)&nbsp;» qui correspondent à l’ensemble des données personnelles susceptibles d’être détenues par <div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> pour la gestion de votre compte, de la gestion de la relation client et à des fins d’analyses et de statistiques.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number">1.4</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading"><span class="accent--text bold">Utilisateur&nbsp;:</span>&nbsp;Internaute se connectant, utilisant le site susnommé.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number">1.5</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading"><span class="accent--text bold">Informations personnelles&nbsp;:</span>&nbsp;« Les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).
          <br >Les termes «&nbsp;données à caractère personnel&nbsp;», «&nbsp;personne concernée&nbsp;», «&nbsp;sous traitant&nbsp;» et «&nbsp;données sensibles&nbsp;» ont le sens défini par le Règlement Général sur la Protection des Données (RGPD&nbsp;: n° 2016-679)</span>
        </v-flex>
      </v-layout>


      <v-layout class="mt-4">
        <v-flex class="number-container relative">
          <span class="number underline">02</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4">
          <span class="category accent--text headline">Présentation du site internet</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container"/>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading">En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet <div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number">2.1</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading"><span class="accent--text bold">Propriétaire&nbsp;:</span>&nbsp;SAS Nutshell Lab Capital social de 3000€  – 292 Rue du Général de Gaulle 59370 Mons en Baroeul</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number">2.2</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading"><span class="accent--text bold">Responsable publication&nbsp;:</span>&nbsp;Sorian Slimani – sorian@nutshell-lab.com</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number">2.3</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading"><span class="accent--text bold">Webmaster&nbsp;:</span>&nbsp;Nathan Boutté – nathan@nutshell-lab.com</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number">2.4</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading"><span class="accent--text bold">Hébergeur&nbsp;:</span>&nbsp;OVH – 2 Rue Kellermann 59100 Roubaix 1007</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number">2.5</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading"><span class="accent--text bold">Délégué à la protection des données&nbsp;:</span>&nbsp;Victor Rebiard--Crépin – victor@nutshell-lab.com</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number">2.6</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading">Les mentions légales sont issues du modèle proposé par <div class="link clickable relative"><a 
            href="https://fr.orson.io/1371/generateur-mentions-legales" 
            class="white--text" 
            target="_blank">Orson.io</a></div></span>
        </v-flex>
      </v-layout>
        
      <v-layout class="mt-4">
        <v-flex class="number-container relative">
          <span class="number underline">03</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 text-xs-left">
          <span class="category accent--text headline">Conditions générales d’utilisation du site et des services proposés</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">3.1</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading">Le Site constitue une œuvre de l’esprit protégée par les dispositions du Code de la Propriété Intellectuelle et des Réglementations Internationales applicables. Le Client ne peut en aucune manière réutiliser, céder ou exploiter pour son propre compte tout ou partie des éléments ou travaux du Site.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">3.2</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading">L’utilisation du site&nbsp;<div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div>&nbsp;implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site&nbsp;<div 
              class="link clickable relative" 
              @click="routerPush('/')">Nutshell Lab</div>&nbsp;sont donc invités à les consulter de manière régulière.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">3.3</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading">Ce site internet est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par <div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div>, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention. Le site web&nbsp;<div 
              class="link clickable relative" 
              @click="routerPush('/')">Nutshell Lab</div>&nbsp;est mis à jour régulièrement par <div 
                class="link clickable relative" 
                @click="routerPush('/')">Nutshell Lab</div> responsable. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">3.4</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading">Ce site internet est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par <div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div>, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention. Le site web&nbsp;<div 
              class="link clickable relative" 
              @click="routerPush('/')">Nutshell Lab</div>&nbsp;est mis à jour régulièrement par <div 
                class="link clickable relative" 
                @click="routerPush('/')">Nutshell Lab</div> responsable. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.</span>
        </v-flex>
      </v-layout>
      

      <v-layout class="mt-4">
        <v-flex class="number-container relative">
          <span class="number underline">04</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 text-xs-left">
          <span class="category accent--text headline">Description des services fournis</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">4.1</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading">Le site internet&nbsp;<div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div>&nbsp;a pour objet de fournir une information concernant l’ensemble des activités de la société. <div 
              class="link clickable relative" 
              @click="routerPush('/')">Nutshell Lab</div> s’efforce de fournir sur le site&nbsp;<div 
                class="link clickable relative" 
                @click="routerPush('/')">Nutshell Lab</div>&nbsp;des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">4.2</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading">Toutes les informations indiquées sur le site&nbsp;<div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div>&nbsp;sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site&nbsp;<div 
              class="link clickable relative" 
              @click="routerPush('/')">Nutshell Lab</div>&nbsp;ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.</span>
        </v-flex>
      </v-layout>

      <v-layout class="mt-4">
        <v-flex class="number-container relative">
          <span class="number underline">05</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 text-xs-left">
          <span class="category accent--text headline">Limitations contractuelles sur les données techniques</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">5.1</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading">Le site utilise la technologie JavaScript.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">5.2</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading">Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">5.3</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading">Le site <div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> est hébergé chez un prestataire sur le territoire de l’Union Européenne conformément aux dispositions du Règlement Général sur la Protection des Données (RGPD&nbsp;: n° 2016-679).</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">5.4</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading">L’objectif est d’apporter une prestation qui assure le meilleur taux d’accessibilité. L’hébergeur assure la continuité de son service 24 Heures sur 24, tous les jours de l’année. Il se réserve néanmoins la possibilité d’interrompre le service d’hébergement pour les durées les plus courtes possibles notamment à des fins de maintenance, d’amélioration de ses infrastructures, de défaillance de ses infrastructures ou si les Prestations et Services génèrent un trafic réputé anormal.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">5.5</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading"><div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> et l’hébergeur ne pourront être tenus responsables en cas de dysfonctionnement du réseau Internet, des lignes téléphoniques ou du matériel informatique et de téléphonie lié notamment à l’encombrement du réseau empêchant l’accès au serveur.</span>
        </v-flex>
      </v-layout>
      

      <v-layout class="mt-4">
        <v-flex class="number-container relative">
          <span class="number underline">06</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 text-xs-left">
          <span class="category accent--text headline">Propriété intellectuelle et contrefaçons</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">6.1</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading"><div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, icônes et sons. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : <div 
              class="link clickable relative" 
              @click="routerPush('/')">Nutshell Lab</div>.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">6.2</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading">Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</span>
        </v-flex>
      </v-layout>


      <v-layout class="mt-4">
        <v-flex class="number-container relative">
          <span class="number underline">07</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 text-xs-left">
          <span class="category accent--text headline">Limitations de responsabilité</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">7.1</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading"><div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> agit en tant qu’éditeur du site. <div 
              class="link clickable relative" 
              @click="routerPush('/')">Nutshell Lab</div> &nbsp;est responsable de la qualité et de la véracité du Contenu qu’il publie.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">7.2</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading"><div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site internet <div 
              class="link clickable relative" 
              @click="routerPush('/')">Nutshell Lab</div>, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">7.3</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading"><div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> ne pourra également être tenu responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site&nbsp;<div 
              class="link clickable relative" 
              @click="routerPush('/')">Nutshell Lab</div>.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">7.4</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading">Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition des utilisateurs. <div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, <div 
              class="link clickable relative" 
              @click="routerPush('/')">Nutshell Lab</div> se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …).</span>
        </v-flex>
      </v-layout>


      <v-layout class="mt-4">
        <v-flex class="number-container relative">
          <span class="number underline">08</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 text-xs-left">
          <span class="category accent--text headline">Gestion des données personnelles</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">8.1</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading">Le Client est informé des réglementations concernant la communication marketing, la loi du 21 Juin 2014 pour la confiance dans l’Economie Numérique, la Loi Informatique et Liberté du 06 Août 2004 ainsi que du Règlement Général sur la Protection des Données (RGPD&nbsp;: n° 2016-679).</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">8.2</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="category accent--text subheading">Responsables de la collecte des données personnelles</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">8.2.1</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading">Pour les Données Personnelles collectées dans le cadre de la création du compte personnel de l’Utilisateur et de sa navigation sur le Site, le responsable du traitement des Données Personnelles est : Nutshell Lab. <div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> est représenté par Victor Rebiard--Crépin, son représentant légal.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">8.2.2</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading">En tant que responsable du traitement des données qu’il collecte, <div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> s’engage à respecter le cadre des dispositions légales en vigueur. Il lui appartient notamment au Client d’établir les finalités de ses traitements de données, de fournir à ses prospects et clients, à partir de la collecte de leurs consentements, une information complète sur le traitement de leurs données personnelles et de maintenir un registre des traitements conforme à la réalité.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">8.2.3</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading">Chaque fois que <div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> traite des Données Personnelles, <div 
              class="link clickable relative" 
              @click="routerPush('/')">Nutshell Lab</div> prend toutes les mesures raisonnables pour s’assurer de l’exactitude et de la pertinence des Données Personnelles au regard des finalités pour lesquelles <div 
                class="link clickable relative" 
                @click="routerPush('/')">Nutshell Lab</div> les traite.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">8.3</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="category accent--text subheading">Finalité des données collectées</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">8.3.1</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading"><div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> est susceptible de traiter tout ou partie des données : 
            <ul>
              <li>pour permettre la navigation sur le Site et la gestion et la traçabilité des prestations et services commandés par l’utilisateur : données de connexion et d’utilisation du Site, facturation, historique des commandes, etc.</li>
              <li>pour prévenir et lutter contre la fraude informatique (spamming, hacking…) : matériel informatique utilisé pour la navigation, l’adresse IP, le mot de passe (hashé) </li>
              <li>pour améliorer la navigation sur le Site : données de connexion et d’utilisation </li>
              <li>pour mener des enquêtes de satisfaction facultatives sur <div 
                class="link clickable relative" 
                @click="routerPush('/')">Nutshell Lab</div> : adresse email </li>
              <li>pour mener des campagnes de communication (sms, mail) : numéro de téléphone, adresse email</li>
            </ul>
          </span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">8.3.2</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading"><div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> ne commercialise pas vos données personnelles qui sont donc uniquement utilisées par nécessité ou à des fins statistiques et d’analyses.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">8.4</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="category accent--text subheading">Droit d’accès, de rectification et d’opposition</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">8.4.1</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading">Conformément à la réglementation européenne en vigueur, les Utilisateurs de <div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> disposent des droits suivants :
            <ul>
              <li>droit d'accès (article 15 RGPD) et de rectification (article 16 RGPD), de mise à jour, de complétude des données des Utilisateurs droit de verrouillage ou d’effacement des données des Utilisateurs à caractère personnel (article 17 du RGPD), lorsqu’elles sont inexactes, incomplètes, équivoques, périmées, ou dont la collecte, l'utilisation, la communication ou la conservation est interdite </li>
              <li>droit de retirer à tout moment un consentement (article 13-2c RGPD) </li>
              <li>droit à la limitation du traitement des données des Utilisateurs (article 18 RGPD) </li>
              <li>droit d’opposition au traitement des données des Utilisateurs (article 21 RGPD) </li>
              <li>droit à la portabilité des données que les Utilisateurs auront fournies, lorsque ces données font l’objet de traitements automatisés fondés sur leur consentement ou sur un contrat (article 20 RGPD) </li>
              <li>droit de définir le sort des données des Utilisateurs après leur mort et de choisir à qui <div 
                class="link clickable relative" 
                @click="routerPush('/')">Nutshell Lab</div> devra communiquer (ou non) ses données à un tiers qu’ils aura préalablement désigné</li>
            </ul>
          </span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">8.4.2</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading">Dès que <div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> a connaissance du décès d’un Utilisateur et à défaut d’instructions de sa part, <div 
              class="link clickable relative" 
              @click="routerPush('/')">Nutshell Lab</div> s’engage à détruire ses données, sauf si leur conservation s’avère nécessaire à des fins probatoires ou pour répondre à une obligation légale.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">8.4.3</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading">Si l’Utilisateur souhaite savoir comment <div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> utilise ses Données Personnelles, demander à les rectifier ou s’oppose à leur traitement, l’Utilisateur peut contacter <div 
              class="link clickable relative" 
              @click="routerPush('/')">Nutshell Lab</div> par écrit à l’adresse suivante
            <div class="ml-4">Nutshell Lab – DPO, Victor Rebiard--Crépin</div>
            <div class="ml-4">292 Rue du Général de Gaulle 59370 Mons en baroeul</div>
          </span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">8.4.4</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading">Dans ce cas, l’Utilisateur doit indiquer les Données Personnelles qu’il souhaiterait que <div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> corrige, mette à jour ou supprime, en s’identifiant précisément avec une copie d’une pièce d’identité (carte d’identité ou passeport).</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">8.4.5</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading">Les demandes de suppression de Données Personnelles seront soumises aux obligations qui sont imposées à <div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> par la loi, notamment en matière de conservation ou d’archivage des documents. Enfin, les Utilisateurs de <div 
              class="link clickable relative" 
              @click="routerPush('/')">Nutshell Lab</div> peuvent déposer une réclamation auprès des autorités de contrôle, et notamment de la CNIL (https://www.cnil.fr/fr/plaintes).</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">8.5</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="category accent--text subheading">Non-communication des données personnelles</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">8.5.1</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading"><div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> s’interdit de traiter, héberger ou transférer les Informations collectées sur ses Clients vers un pays situé en dehors de l’Union européenne ou reconnu comme «&nbsp;non adéquat&nbsp;» par la Commission européenne sans en informer préalablement le client. Pour autant, <div 
              class="link clickable relative" 
              @click="routerPush('/')">Nutshell Lab</div> reste libre du choix de ses sous-traitants techniques et commerciaux à la condition qu’il présentent les garanties suffisantes au regard des exigences du Règlement Général sur la Protection des Données (RGPD&nbsp;: n° 2016-679).</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">8.5.2</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading"><div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> s’engage à prendre toutes les précautions nécessaires afin de préserver la sécurité des Informations et notamment qu’elles ne soient pas communiquées à des personnes non autorisées. Cependant, si un incident impactant l’intégrité ou la confidentialité des Informations du Client est portée à la connaissance de <div 
              class="link clickable relative" 
              @click="routerPush('/')">Nutshell Lab</div>, celle-ci devra dans les meilleurs délais informer le Client et lui communiquer les mesures de corrections prises. Par ailleurs <div 
                class="link clickable relative" 
                @click="routerPush('/')">Nutshell Lab</div> ne collecte aucune «&nbsp;données sensibles&nbsp;».</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">8.5.3</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading">Les Données Personnelles de l’Utilisateur peuvent être traitées par des filiales de <div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> et des sous-traitants (prestataires de services), exclusivement afin de réaliser les finalités de la présente politique.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">8.5.4</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading">Dans la limite de leurs attributions respectives et pour les finalités rappelées ci-dessus, les principales personnes susceptibles d’avoir accès aux données des Utilisateurs de <div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> sont principalement les agents de notre service client.</span>
        </v-flex>
      </v-layout>

      <v-layout class="mt-4">
        <v-flex class="number-container relative">
          <span class="number underline">09</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 text-xs-left">
          <span class="category accent--text headline">Notification d’incident</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">9.1</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading">Quels que soient les efforts fournis, aucune méthode de transmission sur Internet et aucune méthode de stockage électronique n'est complètement sûre. Nous ne pouvons en conséquence pas garantir une sécurité absolue. Si nous prenions connaissance d'une brèche de la sécurité, nous avertirions les utilisateurs concernés afin qu'ils puissent prendre les mesures appropriées. Nos procédures de notification d’incident tiennent compte de nos obligations légales, qu'elles se situent au niveau national ou européen. Nous nous engageons à informer pleinement nos clients de toutes les questions relevant de la sécurité de leur compte et à leur fournir toutes les informations nécessaires pour les aider à respecter leurs propres obligations réglementaires en matière de reporting.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">9.2</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading">Aucune information personnelle de l'utilisateur du site&nbsp;<div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div>&nbsp;n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat de <div 
              class="link clickable relative" 
              @click="routerPush('/')">Nutshell Lab</div> et de ses droits permettrait la transmission des dites informations à l'éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l'utilisateur du site&nbsp;<div 
                class="link clickable relative" 
                @click="routerPush('/')">Nutshell Lab</div>.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">9.3</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="category accent--text subheading">Sécurité</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">9.3.1</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading">Pour assurer la sécurité et la confidentialité des Données Personnelles et des Données Personnelles de Santé, <div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> utilise des réseaux protégés par des dispositifs standards tels que par pare-feu, la pseudonymisation, l’encryption et mot de passe.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">9.3.2</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading">Lors du traitement des Données Personnelles, <div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div>prend toutes les mesures raisonnables visant à les protéger contre toute perte, utilisation détournée, accès non autorisé, divulgation, altération ou destruction.</span>
        </v-flex>
      </v-layout>

      <v-layout class="mt-4">
        <v-flex class="number-container relative">
          <span class="number underline">10</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 text-xs-left">
          <span class="category accent--text headline">Liens hypertextes « cookies » et balises (“tags”) internet</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">10.1</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading">Le site&nbsp;<div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div>&nbsp;contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de <div 
              class="link clickable relative" 
              @click="routerPush('/')">Nutshell Lab</div>. Cependant, <div 
                class="link clickable relative" 
                @click="routerPush('/')">Nutshell Lab</div> n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">10.2</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading">Sauf si vous décidez de désactiver les cookies, vous acceptez que le site puisse les utiliser. Vous pouvez à tout moment désactiver ces cookies et ce gratuitement à partir des possibilités de désactivation qui vous sont offertes et rappelées ci-après, sachant que cela peut réduire ou empêcher l’accessibilité à tout ou partie des Services proposés par le site.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">10.3</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="category accent--text subheading">« COOKIES »</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">10.3.1</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading">Un « cookie » est un petit fichier d’information envoyé sur le navigateur de l’Utilisateur et enregistré au sein du terminal de l’Utilisateur (ex : ordinateur, smartphone), (ci-après « Cookies »). Ce fichier comprend des informations telles que le nom de domaine de l’Utilisateur, le fournisseur d’accès Internet de l’Utilisateur, le système d’exploitation de l’Utilisateur, ainsi que la date et l’heure d’accès. Les Cookies ne risquent en aucun cas d’endommager le terminal de l’Utilisateur.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">10.3.2</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading"><div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> est susceptible de traiter les informations de l’Utilisateur concernant sa visite du Site, telles que les pages consultées, les recherches effectuées. Ces informations permettent à <div 
              class="link clickable relative" 
              @click="routerPush('/')">Nutshell Lab</div> d’améliorer le contenu du Site, de la navigation de l’Utilisateur.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">10.3.3</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading">Les Cookies facilitant la navigation et/ou la fourniture des services proposés par le Site, l’Utilisateur peut configurer son navigateur pour qu’il lui permette de décider s’il souhaite ou non les accepter de manière à ce que des Cookies soient enregistrés dans le terminal ou, au contraire, qu’ils soient rejetés, soit systématiquement, soit selon leur émetteur. L’Utilisateur peut également configurer son logiciel de navigation de manière à ce que l’acceptation ou le refus des Cookies lui soient proposés ponctuellement, avant qu’un Cookie soit susceptible d’être enregistré dans son terminal. <div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> informe l’Utilisateur que, dans ce cas, il se peut que les fonctionnalités de son logiciel de navigation ne soient pas toutes disponibles.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">10.3.4</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading">Si l’Utilisateur refuse l’enregistrement de Cookies dans son terminal ou son navigateur, ou si l’Utilisateur supprime ceux qui y sont enregistrés, l’Utilisateur est informé que sa navigation et son expérience sur le Site peuvent être limitées. Cela pourrait également être le cas lorsque <div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> ou l’un de ses prestataires ne peut pas reconnaître, à des fins de compatibilité technique, le type de navigateur utilisé par le terminal, les paramètres de langue et d’affichage ou le pays depuis lequel le terminal semble connecté à Internet.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">10.3.5</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading">Le cas échéant, <div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> décline toute responsabilité pour les conséquences liées au fonctionnement dégradé du Site et des services éventuellement proposés par <div 
              class="link clickable relative" 
              @click="routerPush('/')">Nutshell Lab</div>, résultant (i) du refus de Cookies par l’Utilisateur (ii) de l’impossibilité pour <div 
                class="link clickable relative" 
                @click="routerPush('/')">Nutshell Lab</div> d’enregistrer ou de consulter les Cookies nécessaires à leur fonctionnement du fait du choix de l’Utilisateur. Pour la gestion des Cookies et des choix de l’Utilisateur, la configuration de chaque navigateur est différente. Elle est décrite dans le menu d’aide du navigateur, qui permettra de savoir de quelle manière l’Utilisateur peut modifier ses souhaits en matière de Cookies.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">10.3.6</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading">À tout moment, l’Utilisateur peut faire le choix d’exprimer et de modifier ses souhaits en matière de Cookies. <div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> pourra en outre faire appel aux services de prestataires externes pour l’aider à recueillir et traiter les informations décrites dans cette section.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">10.3.7</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading">Enfin, en cliquant sur les icônes dédiées aux réseaux sociaux Twitter, Facebook, Linkedin et Google Plus figurant sur le Site de <div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> ou dans son application mobile et si l’Utilisateur a accepté le dépôt de cookies en poursuivant sa navigation sur le Site Internet ou l’application mobile de <div 
              class="link clickable relative" 
              @click="routerPush('/')">Nutshell Lab</div>, Twitter, Facebook, Linkedin et Google Plus peuvent également déposer des cookies sur vos terminaux (ordinateur, tablette, téléphone portable).</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">10.3.8</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading">Ces types de cookies ne sont déposés sur vos terminaux qu’à condition que vous y consentiez, en continuant votre navigation sur le Site Internet ou l’application mobile de <div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div>. À tout moment, l’Utilisateur peut néanmoins revenir sur son consentement à ce que <div 
              class="link clickable relative" 
              @click="routerPush('/')">Nutshell Lab</div> dépose ce type de cookies.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">10.4</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="category accent--text subheading">BALISES (“TAGS”) INTERNET</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">10.4.1</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading"><div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> peut employer occasionnellement des balises Internet (également appelées « tags », ou balises d’action, GIF à un pixel, GIF transparents, GIF invisibles et GIF un à un) et les déployer par l’intermédiaire d’un partenaire spécialiste d’analyses Web susceptible de se trouver (et donc de stocker les informations correspondantes, y compris l’adresse IP de l’Utilisateur) dans un pays étranger.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">10.4.2</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading">Ces balises sont placées à la fois dans les publicités en ligne permettant aux internautes d’accéder au Site, et sur les différentes pages de celui-ci.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">10.4.3</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading">Cette technologie permet à <div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div> d’évaluer les réponses des visiteurs face au Site et l’efficacité de ses actions (par exemple, le nombre de fois où une page est ouverte et les informations consultées), ainsi que l’utilisation de ce Site par l’Utilisateur.</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">10.4.4</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-5 article">
          <span class="subheading">Le prestataire externe pourra éventuellement recueillir des informations sur les visiteurs du Site et d’autres sites Internet grâce à ces balises, constituer des rapports sur l’activité du Site à l’attention de <div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div>, et fournir d’autres services relatifs à l’utilisation de celui-ci et d’Internet.</span>
        </v-flex>
      </v-layout>


      <v-layout class="mt-4">
        <v-flex class="number-container relative">
          <span class="number underline">11</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 text-xs-left">
          <span class="category accent--text headline">Droit applicable et attribution de juridiction</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number number-container">11.1</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span class="subheading">Tout litige en relation avec l’utilisation du site&nbsp;<div 
            class="link clickable relative" 
            @click="routerPush('/')">Nutshell Lab</div>&nbsp;est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Lille</span>
        </v-flex>
      </v-layout>

      

      <v-layout 
        row 
        wrap 
        align-start
        class="py-5">
        <v-flex>
          <v-layout 
            row 
            wrap 
            justify-start 
            class="regular">
            <v-flex shrink>
              <v-card 
                flat 
                class="transparent accent--text">
                <v-card-text 
                  :class="mediaGoTop" 
                  class="pa-0 text-xs-left relative bottom" ><span 
                    class="string clickable" 
                    @click="$vuetify.goTo('#legals', options)">Revenir en haut</span></v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex shrink>
          <v-img
            src="/nut-logo.png"
            height="80"
            width="58"
            class="mt-4"
          />
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      options: {
        duration: 1000,
        easing: 'easeInOutCubic'
      }
    }
  },
  computed: {
    mediaTitle() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'display-1 small'
        case 'sm':
          return 'display-1 small'
        default:
          return 'display-2'
      }
    },
    mediaGoTop() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'display-0 small'
        case 'sm':
          return 'display-0 small'
        default:
          return 'display-1'
      }
    },
    mediaSpacing() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'mt-4 pt-5'
        case 'sm':
          return 'mt-4 pt-5'
        default:
          return 'mt-5 pt-5'
      }
    },
    mediaExit() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'float-top'
        default:
          return ''
      }
    }
  },
  methods: {
    ...mapActions({
      routerPush: 'router/push'
    })
  }
}
</script>

<style lang="stylus" scoped>

.float-top {
  margin-top: -43px
}

.regular, .regular * {
  font-family: 'Neue Plak Regular' !important
}

.wide, .wide * {
  font-family: 'Neue Plak Wide ExtraBlack' !important
}

.number {
  font-family: 'Neue Plak Extended Bold' !important
}

.article, .article * {
  font-family: 'Neue Plak Regular' !important
}

.bold {
  font-family: 'Neue Plak Bold' !important
}

.number-container {
  padding-top: 3px;
  width: 21px;
}

.link {
  display: inline-block
  transition: all cubic-bezier(.7,0,.3,1) .2s;
}

.exit:hover {
  color: #fddd3a !important
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.link::after {
  content: "";
  position: absolute;
  z-index: 1;
  display: block;
  width: 100%;
  height: 1px;
  border: solid 1px #fddd3a
}

.link a {
  text-decoration: none
}

.link:hover, .link a:hover {
  color: #fddd3a !important
}

.category {
  font-family: 'Neue Plak Bold' !important
  line-height: 27px !important;
}

.underline::after {
  content: "";
  position: absolute;
  z-index: 1;
  display: block;
  width: 100%;
  height: 2px;
  border: solid 2px #fddd3a
}

.relative {
  position: relative
}

.top, .top * {
  font-family: 'Neue Plak Bold' !important
}

.bottom .string, .exit {
  transition: all cubic-bezier(.7,0,.3,1) .2s;
}

.bottom .string:hover {
  color: white
}

.bottom, .bottom * {
  font-family: 'Neue Plak Bold' !important
}

.bottom .string::before {
  top: 25px;
  right: -120px
}

.bottom .string:hover::before {
  top: 25px;
  right: -120px
  border: solid 1px white
}

.top .string::before {
  top: 27px;
  left: -100px
}

.top.small .string::before {
  top: 23px;
  left: -100px
}

.bottom.small .string::before {
  top: 20px;
  right: -110px
}

.string::before {
  content: "";
  position: absolute;
  z-index: 1;
  display: block;
  width: 70px;
  height: 2px;
  border: solid 1px #fddd3a
  -webkit-animation: Move 2s ease-in-out infinite;
  -moz-animation: Move 2s ease-in-out infinite;
  animation: Move 2s ease-in-out infinite;
  transition: all cubic-bezier(.7,0,.3,1) .2s;
}

@-webkit-keyframes Move {
  0% {
    -webkit-transform:translateX(0);
    transform:translateX(0);
  } 50% {
    -webkit-transform:translateX(-20%);
    transform:translateX(-20%);
  } 100% {
    -webkit-transform:translateX(0);
    transform:translateX(0);
  }
}

@keyframes Move {
  0% {
    -webkit-transform:translateX(0);
    transform:translateX(0);
  } 50% {
    -webkit-transform:translateX(-20%);
    transform:translateX(-20%);
  } 100% {
    -webkit-transform:translateX(0);
    transform:translateX(0);
  }
}

@-moz-keyframes Move {
  0% {
    -webkit-transform:translateX(0);
    transform:translateX(0);
  } 50% {
    -webkit-transform:translateX(-20%);
    transform:translateX(-20%);
  } 100% {
    -webkit-transform:translateX(0);
    transform:translateX(0);
  }
}

</style>
