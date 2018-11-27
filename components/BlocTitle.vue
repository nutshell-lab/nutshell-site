<template>
  <v-layout 
    fill-height
    row
    wrap
    align-center
    justify-left
    class="primary--text">
    <v-flex xs12 class="display-4">WE</v-flex>
    <v-flex xs12 class="display-4">BUILD</v-flex>
    <v-flex xs12 class="display-4 lighter">THINGS</v-flex>
  </v-layout>
</template>

<script>
export default {

}
</script>

<style scoped>
  .layout * {
    font-family: 'Neue Plak Wide ExtraBlack'!important;
  }

  .lighter {
    font-family: 'Neue Plak Wide Thin'!important;
  }

  .display-4 {
    font-size: 2.5em
  }
</style>
