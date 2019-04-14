<template>
  <v-layout col wrap fill-height>
    <header-bar />
    <bloc divider="white" :divider-px="330" color="secondary" class="organic"><bloc-title /></bloc>
    <bloc divider="accent"><bloc-target-startup /></bloc>
    <bloc color='accent' height="170" divider="primary"><bloc-contact /></bloc>
    <bloc color="secondary" divider="accent" :divider-percent="40"><bloc-target-company /></bloc>
    <bloc color="white" divider="secondary" :divider-percent="40"><bloc-ref /></bloc>
    <bloc color="primary" divider="white" :divider-percent="80"><bloc-how /></bloc>
    <bloc color='#666666' height="60" divider="primary"><bloc-footer /></bloc>
  </v-layout>
</template>

<script>
import 'aos/dist/aos.css'

import BuildingAlert from '../components/BuildingAlert'
import HeaderBar from '../components/HeaderBar'
import Bloc from '../components/Bloc'
import BlocTitle from '../components/BlocTitle'
import BlocTargetStartup from '../components/BlocTargetStartupTest'
import BlocTargetCompany from '../components/BlocTargetCompanyTest'
import BlocRef from '../components/BlocRef'
import BlocDailyRoutine from '../components/BlocDailyRoutine'
import BlocHow from '../components/BlocHow'
import BlocContact from '../components/BlocContact'
import BlocFooter from '../components/BlocFooter'

export default {
  components: {
    BuildingAlert,
    HeaderBar,
    Bloc,
    BlocTitle,
    BlocTargetStartup,
    BlocTargetCompany,
    BlocRef,
    BlocDailyRoutine,
    BlocHow,
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
