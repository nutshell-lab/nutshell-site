<template>
  <v-layout 
    row 
    wrap
    justify-center>
    <v-flex 
      shrink 
      class="px-2">
      <v-icon 
        color="secondary" 
        large>location_on</v-icon>
    </v-flex>
    <v-flex>
      <v-card 
        flat 
        class="text-xs-left transparent regular subheading primary--text">
        <v-card-text class="pa-0 extrablack">Nutshell House</v-card-text>
        <v-card-text class="pa-0">292 Rue du Général de Gaulle</v-card-text>
        <v-card-text class="pa-0">59370 Mons en Baroeul</v-card-text>
        <v-card-text class="pa-0">France</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style lang="stylus" scoped>
.regular {
  font-family: 'Neue Plak Regular' !important;
}

.extrablack, .extrablack * {
  font-family: 'Neue Plak Extended ExtraBlack' !important;
}

</style>
