<template>
  <v-layout 
    row 
    wrap 
    align-center 
    justify-center 
    class="static">
    <svg 
      :height="1300" 
      :width="500" 
      class="ml-3 absolute animated">
      <image 
        :height="1300" 
        :width="500" 
        x="0" 
        y="0" 
        xlink:href="/flash.svg"/>
    </svg>
    <v-flex 
      xs11
      sm10
      md9
      lg8
      xl7
      class="front" :class="mediaSpacing">
      <v-layout 
        column 
        wrap 
        align-start 
        justify-center 
        class="primary--text">
        <v-flex 
          shrink 
          class="pt-5">
          <template>
            <div class="extra-black" :class="mediaTitleSize">WE LOVE <span class="hidden-sm-and-down">TECHNOLOGIES</span><span class="hidden-md-and-up">TECHS</span></div>
            <div class="secondary--text regular" :class="mediaSize">
              Mais c'est <span class="primary--text bold">votre projet</span> qui déterminera la technologie que nous utiliserons pour le mener à bien !
            </div>
          </template>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 lg12>
          <v-card flat class="transparent" :class="mediaSubtitleSpacing">
            <v-card-text class="pa-0 primary--text text-xs-center" :class="mediaSubtitleSize">
              Voici celles avec lesquelles nos derniers projets ont été réalisés
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout 
        raw 
        wrap 
        justify-space-around 
        align-center 
        class="pb-4">
        <v-flex 
          shrink
          v-for="tech in techs" 
          :key="tech.id"
          class="mb-4 px-3">
          <v-card flat class="transparent">
            <v-card-text class="pa-0 text-xs-center">
              <v-img
                :src="`/techs/${tech.image}`"
                :alt="tech.name"
                :height="mediaPictoSize"
                :width="mediaPictoSize"
                class="margin-auto"
              />
              <span class="primary--text subheading extended">{{ tech.name }}</span>
            </v-card-text>
          </v-card>
          
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      techs: [
        {
          id: 0,
          image: 'picto-elixir.png',
          name: 'Elixir'
        },
        {
          id: 1,
          image: 'picto-node.png',
          name: 'NodeJs'
        },
        {
          id: 2,
          image: 'picto-vue.png',
          name: 'VueJs'
        },
        {
          id: 3,
          image: 'picto-graphql.png',
          name: 'Graphql'
        },
        {
          id: 4,
          image: 'picto-serverless.png',
          name: 'Serverless'
        },
        {
          id: 5,
          image: 'picto-aws.png',
          name: 'Aws'
        },
        {
          id: 6,
          image: 'picto-docker.png',
          name: 'Docker'
        },
        {
          id: 7,
          image: 'picto-metabase.png',
          name: 'Metabase'
        }
      ]
    }
  },
  computed: {
    mediaSpacing() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return ''
        case 'sm':
          return 'py-3 my-3'
        default:
          return 'py-4 my-4'
      }
    },
    mediaPictoSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm':
          return 80
        default:
          return 100
      }
    },
    mediaTitleSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'display-1-5'
        case 'sm':
          return 'display-2'
        default:
          return 'display-3'
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
    mediaSubtitleSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'headline'
        case 'sm':
          return 'display-0'
        default:
          return 'display-1'
      }
    },
    mediaSubtitleSpacing() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'pt-4 pb-3'
        case 'sm':
          return 'pt-5 pb-3'
        default:
          return 'pt-5 pb-4'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.extra-black,
.extra-black * {
  font-family: 'Neue Plak Wide ExtraBlack' !important;
}

.regular {
  font-family: 'Neue Plak Regular' !important
}

.bold {
  font-family: 'Neue Plak Bold' !important;
}

.absolute {
  position: absolute;
  z-index: 0;
}

.front {
  position: relative;
  z-index: 1;
}

.margin-auto {
  margin: auto
}

.animated {
  top: -150px;
  right: 10%;
  -webkit-animation: Float 20s ease-in-out infinite
  -moz-animation: Float 20s ease-in-out infinite 
  animation: Float 20s ease-in-out infinite
}

@-webkit-keyframes Float {
  0% {
    -webkit-transform:translateZ(0);
    transform:translateZ(0)
  } 50% {
    -webkit-transform:translate3d(-100px, -20px, 0);
    transform:translate3d(-100px, -20px, 0);
  } 100% {
    -webkit-transform:translateZ(0);
    transform:translateZ(0)
  }
}

@-moz-keyframes Float {
  0% {
    -webkit-transform:translateZ(0);
    transform:translateZ(0)
  } 50% {
    -webkit-transform:translate3d(-100px, -20px, 0);
    transform:translate3d(-100px, -20px, 0);
  } 100% {
    -webkit-transform:translateZ(0);
    transform:translateZ(0)
  }
}

@keyframes Float {
  0% {
    -webkit-transform:translateZ(0);
    transform:translateZ(0)
  } 50% {
    -webkit-transform:translate3d(-100px, -20px, 0);
    transform:translate3d(-100px, -20px, 0);
  } 100% {
    -webkit-transform:translateZ(0);
    transform:translateZ(0)
  }
}
</style>
