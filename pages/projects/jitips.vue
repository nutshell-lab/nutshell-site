<template>
  <v-layout 
    col 
    wrap 
    fill-height>
    <header />
  </v-layout>
</template>

<script>
import 'aos/dist/aos.css'

import Header from '../../components/header/Header'
import BlocTitle from '../../components/BlocTitle'
import Bloc from '../../components/Bloc'
import BlocInANutshell from '../../components/BlocInANutshell'
import BlocPhilosophy from '../../components/BlocPhilosophy'
import BlocProduction from '../../components/BlocProduction'
import BlocHowItWorks from '../../components/how-it-works/BlocHowItWorks'
import BlocContact from '../../components/contact/BlocContact'
import BlocFooter from '../../components/BlocFooter'

export default {
  components: {
    Header,
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
