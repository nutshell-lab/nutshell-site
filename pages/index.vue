<template>
  <v-layout
    col
    wrap>
    <v-flex xs12><building-alert /></v-flex>
    <v-layout
      column
      justify-center
      align-center>
      <v-flex class="mt-5 pt-5"><logo /></v-flex>
      <h1 class="display-1">Nutshell</h1>
    </v-layout>
  </v-layout>
</template>

<script>
import BuildingAlert from '../components/BuildingAlert'
import Logo from '../components/Logo'

export default {
  components: { BuildingAlert, Logo }
}
</script>

<style scoped>
  h1 {
    font-family: 'Neue Plak Extended Thin'!important;
  }
</style>
