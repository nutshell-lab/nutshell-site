<template>
  <v-layout 
    id="title"
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
      class="py-4 my-4 front">
      <v-layout 
        column 
        wrap 
        align-start 
        justify-center 
        class="primary--text">
        <v-flex 
          :class="mediaSpacing" 
          shrink>
          <template class="front">
            <div 
              :class="mediaTitleSize" 
              class="extra-black">WE</div>
            <div 
              :class="mediaTitleSize" 
              class="extra-black">BUILD</div>
            <div 
              :class="mediaItemContainer" 
              class="pt-1">
              <template>
                <no-ssr>
                  <vue-typer
                    id="typer"
                    :text="item" 
                    :type-delay="100" 
                    :pre-type-delay="2500"
                    :pre-erase-delay="titlePreEraseDelay"
                    :erase-delay="titleEraseDelay"
                    :class="[mediaItemSize]"
                    class="typer"
                    erase-style="backspace"
                    @typed-char="onTypedChar"
                    @erased="rotate"
                  />
                </no-ssr>
              </template>
            </div>
          </template>
        </v-flex>
      </v-layout>
      <!-- <v-layout class="absolute">
        <v-flex shrink class="primary--text body-2 bold" text-xs-right>
          Voir<br />nos offres
        </v-flex>
        <v-flex shrink>
          <svg 
            :height="70" 
            :width="50">
            <image 
              :height="70" 
              :width="50" 
              x="0" 
              y="0" 
              xlink:href="/scroll-down.svg"/>
          </svg>
        </v-flex>
      </v-layout> -->
    </v-flex>
  </v-layout>
</template>

<script>
import shuffle from 'lodash/shuffle'
if (process.browser) {
  var VueTyper = require('vue-typer').VueTyper
}

const items = [
  'THINGS',
  'DOABLE PROJECTS',
  'WORKING PROTOTYPES',
  'NO HOUSES',
  'UNSUSPECTED IDEAS',
  'ENTIRE BUSINESSES',
  'TARGETABLE DREAMS',
  'SOLID PRODUCTS',
  '(PACIFIC) ROBOTS',
  'EXCELLENT COOKIES',
  'CODE QUALITY',
  'ZEST FOR LIFE',
  'DEATH STARS',
  'MACHINE NETWORKS',
  'EFFICIENT TOOLS',
  'TASTY ELIXIR',
  'REAL-TIME PROCESSES',
  'ORIENTEERING IOT',
  'BUCCOLIC WORKSHOPS',
  'FUGGACIOUS BUGS',
  '(SERIOUS?) GAMES',
  'INTERNATIONAL APPS',
  'CUTTING-EDGE TECHS',
  'TRADING BOTS',
  'TURING MACHINES',
  'GLORIOUS EXPERIENCE',
  'CONNECTED OBJECTS',
  'DOMOTIC DOGHOUSE',
  'DEVOPS PIPELINES',
  'MONITORING POWERS',
  'REAL-TIME METRICS',
  'ZOMBIE WORKERS',
  'HONEYPOTS',
  'BRILLIANT PUNCHLINES',
  'TECH ADVICE',
  'CTO SKILLS',
  'DARK MODES',
  'SEO COMPLIANTLY',
  'TIMEZONED OP',
  'LIGHTFAST SPACESHIPS'
]

export default {
  components: {
    VueTyper
  },
  data() {
    return {
      shuffledItems: shuffle(items),
      currentItem: 0,
      showDescription: false,
      titlePreEraseDelay: 2000,
      titleEraseDelay: 80,
      countWord: 0,
      newWord: true
    }
  },
  computed: {
    item() {
      return this.shuffledItems[this.currentItem]
    },
    mediaTitleSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'title-small'
        default:
          return 'display-4'
      }
    },
    mediaItemSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'item-small'
        default:
          return 'display-3-5'
      }
    },
    mediaSpacing() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'py-1 my-1'
        default:
          return 'pt-5 pb-4 mt-4 mb-5'
      }
    },
    mediaItemContainer() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'item-container-small'
        default:
          return 'item-container'
      }
    }
  },
  methods: {
    onTypedChar(typedChar, typedCharIndex) {
      const typer = document.getElementById('typer')
      const lessNodes = typer.lastChild.childNodes

      if (typedCharIndex == 0 || typedChar == ' ' || lessNodes.length == 1) {
        const finalNodes = typer.firstChild
        const listNodes = finalNodes.childNodes
        const newNode = document.createElement('span')
        newNode.className = 'nowrap'

        let x = this.countWord
        const countNodes = listNodes.length
        while (x < countNodes) {
          if (listNodes[this.countWord].innerHTML != ' ')
            newNode.insertAdjacentElement(
              'beforeend',
              listNodes[this.countWord]
            )
          else this.countWord++
          x++
        }

        finalNodes.insertAdjacentElement('beforeend', newNode)
        this.countWord++
      }
    },
    rotate() {
      this.onTypedChar(' ')
      const nextIndex = this.currentItem + 1
      this.currentItem = nextIndex === this.shuffledItems.length ? 0 : nextIndex
      this.showDescription = false
      this.countWord = 0
    }
  }
}
</script>

<style lang="stylus" scoped>

>>> span.nowrap {
  white-space: nowrap
}

.title-small {
  font-size: 64px !important;
  font-weight: 400;
  line-height: 1em !important;
  letter-spacing: -0.02em !important;
}

.item-small {
  font-size: 56px !important;
  font-weight: 400;
  line-height: 1 !important;
  letter-spacing: -0.02em !important;
}

.extra-black {
  font-family: 'Neue Plak Wide ExtraBlack' !important;
}

.bold {
  font-family: 'Neue Plak Extended Black' !important;
}


.item-container {
  height: 220px 
  overflow: hidden
}

.item-container-small {
  height: 120px
  overflow: hidden
}

.absolute {
  position: absolute;
  z-index: 0;
}

.static {
  position: static;
}

.front {
  position: relative;
  z-index: 1;
}

.animated {
  top: -150px;
  right: 10%;
  -webkit-animation: Float 20s ease-in-out infinite;
  -moz-animation: Float 20s ease-in-out infinite;
  animation: Float 20s ease-in-out infinite;
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
