<template>
  <v-layout 
    :class="mediaSpacing" 
    wrap 
    row 
    justify-center>
    <v-flex 
      xs11
      sm10
      md9
      lg8
      xl7
      class="px-1 my-3">
      <display-title color="secondary">
        <span id="in-a-nutshell">Qui sommes-nous ?</span>
      </display-title>
      <v-card 
        :class="mediaSize"
        class="transparent regular pb-4" 
        flat>
        <v-card-text class="pt-1">
          Nutshell est un <span class="secondary-light--text bold">studio de conception logicielle</span>. Notre rôle est de vous accompagner dans la réalisation de vos idées les plus ambitieuses.
        </v-card-text>
        <v-layout 
          class="px-3" 
          align-center>
          <v-flex>
            <v-layout 
              flat 
              class="transparent" 
              justify-end>
              <v-flex 
                shrink 
                class="text-xs-right pr-4">
                <v-card 
                  flat 
                  class="transparent accent--text">
                  <v-card-text class="pa-0 display-1 text-xs-right relative bold quote hover" ><span class="string">In a<br class="hidden-md-and-up"> Nutshell</span></v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
            <v-card 
              flat 
              class="transparent pt-4 hidden-sm-and-down pr-4">
              <v-card-text class="pa-0 white--text text-xs-justify">
                Fondée par trois amis pendant leurs études en ingénieurie logicielle, Nutshell est la résultante d'un constat d'inefficacité du marché du projet informatique et a pour essentielle valeur d'axer ses oeuvres vers la qualité du produit. Pour ce faire, le projet est le centre de toutes les reflexions, même les plus fondamentales, jusque dans le choix de la technologie la plus adaptée.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex 
            shrink 
            class="">
            <svg 
              :height="mediaPictoSize" 
              :width="mediaPictoSize">
              <image 
                :height="mediaPictoSize" 
                :width="mediaPictoSize" 
                x="0" 
                y="0" 
                xlink:href="/picto/team.svg"/>
            </svg>
          </v-flex>
        </v-layout>
        <v-card 
          flat 
          class="transparent pt-4 hidden-md-and-up">
          <v-card-text class="py-0 white--text text-xs-justify">
            Fondée par trois amis pendant leurs études en ingénieurie logicielle, Nutshell est la résultante d'un constat d'inefficacité du marché du projet informatique et a pour essentielle valeur d'axer ses oeuvres vers la qualité du produit. Pour ce faire, le projet est le centre nerveux de toutes les reflexions, même les plus fondamentales, jusque dans le choix de la technologie la plus adaptée.
          </v-card-text>
        </v-card>
        <v-layout 
          class="px-3 pt-4 my-3 text-xs-center" 
          justify-center>
          <v-flex 
            shrink 
            class="relative">
            <v-icon 
              color="primary-light" 
              class="absolute xx-large bottom"
              style="top:-50px;left:-45px"
            >format_quote</v-icon>
            <span class="bold relative top">Puisque pour nous chaque idée est importante, nous dédions entièrement <span class="secondary-light--text bold">l'équipe Nutshell à sa réalisation</span> !</span>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import DisplayTitle from './display/DisplayTitle'
export default {
  components: { DisplayTitle },
  computed: {
    mediaSpacing() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'py-0'
        case 'sm':
          return 'py-3'
        default:
          return 'py-5'
      }
    },
    mediaSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'subheading'
        default:
          return 'title'
      }
    },
    mediaPictoSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 100
        case 'sm':
          return 140
        default:
          return 220
      }
    }
  }
}
</script> 

<style lang="stylus" scoped>

.regular
  font-family: 'Neue Plak Regular' !important

.xx-large
  font-size: 150px !important

.bottom
  z-index: 0

.top
  z-index: 10

.bold, .bold *
  font-family: 'Neue Plak Bold' !important

.quote .string::before
  bottom: 14px;
  left: -100px

.string::before
  content: "";
  position: absolute;
  z-index: 1;
  display: block;
  width: 70px;
  height: 2px;
  border: solid 1px #fddd3a
  -webkit-animation: MoveX 2s ease-in-out infinite;
  -moz-animation: MoveX 2s ease-in-out infinite;
  animation: MoveX 2s ease-in-out infinite;
  transition: all cubic-bezier(.7,0,.3,1) .2s;

</style>
