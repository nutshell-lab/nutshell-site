<template>
  <v-layout row wrap align-center>
    <v-flex xs12 lg6 class="py-3 mb-3 pr-3">
      <v-layout>
        <v-flex class="number-container relative">
          <span class="number underline secondary-light--text">01</span>
        </v-flex>
        <v-flex xs12 class="pl-4">
          <span class="category primary--text" :class="mediaTitleSize">Cadrage</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number"></span>
        </v-flex>
        <v-flex xs12 class="pl-4 article">
          <span class="primary--text" :class="mediaSize">
            <span class="secondary-light--text bold">Description&nbsp;:</span>
            &nbsp;Phase initiale du projet, nous prenons le temps de l'étude et surtout de vous connaitre, vous, votre métier, et votre projet.
          </span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number"></span>
        </v-flex>
        <v-flex xs12 class="pl-4 article">
          <span class="primary--text" :class="mediaSize">
            <span class="secondary-light--text bold">Objectifs&nbsp;:</span>
            &nbsp;Nous découvrons et dévrivons ensemble les problèmatiques de votre projet et leurs pistes de résolutions.
          </span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number"></span>
        </v-flex>
        <v-flex xs12 class="pl-4 article">
          <span class="primary--text" :class="mediaSize">
            <span class="secondary-light--text bold">Livrable&nbsp;:</span>
            &nbsp;À la fin de cette phase vous recevez votre carnet d'analyse.
          </span>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12 lg6 class="py-3 my-3">
      <v-layout>
        <v-flex class="number-container relative">
          <span class="number underline secondary-light--text">02</span>
        </v-flex>
        <v-flex xs12 class="pl-4">
          <span class="category primary--text" :class="mediaTitleSize">Ateliers</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number"></span>
        </v-flex>
        <v-flex xs12 class="pl-4 article">
          <span class="primary--text" :class="mediaSize">
            <span class="secondary-light--text bold">Description&nbsp;:</span>
            &nbsp;Phase initiale du projet, nous prenons le temps de l'étude et surtout de vous connaitre, vous, votre métier, et votre projet.
          </span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number"></span>
        </v-flex>
        <v-flex xs12 class="pl-4 article">
          <span class="primary--text" :class="mediaSize">
            <span class="secondary-light--text bold">Objectifs&nbsp;:</span>
            &nbsp;Nous découvrons et dévrivons ensemble les problèmatiques de votre projet et leurs pistes de résolutions.
          </span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number"></span>
        </v-flex>
        <v-flex xs12 class="pl-4 article">
          <span class="primary--text" :class="mediaSize">
            <span class="secondary-light--text bold">Livrable&nbsp;:</span>
            &nbsp;À la fin de cette phase vous recevez votre carnet d'analyse.
          </span>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12 class="py-3 my-3">
      <v-layout>
        <v-flex class="number-container relative">
          <span class="number underline secondary-light--text">03</span>
        </v-flex>
        <v-flex xs12 class="pl-4">
          <span class="category primary--text" :class="mediaTitleSize">Projets</span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number"></span>
        </v-flex>
        <v-flex xs12 class="pl-4 article">
          <span class="primary--text" :class="mediaSize">
            <span class="secondary-light--text bold">Description&nbsp;:</span>
            &nbsp;Phase initiale du projet, nous prenons le temps de l'étude et surtout de vous connaitre, vous, votre métier, et votre projet.
          </span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number"></span>
        </v-flex>
        <v-flex xs12 class="pl-4 article">
          <span class="primary--text" :class="mediaSize">
            <span class="secondary-light--text bold">Objectifs&nbsp;:</span>
            &nbsp;Nous découvrons et dévrivons ensemble les problèmatiques de votre projet et leurs pistes de résolutions.
          </span>
        </v-flex>
      </v-layout>
      <v-layout class="mt-1">
        <v-flex class="number-container">
          <span class="number"></span>
        </v-flex>
        <v-flex xs12 class="pl-4 article">
          <span class="primary--text" :class="mediaSize">
            <span class="secondary-light--text bold">Livrable&nbsp;:</span>
            &nbsp;À la fin de cette phase vous recevez votre carnet d'analyse.
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
