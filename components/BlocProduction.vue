<template>
  <v-layout 
    wrap 
    row 
    :class="mediaSpacing" 
    justify-center>
    <v-flex 
      xs11
      sm10
      md9
      lg8
      xl7
      class="px-1 my-3">
      <display-title color="secondary">
        <span id="in-production">Nutshell en Production</span>
      </display-title>
      <v-card 
        :class="mediaSize"
        class="transparent pb-1" 
        flat>
        <v-card-text class="regular">
          De la startup à la holding en passant par la PME, ils nous ont fait confiance pour réaliser leurs projets. Que ceux-ci soient <span class="secondary--text bold">ambitieux</span>, <span class="secondary--text bold">novateurs</span> ou <span class="secondary--text bold">classique</span>, ils sont souvent d'une importance cruciale pour nos clients... Retrouvez une selection de ces idées que nous avons concrétisées
        </v-card-text>
      </v-card>
      <div shrink class="clickable subheading bold secondary-light--text hello-right mb-4" :class="[mediaSize, isXs ? 'small' : '']" @click="openContact()">Une idée en tête ?</div>
      <v-toolbar flat class="transparent hidden-sm-and-up mb-4">
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn fab v-for="(item, index) in projects" :key="index">
            <img
              :class="isActive(index) ? '' : 'filtered'"
              width="65px"
              :src="`/company/${item.image}`"
              @click="select(index)"
            />
          </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-layout class="relative mx-3 pb-5 mt-3">
        <!-- <v-card flat class="hidden-md-and-down secondary-light hello-left clickable" @click="openContact()">
          <v-card-text class="subheading extended">Une idée en tête ?</v-card-text>
        </v-card> -->
        <v-flex class="container-left relative">
          <div v-for="(item, index) in projects" :key="index">
            <v-layout justify-space-between>
              <v-flex shrink>
                <v-slide-x-transition hide-on-leave>
                  <v-card :class="mediaMargin" v-if="isActive(index)" class="transparent pb-4" flat>
                    <v-card-text class="px-0 headline bold accent--text py-0" v-html="item.company"></v-card-text>
                    <v-card-text class="px-0 subheading regular white--text py-0" v-html="item.name"></v-card-text>
                  </v-card>
                </v-slide-x-transition>
              </v-flex>
              <v-flex shrink class="hidden-xs-only" v-if="isActive(index)">
                <v-btn large fab v-for="(item, index) in projects" :key="index">
                  <img
                    :class="isActive(index) ? '' : 'filtered'"
                    width="75px"
                    :src="`/company/${item.image}`"
                    @click="select(index)"
                  />
                </v-btn>
              </v-flex>
            </v-layout>
            <v-slide-x-reverse-transition hide-on-leave>
              <div v-if="isActive(index)">
                <v-card
                  flat
                  :class="mediaMargin"
                  class="transparent"
                  v-html="item.description"
                >
                </v-card>
              </div>
            </v-slide-x-reverse-transition>
          </div>
        </v-flex>
        <!-- <v-flex shrink class="container-right relative hidden-md-and-down">
          <v-list two-line flat class="transparent py-0 relative">
            <template v-for="(item, index) in projects" >
              <v-divider
                class="secondary-light"
                v-if="index > 0"
                :key="index"
              ></v-divider>
              <v-list-tile
                :key="item.name"
                class="px-1 py-1 clickable relative item"
                :class="isActive(index) ? 'active' : ''"
                @click="select(index)"
                v-ripple
              >
                <v-list-tile-content class="mx-3 item-content">
                  <v-list-tile-sub-title class="title bold accent--text" v-html="item.company"></v-list-tile-sub-title>
                  <v-list-tile-sub-title class="subheading regular white--text" v-html="item.name"></v-list-tile-sub-title>
                </v-list-tile-content>
                  <a target="_blank" :href="item.url" :key="item.page">
                    <transition name="translate" >
                      <v-img
                        class="float-right"
                        v-if="isActive(index)"
                        width="80px"
                        :src="`/company/${item.image}`"
                      />
                    </transition>
                  </a>
              </v-list-tile>
            </template>
          </v-list>
        </v-flex> -->
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'
import DisplayTitle from './display/DisplayTitle'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default {
  components: { DisplayTitle },
  data() {
    return {
      projects: [
        {
          name: 'Un service de recommandation',
          company: 'Jitips',
          image: 'jitips.png',
          techs: '#nodeJs #vueJs #docker',
          page: 'jitips',
          url: 'https://jitips.com',
          description:
            `
              <div class="title secondary--text">
                De l'idée au MVP
              </div>
              <div class="subheading regular">
                Réalisation d'une api permettant aux e-commerçant de proposer un service de recommandation de leur produits afin de fidéliser leurs clients et d'en acquérir de nouveau.
              </div>
              <div class="mt-4 title secondary--text">
                Une api, des modules...
              </div>
              <div class="subheading regular">
                Réalisation d'une api permettant aux e-commerçant de proposer un service de recommandation de leur produits afin de fidéliser leurs clients et d'en acquérir de nouveau.
              </div>
            `
        },
        {
          name: 'Un ERP pour la formation',
          company: 'Actinuum',
          image: 'actinuum.png',
          techs: '#dotNetCore #WCF',
          page: 'actinuum',
          url: 'https://actinuum.com',
          description:
            `
              <div class="title secondary--text">
                De l'idée au MVP
              </div>
              <div class="subheading regular">
                Réalisation d'une api permettant aux e-commerçant de proposer un service de recommandation de leur produits afin de fidéliser leurs clients et d'en acquérir de nouveau.
              </div>
              <div class="mt-4 title secondary--text">
                Une api, des modules...
              </div>
              <div class="subheading regular">
                Réalisation d'une api permettant aux e-commerçant de proposer un service de recommandation de leur produits afin de fidéliser leurs clients et d'en acquérir de nouveau.
              </div>
              <div class="title secondary--text">
                De l'idée au MVP
              </div>
              <div class="subheading regular">
                Réalisation d'une api permettant aux e-commerçant de proposer un service de recommandation de leur produits afin de fidéliser leurs clients et d'en acquérir de nouveau.
              </div>
              <div class="mt-4 title secondary--text">
                Une api, des modules...
              </div>
              <div class="subheading regular">
                Réalisation d'une api permettant aux e-commerçant de proposer un service de recommandation de leur produits afin de fidéliser leurs clients et d'en acquérir de nouveau.
              </div>
              <div class="title secondary--text">
                De l'idée au MVP
              </div>
              <div class="subheading regular">
                Réalisation d'une api permettant aux e-commerçant de proposer un service de recommandation de leur produits afin de fidéliser leurs clients et d'en acquérir de nouveau.
              </div>
              <div class="mt-4 title secondary--text">
                Une api, des modules...
              </div>
              <div class="subheading regular">
                Réalisation d'une api permettant aux e-commerçant de proposer un service de recommandation de leur produits afin de fidéliser leurs clients et d'en acquérir de nouveau.
              </div>
            `
        },
        {
          name: "Un outil de certification",
          company: 'Keyro',
          image: 'keyro.png',
          techs: '#graphql #vueJs #dynamoDb',
          page: 'keyro',
          url: 'https://keyro.fr',
          description:
            `
              <div class="title secondary--text">
                De l'idée au MVP
              </div>
              <div class="subheading regular">
                Réalisation d'une api permettant aux e-commerçant de proposer un service de recommandation de leur produits afin de fidéliser leurs clients et d'en acquérir de nouveau.
              </div>
              <div class="mt-4 title secondary--text">
                Une api, des modules...
              </div>
              <div class="subheading regular">
                Réalisation d'une api permettant aux e-commerçant de proposer un service de recommandation de leur produits afin de fidéliser leurs clients et d'en acquérir de nouveau.
              </div>
            `
        }
      ],
      projectActivated: 0
    }
  },
  mounted() {
    this.projectActivated = getRandomInt(this.projects.length)
  },
  methods: {
    ...mapActions({
      routerPush: 'router/push',
    }),
    isOdd(val) {
      return val % 2 === 1
    },
    visibleLeft(index) {
      return this.isOdd(index)
    },
    visibleRight(index) {
      return !this.isOdd(index)
    },
    isActive(index) {
      return this.projectActivated === index
    },
    select(index) {
      this.projectActivated = index
    },
    openContact() {
      this.$vuetify.goTo('#contact', this.options)
      setTimeout(() => {
        this.$emit('openContact')
      }, this.options.duration)
    }
  },
  computed: {
    options() {
      return {
        duration: 1000,
        offset: this.mediaOffset,
        easing: 'easeInOutCubic'
      }
    },
    isXs() {
      return this.$vuetify.breakpoint.name === 'xs'
    },
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
    mediaMargin() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'px-4 py-1'
        case 'sm':
          return 'px-4 mx-2 py-1'
        default:
          return 'px-5 py-3'
      }
    },
    mediaOffset() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 50
        case 'sm':
          return 100
        default:
          return 150
      }
    }
  }
}
</script> 

<style lang="stylus" scoped>


.container-left * {
  transition: all .5s cubic-bezier(.7,0,.3,1) !important;
}

.filtered {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}

.translate-enter-active, .translate-leave-active {
  -webkit-transform-origin: left center;
  transform-origin: top center;
  transition: all cubic-bezier(.7,0,.3,1) .4s;
}

.translate-enter, .translate-leave-to, .translate-leave-active {
  transform: translateX(-100%);
  opacity: 0
  webkit-transform: translateX(-100%);
}

.container-right {
  min-width: 320px !important;
  min-height: 30%
}

.container-right::after {
  z-index: 2;
  content: '';
  position: absolute;
  left: -7px;
  height: calc(100% +  6px);
  top: -3px
  -webkit-transform: skew(0, 40deg);
  transform: skew(0, 40deg);
  background-color: #5e2e70 !important;
  border-right: 2px solid #f5b537
  border-top: 2px solid #f5b537
  width: 10px;
  transition: all cubic-bezier(.7,0,.3,1) .3s !important;
}

.container-left::before {
  z-index: 2;
  content: '';
  position: absolute;
  left: -7px;
  height: 50%;
  -webkit-transform: skew(0, 40deg);
  transform: skew(0, 40deg);
  background-color: #5e2e70 !important;
  border-bottom: 2px solid #f5b537
  border-left: 2px solid #f5b537
  width: 10px;
  transition: all cubic-bezier(.7,0,.3,1) .3s !important;
}

.container-left::after {
  z-index: 2;
  content: '';
  position: absolute;
  left: -7px;
  height: 50%;
  bottom: 0px
  -webkit-transform: skew(0, 40deg);
  transform: skew(0, 40deg);
  background-color: #5e2e70 !important;
  border-right: 2px solid #f5b537
  width: 10px;
  transition: all cubic-bezier(.7,0,.3,1) .3s !important;
}

.relative {
  position relative
}

.item-content {
  position: relative
  z-index: 1
}

.item.active, .item.active:hover {
  background-color: #9676a1
}

.item:hover {
  background: rgba(255,255,255,0.08);
}

.item:hover >>> a {
  background: transparent !important;
}

>>> .v-btn__content {
  font-family: 'Neue Plak Regular' !important
}

.extended {
  font-family: 'Neue Plak Extended Bold' !important
}

.bordered {
  border: 4px dashed #e69632
  border-radius: 10px !important
}

.regular, .regular *  {
  font-family: 'Neue Plak Regular' !important
}

.bold {
  font-family: 'Neue Plak Bold' !important
}

.hello-right.small {
  left: calc(100% - 155px)
}

.hello-right.small:hover {
  left: calc(100% - 175px)
}

.hello-right {
  left: calc(100% - 195px)
  position: relative;
  transition: all cubic-bezier(.7,0,.3,1) .3s;
}

.hello-right::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: -7px;
  width: 200%;
  height: 2px;
  background: #f5b537;
  transition: all cubic-bezier(.7,0,.3,1) .3s;
  -webkit-transform: skew(-40deg);
  transform: skew(-40deg);
}

.hello-right:hover {
  left: calc(100% - 225px)
}

.hello-left {
  width: 190px
  position: absolute;
  top: 16px
  left: -190px
  transition: all cubic-bezier(.7,0,.3,1) .3s;
}

.hello-left:hover {
  width: 210px
  position: absolute;
  top: 16px
  left: -210px
}

.float-right {
  position: absolute;
  top: -38px
  right: -40px
  z-index: 3
}

.company-container {
  position: relative
  display: inline-block
}

.company {
  text-decoration: none
}

.company::after {
  content: '';
  display: block;
  position: absolute;
  bottom: -1px;
  right: 0;
  width: 100%;
  height: 2px;
  background: #fddd3a;
  transition: all cubic-bezier(.7,0,.3,1) .3s;
}

.company:hover::after {
  transform: translateX(-100%);
  opacity: 0;
  webkit-transform: translateX(-100%);
}

.company:hover {
  color: white !important;
}

</style>
