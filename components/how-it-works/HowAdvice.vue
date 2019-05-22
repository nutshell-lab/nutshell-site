<template>
  <v-layout 
    row 
    wrap justify-center>
    <v-flex>
      <v-card flat class="transparent">
        <v-card-text class="pl-4 primary--text title">
          <p>La technologie est un domaine des moins trivial pour tout business qui veut pérenniser son activité dans le temps.
          Le conseil est cependant un investissement toujours très conséquent qu'il soit réalisé par une agence ou par une embauche.
          <p>C'est pourquoi chez Nutshell, nous proposons une offre de conseil tarifée à l'année : pas de compteur qui tourne, pas de surprise à la réception de la facture.
          </p>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex 
      xs12
      class="py-3 mb-3">
      <v-layout>
        <v-flex 
          xs12 
          class="pl-4">
          <span 
            :class="mediaTitleSize" 
            class="category primary--text">Audit</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex 
          xs12 
          class="pl-4 article">
          <span 
            :class="mediaSize" 
            class="primary--text">
            Nous établissons ensemble quels sont vos besoins en faisant un audit de votre existant que nous mettons en parallèle de vos objectifs à court, moyen et long termes.
          </span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-3">
        <v-flex 
          xs12 
          class="pl-4 article">
          <span 
            :class="mediaSize" 
            class="primary--text">
            <span class="secondary-light--text bold">Objectif&nbsp;:</span>
            &nbsp;Comprendre votre métier, vos ambitions et vos rêves.
          </span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-3">
        <v-flex 
          xs12 
          class="pl-4 article">
          <span 
            :class="mediaSize" 
            class="primary--text">
            <span class="secondary-light--text bold">Livrable&nbsp;:</span>
            &nbsp;À la suite de cet audit, nous vous remettons notre rapport sur votre système d'information.
          </span>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex 
      xs12
      class="py-3 my-3">
      <v-layout>
        <v-flex 
          xs12 
          class="pl-4">
          <span 
            :class="mediaTitleSize" 
            class="category primary--text">Accompagnement</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex 
          xs12 
          class="pl-4 article">
          <span 
            :class="mediaSize" 
            class="primary--text">
            Pendant toute la durée du contrat nous sommes à votre disposition pour répondre à vos questions technologiques.
          </span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-3">
        <v-flex 
          xs12 
          class="pl-4 article">
          <span 
            :class="mediaSize" 
            class="primary--text">
            <span class="secondary-light--text bold">Objectifs&nbsp;:</span>
            &nbsp;Que vous ne soyez jamais seul face à vos problèmes.
          </span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-3">
        <v-flex 
          xs12 
          class="pl-4 article">
          <span 
            :class="mediaSize" 
            class="primary--text">
            Durant votre accompagnement certains sujets peuvent être complexes, pour les résoudre nous mettrons en place des ateliers de reflexion.
          </span>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex 
      xs12
      class="py-3 my-3">
      <v-layout>
        <v-flex 
          xs12 
          class="pl-4">
          <span 
            :class="mediaTitleSize" 
            class="category primary--text">Ateliers</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex 
          xs12 
          class="pl-4 article">
          <span 
            :class="mediaSize" 
            class="primary--text">
            Nous réflechissons ensemble durant une demi-journée sur les tenants et aboutisants d'une problématique que nous avons décelée.
          </span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-3">
        <v-flex 
          xs12 
          class="pl-4 article">
          <span 
            :class="mediaSize" 
            class="primary--text">
            <span class="secondary-light--text bold">Objectifs&nbsp;:</span>
            &nbsp;Déterminer les solutions à votre problématique et établir un plan d'actions.
          </span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-3">
        <v-flex 
          xs12 
          class="pl-4 article">
          <span 
            :class="mediaSize" 
            class="primary--text">
            <span class="secondary-light--text bold">Livrable&nbsp;:</span>
            &nbsp;Chaque atelier fait l'objet d'un compte rendu ainsi que de l'analyse de notre équipe d'expert. Si cela est judicieux, nous vous proposons la mise en place d'un <span class="secondary--text">projet</span> pour éxecuter un plan d'action préconisé.
          </span>
        </v-flex>
      </v-layout>
    </v-flex>
    <!-- <v-flex 
      xs12
      class="py-3 my-3">
      <v-layout>
        <v-flex class="number-container relative">
          <span class="number secondary-light--text"></span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4">
          <span 
            :class="mediaTitleSize" 
            class="category primary--text">Projets</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number"/>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span 
            :class="mediaSize" 
            class="primary--text">
            <span class="secondary-light--text bold">Description&nbsp;:</span>
            &nbsp;Phase initiale du projet, nous prenons le temps de l'étude et surtout de vous connaitre, vous, votre métier, et votre projet.
          </span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number"/>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span 
            :class="mediaSize" 
            class="primary--text">
            <span class="secondary-light--text bold">Objectifs&nbsp;:</span>
            &nbsp;Nous découvrons et dévrivons ensemble les problèmatiques de votre projet et leurs pistes de résolutions.
          </span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number"/>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span 
            :class="mediaSize" 
            class="primary--text">
            <span class="secondary-light--text bold">Livrable&nbsp;:</span>
            &nbsp;À la fin de cette phase vous recevez votre carnet d'analyse.
          </span>
        </v-flex>
      </v-layout>
    </v-flex> -->
  </v-layout>
</template>

<script>
export default {
  computed: {
    mediaSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'subheading'
        default:
          return 'title'
      }
    },
    mediaTitleSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'headline'
        default:
          return 'display-0'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

.light {
  font-family: 'Neue Plak Light' !important
}

.number {
  font-family: 'Neue Plak Extended Bold' !important
}

.article, .article * {
  font-family: 'Neue Plak Regular' !important
}

.category {
  font-family: 'Neue Plak Bold' !important
  line-height: 27px !important;
}

.bold {
  font-family: 'Neue Plak Bold' !important
}

.underline::after {
  content: "";
  position: absolute;
  z-index: 1;
  display: block;
  width: 100%;
  height: 2px;
  border: solid 2px #5e2e70
}

.number-container {
  padding-top: 3px;
  width: 21px;
}
</style>
