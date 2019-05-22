<template>
  <v-layout 
    col 
    wrap 
    fill-height>
    <nut-header 
      class="header" 
      @openContact="contactTrigger = true"/>
    <bloc 
      :divider-px="mediaDividerPx" 
      divider="white" 
      color="secondary" 
      class="organic top-site"><bloc-title /></bloc>
    <bloc 
      divider="accent" 
      color="primary" 
      class="top-site">
      <bloc-in-a-nutshell />
    </bloc>
    <bloc-news 
      class="middle-site"
      @needAdvice="adviceTrigger = true"
    />
    <bloc 
      color="off-white" 
      class="middle-site">
      <bloc-how-it-works 
        :advice-triggered="adviceTrigger" 
        @advised="adviceTrigger = false"/>
    </bloc>
    <bloc 
      :divider-percent="80" 
      color="accent" 
      height="20" 
      divider="off-white" 
      class="middle-site"/>
    <bloc 
      :divider-percent="80" 
      divider="accent" 
      color="primary" 
      class="middle-site">
      <bloc-production @openContact="contactTrigger = true"/>
    </bloc>
    <bloc 
      color="accent" 
      class="middle-site">
      <bloc-contact
        :expand-triggered="contactTrigger" 
        @expanded="contactTrigger = false"/>
    </bloc>
    <bloc 
      color="off-white" 
      class="middle-site">
      <bloc-philosophy />
    </bloc>
    <bloc 
      :divider-percent="40"
      color="primary" 
      height="20" 
      divider="off-white" 
      class="middle-site"/>
    <bloc 
      :divider-percent="40" 
      :style="marginBottom" 
      divider="primary"
      color="secondary"
      class="organic2 middle-site"><bloc-techs /></bloc>
    <bloc 
      color="" 
      class="footer"><bloc-footer @openContact="contactTrigger = true"/></bloc>
    <v-slide-y-reverse-transition>
      <v-btn
        v-if="showGoTop"
        fixed
        fab
        bottom
        right
        color="white"
        class="hover-site hidden-sm-and-down"
        @click="$vuetify.goTo('#title', options)"
      >
        <v-icon 
          large 
          color="primary">expand_less</v-icon>
      </v-btn>
    </v-slide-y-reverse-transition>
  </v-layout>
</template>

<script>
// const HeaderBar = () => import("~/components/HeaderBar.vue");
// const BlocTitle = () => import("~/components/BlocTitle.vue");
// const BlocTechs = () => import("~/components/BlocTechs.vue");
// const Bloc = () => import("~/components/Bloc.vue");
// const BlocInANutshell = () => import("~/components/BlocInANutshell.vue");
// const BlocPhilosophy = () => import("~/components/BlocPhilosophy.vue");
// const BlocProduction = () => import("~/components/BlocProduction.vue");
// const BlocHowItWorks = () => import("~/components/BlocHowItWorks.vue");
// const BlocContact = () => import("~/components/BlocContact.vue");
// const BlocFooter = () => import("~/components/BlocFooter.vue");
import NutHeader from '../components/header/Header'
import BlocTitle from '../components/BlocTitle'
import BlocTechs from '../components/BlocTechs'
import Bloc from '../components/Bloc'
import BlocInANutshell from '../components/BlocInANutshell'
import BlocPhilosophy from '../components/BlocPhilosophy'
import BlocProduction from '../components/BlocProduction'
import BlocHowItWorks from '../components/how-it-works/BlocHowItWorks'
import BlocContact from '../components/contact/BlocContact'
import BlocFooter from '../components/BlocFooter'
import BlocNews from '../components/BlocNews'

export default {
  components: {
    NutHeader,
    Bloc,
    BlocTitle,
    BlocTechs,
    BlocPhilosophy,
    BlocInANutshell,
    BlocProduction,
    BlocHowItWorks,
    BlocContact,
    BlocFooter,
    BlocNews
  },
  data() {
    return {
      contactTrigger: false,
      adviceTrigger: false,
      showGoTop: false
    }
  },
  computed: {
    marginBottom() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'margin-bottom:490px;'
        case 'sm':
          return 'margin-bottom:434px;'
        default:
          return 'margin-bottom:417px;'
      }
    },
    mediaDividerPx() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm':
          return 235
        default:
          return 325
      }
    },
    mediaSnack() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm':
          return true
        default:
          return false
      }
    },
    options() {
      return {
        duration: 1000,
        offset: 200,
        easing: 'easeInOutCubic'
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.showGoTop = window.scrollY >= 50
    }
  }
}
</script>

<style lang="stylus" scoped>
h1 {
  font-family: 'Neue Plak Extended Thin' !important;
}

.header {
  z-index: 10
}

.top-site {
  z-index: 3
}

.hover-site {
  z-index: 6
} 

.middle-site {
  z-index: 5
}

.top-float {
  z-index: 4
}

.footer {
  position: fixed
  bottom: 0px
  z-index: 0
}
</style>
