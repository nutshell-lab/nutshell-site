<template>
  <v-toolbar app flat height="75px">
    <logo :size="50" />
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat>Quoi</v-btn>
      <v-btn flat>Références</v-btn>
      <v-btn flat>Comment</v-btn>
      <v-btn flat>Pourquoi</v-btn>
      <v-btn flat>Témoignages</v-btn>
      <v-btn flat>Contact</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import Logo from './Logo'
export default {
  components: { Logo }
}
</script>

<style>

</style>
