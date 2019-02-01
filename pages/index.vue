<template>
  <v-layout col wrap fill-height>
      <header-bar />
      <bloc color="secondary organic" :aspectRatio="16/7"><bloc-title /></bloc>
      <bloc :aspect-ratio="16/10"><bloc-targets /></bloc>
      <bloc color="whitish" height="300"><bloc-daily-routine /></bloc>
      <bloc height="300"><bloc-how /></bloc>
      <bloc color='black' height="300"><bloc-contact /></bloc>
  </v-layout>
</template>

<script>
import BuildingAlert from '../components/BuildingAlert'
import HeaderBar from '../components/HeaderBar'
import Bloc from '../components/Bloc'
import BlocTitle from '../components/BlocTitle'
import BlocTargets from '../components/BlocTargets'
import BlocDailyRoutine from '../components/BlocDailyRoutine'
import BlocHow from '../components/BlocHow'
import BlocContact from '../components/BlocContact'
import GenericFooter from '../components/GenericFooter'

export default {
  components: {
    BuildingAlert,
    HeaderBar,
    Bloc,
    BlocTitle,
    BlocTargets,
    BlocDailyRoutine,
    BlocHow,
    BlocContact,
    GenericFooter
  }
}
</script>

<style scoped>
h1 {
  font-family: 'Neue Plak Extended Thin' !important;
}
</style>
