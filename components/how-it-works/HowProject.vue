<template>
  <v-layout 
    row 
    wrap 
    align-center>
    <v-flex>
      <v-card flat class="transparent">
        <v-card-text class="pl-4 secondary-light--text title">
          Qu'elle soit mature ou bougeonnante, votre idée est l'origine d'un projet bien exécuté ! 
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex 
      xs12 
      class="py-3 mb-3">
      <v-layout>
        <v-flex class="number-container relative">
          <span class="number underline primary--text">01</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4">
          <span 
            :class="mediaTitleSize" 
            class="category secondary-light--text">Analyse</span>
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
            Phase initiale du projet, nous prenons le temps d'étudier votre idée et surtout de vous connaitre, vous, votre métier, et vos besoins.
          </span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-3">
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
            &nbsp;Découvrir et décrire ensemble les problèmatiques de votre projet, leurs pistes de résolutions et les enjeux stratégiques qui en découlent.
          </span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-3">
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
            &nbsp;À la fin d'une phase d'analyse technique, vous recevez les spécifications détaillées de notre solution.
          </span>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex 
      xs12
      class="py-3 my-3 pr-3">
      <v-layout>
        <v-flex class="number-container relative">
          <span class="number underline primary--text">02</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4">
          <span 
            :class="mediaTitleSize" 
            class="category secondary-light--text">Réalisation</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number $$"/>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span 
            :class="mediaSize" 
            class="primary--text">
            Le développement commence mais nos échanges ne s'arrêtent pas là, nous continuons de dialoguer et vous restez maître de l'orientation que prend votre projet.
          </span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-3">
        <v-flex class="number-container">
          <span class="number $$"/>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span 
            :class="mediaSize" 
            class="primary--text">
            <span class="secondary-light--text bold">Objectifs&nbsp;:</span>
            &nbsp;S'assurer, lot après lot, de l'atteinte des objectifs de votre idée.
          </span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-3">
        <v-flex class="number-container">
          <span class="number"/>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4 article">
          <span 
            :class="mediaSize" 
            class="primary--text">
            <span class="secondary-light--text bold">Livrables&nbsp;:</span>
            &nbsp;Tout au long de la réalisation vous recevrez des lots de fonctionnalités que vous pourrez tester et faire évoluer lors des itérations qui suivent.
          </span>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex 
      xs12
      class="py-3 my-3">
      <v-layout>
        <v-flex class="number-container relative">
          <span class="number underline primary--text">03</span>
        </v-flex>
        <v-flex 
          xs12 
          class="pl-4">
          <span 
            :class="mediaTitleSize" 
            class="category secondary-light--text">Suivi</span>
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
            La réalisation stabilisée, nous ne vous abandonons pas à votre sort, nous mettons en place ensemble les modalités de suivi et d'améliorations de votre projet.
          </span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-3">
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
            &nbsp;S'incrire dans une collaboration à long terme.
          </span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-3">
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
            &nbsp;Vous recevez nos conseils et les versions corrigées de votre applicatif tout au long de son cycle de vie.
          </span>
        </v-flex>
      </v-layout>
    </v-flex>
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
  border: solid 2px #f5b537
}

.number-container {
  padding-top: 3px;
  width: 21px;
}
</style>
