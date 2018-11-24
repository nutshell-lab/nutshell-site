<template>
  <v-layout fill-height col wrap>
    <header-bar />
    <v-flex xs12 fill-height><bloc-title /></v-flex>
    <v-flex xs12 fill-height><bloc-targets /></v-flex>
  </v-layout>
</template>

<script>
import BuildingAlert from '../components/BuildingAlert'
import HeaderBar from '../components/HeaderBar'
import BlocTitle from '../components/BlocTitle'
import BlocTargets from '../components/BlocTargets'

export default {
  components: { BuildingAlert, HeaderBar, BlocTitle, BlocTargets }
}
</script>

<style scoped>
  h1 {
    font-family: 'Neue Plak Extended Thin'!important;
  }
</style>
