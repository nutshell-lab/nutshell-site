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
      <display-title color="accent">
        <span 
          id="philosophy" 
          class="primary--text">Philosophie</span>
      </display-title>
      <v-card 
        :class="mediaSize"
        class="transparent regular" 
        flat>
        <v-card-text class="primary--text pt-1">
          Les valeurs de Nutshell s'orientent autour de l'expertise technique et de l'entrepreneuriat de ses membres, qui n'en sont qu'aux premiers pas de leur périple et ont la volonté d'acquérir toujours plus de compétences et de connaissances dans ces deux domaines.
        </v-card-text>
        <v-card-text 
          :class="mediaTitle" 
          class="primary--text text-xs-center semibold">
          Un projet <span class="secondary--text bold">ambitieux</span> est construit sur <span class="secondary--text bold">trois piliers solides</span>.
        </v-card-text>
      </v-card>
      <v-layout 
        wrap 
        row
        justify-space-around
        class="px-3">
        <v-flex 
          v-for="(value, index) in values"
          :key="index"
          :class="mediaMargin" 
          xs12 
          sm6 
          md4 
          lg4
        >
          <v-layout 
            row 
            wrap 
            justify-center>
            <v-flex shrink>
              <center>
                <svg 
                  :height="mediaPictoSize" 
                  :width="mediaPictoSize">
                  <image 
                    :height="mediaPictoSize" 
                    :width="mediaPictoSize" 
                    :xlink:href="`/picto/${value.picto}`" 
                    x="0" 
                    y="0"/>
                </svg>
              </center>
              <div 
                :class="mediaItemSize" 
                class="relative category bold primary--text" 
                v-html="value.title"/>
              <v-card 
                flat 
                class="relative description transparent semibold subheading primary--text py-1 pt-1">
                <div 
                  v-for="(item, i) in value.items"
                  :key="i"
                  class="relative item string"
                >{{ item }}</div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import DisplayTitle from './display/DisplayTitle'
export default {
  components: { DisplayTitle },
  data() {
    return {
      values: [
        {
          title: "L'expertise tech",
          picto: 'expertise.svg',
          items: [
            "L'art du code",
            "L'intelligence des choix",
            "La simplicité de l'exécution",
            "L'innovation technologique"
          ]
        },
        {
          title: 'La vision métier',
          picto: 'vision.svg',
          items: [
            'La connaissance du métier',
            "L'anticipation des besoins",
            "L'évolutivité",
            "L'analyse du besoin"
          ]
        },
        {
          title: "L'encadrement",
          picto: 'help.svg',
          items: [
            'La réactivité',
            'Le devoir de conseil',
            "L'automatisation",
            'Le suivi'
          ]
        }
      ]
    }
  },
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
    mediaTitle() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'headline py-3 mb-2'
        case 'sm':
          return 'display-0 py-4'
        default:
          return 'display-1 py-5'
      }
    },
    mediaPictoSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm':
          return 110
        default:
          return 150
      }
    },
    mediaMargin() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm':
          return 'pt-3 pb-2'
        default:
          return 'pb-5 pt-2'
      }
    },
    mediaItemSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm':
          return 'display-0'
        default:
          return 'display-1'
      }
    }
  }
}
</script> 

<style lang="stylus" scoped>

.relative {
  position: relative
}

.margin-auto {
  margin: auto !important
}

.regular *
  font-family: 'Neue Plak Regular' !important

.bold
  font-family: 'Neue Plak Bold' !important

.semibold, .semibold *
  font-family: 'Neue Plak SemiBold' !important

.extra-black
  font-family: 'Neue Plak ExtraBlack' !important

.border-left
  border-left: 2px #e69632 solid

.item.string::before {
  top: 14px;
  left: 5px
}

.item {
  display: block
}

.item.string {
  padding-left: 30px
}

.item.string::before {
  content: "";
  position: absolute;
  z-index: 1;
  display: block;
  width: 15px;
  height: 1px;
  border: solid 1px #e69632
}

.description {
  display: inline-block
}
</style>
