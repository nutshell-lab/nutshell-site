<template>
  <v-layout col wrap fill-height>
    <header-bar />
    <bloc divider="white" :divider-px="330" color="secondary" class="organic"><bloc-title /></bloc>
    <bloc divider="accent">
      <bloc-in-a-nutshell />
    </bloc>
    <bloc divider="primary" color="secondary" :divider-percent="40">
      <bloc-philosophy />
    </bloc>
    <bloc divider="secondary" color="white" :divider-percent="80">
      <bloc-production />
    </bloc>
    <bloc color='accent' height="170" divider="white">
      <bloc-contact />
    </bloc>
    <bloc divider="accent" color="primary">
      <bloc-how-it-works />
    </bloc>
    <bloc color='#666666' height="60" divider="primary"><bloc-footer /></bloc>
  </v-layout>
</template>

<script>
import 'aos/dist/aos.css'

import HeaderBar from '../components/HeaderBar'
import BlocTitle from '../components/BlocTitle'
import Bloc from '../components/Bloc'
import BlocInANutshell from '../components/BlocInANutshell'
import BlocPhilosophy from '../components/BlocPhilosophy'
import BlocProduction from '../components/BlocProduction'
import BlocHowItWorks from '../components/BlocHowItWorks'
import BlocContact from '../components/BlocContact'
import BlocFooter from '../components/BlocFooter'

export default {
  components: {
    HeaderBar,
    Bloc,
    BlocTitle,
    BlocPhilosophy,
    BlocInANutshell,
    BlocProduction,
    BlocHowItWorks,
    BlocContact,
    BlocFooter
  },
  mounted() {
    import('aos').then(AOS => AOS.init())
  }
}
</script>

<style scoped>
h1 {
  font-family: 'Neue Plak Extended Thin' !important;
}
</style>
