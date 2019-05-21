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
        <span id="in-production">Nutshell en Production</span>
      </display-title>
      <v-card 
        :class="mediaSize"
        class="transparent pb-1" 
        flat>
        <v-card-text class="regular">
          De la startup à la holding en passant par la PME, ils nous ont fait confiance pour réaliser leurs projets. Quelque soit leurs envergures, ils sont souvent d'une <span class="secondary--text bold">importance cruciale</span> pour nos clients... Retrouvez une selection de ces idées que nous avons concrétisées.
        </v-card-text>
      </v-card>
      <div 
        :class="[mediaSize, isXs ? 'small' : '']" 
        shrink 
        class="clickable subheading bold secondary-light--text hello-right mb-4" 
        @click="openContact()">Une idée en tête ?</div>
      <v-toolbar 
        flat 
        class="transparent hidden-sm-and-up mb-4">
        <v-spacer/>
        <v-toolbar-items>
          <v-btn 
            v-for="(item, index) in projects" 
            :key="index" 
            fab>
            <img
              :class="isActive(index) ? '' : 'filtered'"
              :src="`/company/${item.image}`"
              width="65px"
              @click="select(index)"
            >
          </v-btn>
        </v-toolbar-items>
        <v-spacer/>
      </v-toolbar>
      <v-layout class="relative mx-3 pb-5 mt-3">
        <!-- <v-card flat class="hidden-md-and-down secondary-light hello-left clickable" @click="openContact()">
          <v-card-text class="subheading extended">Une idée en tête ?</v-card-text>
        </v-card> -->
        <v-flex class="container-left relative">
          <div 
            v-for="(item, index) in projects" 
            :key="index">
            <v-layout justify-space-between>
              <v-flex shrink>
                <v-slide-x-transition hide-on-leave>
                  <v-card 
                    v-if="isActive(index)" 
                    :class="mediaMargin" 
                    class="transparent pb-4" 
                    flat>
                    <v-card-text 
                      class="px-0 display-0 bold accent--text py-0" 
                      v-html="item.company"/>
                    <v-card-text 
                      class="px-0 title regular white--text py-0" 
                      v-html="item.name"/>
                  </v-card>
                </v-slide-x-transition>
              </v-flex>
              <v-flex 
                v-if="isActive(index)" 
                shrink 
                class="hidden-xs-only">
                <v-btn 
                  v-for="(item, index) in projects" 
                  :key="index" 
                  large 
                  fab>
                  <img
                    :class="isActive(index) ? '' : 'filtered'"
                    :src="`/company/${item.image}`"
                    width="75px"
                    @click="select(index)"
                  >
                </v-btn>
              </v-flex>
            </v-layout>
            <v-slide-x-reverse-transition hide-on-leave>
              <div v-if="isActive(index)">
                <v-card
                  :class="mediaMargin"
                  flat
                  class="transparent"
                  v-html="item.description"
                />
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
  return Math.floor(Math.random() * Math.floor(max))
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
          description: `
              <div class="headline secondary--text">
                De l'idée au MVP
              </div>
              <div class="subheading regular">
                Jitips est venu nous trouver afin que nous concrétisions leur produit téchnologique. Nous les avons accompagner dans la selection des "killer feature" afin de réaliser leur MVP et leur permettre de valider leur marché.
              </div>
              <div class="mt-4 headline secondary--text">
                Une api, des modules...
              </div>
              <div class="subheading regularreg">
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
          description: `
              <div class="headline secondary--text">
                Du papier au numérique
              </div>
              <div class="subheading regular">
                Pour <a href="https://actinuum.com" target="_blank" class="secondary--text">Actinuum</a>, nous sommes intervenu afin de digitaliser la plus grande partie de leurs processus de formations. Graĉe à l'ERP sur mesure que nous avons réalisé pour eux, ils ont pu abandonner leur gestion de formation par fichiers word/excel et augmenter considérablement le nombre de sessions de formation qu'ils pouvaient gérer.
              </div>
              <div class="mt-4 headline secondary--text pt-2">
                Un ERP et un LMS
              </div>
              <div class="subheading regular">
                Parmi toutes les fonctionnalités que propose cet outil permettant la gestion des sessions de formation comme : 
                <ul>
                  <li>la reprographie</li>
                  <li>la gestion des intervenants</li>
                  <li>la gestion des dates de formations</li>
                  <li>la génération des conventions de formation et autres documents</li>
                </ul>
                <br />Nous l'avons doté d'un brique d'e-learning permettant à Actinuum d'élargir leur offres de prestations en ajoutant le Blended Learning à leur catalogue.
              </div>
              <div class="mt-4 headline secondary--text pt-2">
                Aujourd'hui
              </div>
              <div class="subheading regular">
                Nous continuons régulièrement de faire évoluer l'outil afin d'accompagner Actinuum dans leurs nouveaux projets, mais aussi pour être toujours à jour des dernières réformes de la formation professionnelle.
              </div>
            `
        },
        {
          name: 'Une plateforme de certification',
          company: 'Keyro',
          image: 'keyro.png',
          techs: '#graphql #vueJs #dynamoDb',
          page: 'keyro',
          url: 'https://keyro.fr',
          description: `
              <div class="headline secondary--text">
                La certification des salariés
              </div>
              <div class="subheading regular">
                En collaboration avec <a href="https://keyro.fr" target="_blank" class="secondary--text">Keyro</a> et le <a href="https://www.fafiec.fr/" target="_blank" class="secondary--text">Fafiec</a>, nous avons réalisé <a href="https://fafiecertif.fr" target="_blank" class="secondary--text">FafieCertif</a>, une plateforme de certification complétement digitale à destination des salariés de la branche numérique.
                <br />
                <br />Le principe est simple, les entreprises inscrivent leurs salariés et ceux-ci recoivent directement leurs accès et leurs droits de passage aux certifications.
              </div>
              <div class="mt-4 headline secondary--text">
                Des prises en charges...
              </div>
              <div class="subheading regular">
                La plateforme supporte deux types de prises en charge différentes. À travers un catalogue de certification, le candidat peut s'incrire de manière autonome grâce au programme de financement CPF ou laisser son entreprise s'occuper pour lui du financement de son prochain titre.
                <br />
                FafieCertif est parfaitement intégré au système de prise en charge de l'OPCA pour offrir la meilleure expérience d'utilisation.
              </div>
              <div class="mt-4 headline secondary--text">
                Sécurisé et autonome
              </div>
              <div class="subheading regular">
                Le candidat peut passer son examen sur son poste de travail ou chez lui sur son téléphone, c'est pourquoi des sécurités ont été mises en place afin d'éviter la triche...
                <br />Si tout se passe bien les résultats de l'examen sont calculés de façon complétement automatisé et un rapport est présenté au candidat lui permettant de prendre connaissance de ses points forts et de ses lacunes.
                <br />
                <br />Si la tentative s'avère infructueuse, le candidat se vera proposer un ensemble de formations spécifiquement choisies pour combler les manques et le préparer à sa prochaine tentative.
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
      routerPush: 'router/push'
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
