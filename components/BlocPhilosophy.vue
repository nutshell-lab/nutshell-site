<template>
  <v-layout wrap row class="py-5" justify-center>
    <v-flex xs12 xl8 lg9 md10 sm11 class="px-1">
      <display-title color="primary">
        <h1 class="text-uppercase display-1">Philosophie</h1>
      </display-title>
      <v-card class="transparent title" flat>
        <v-card-text>
          Les valeurs de Nutshell s'orientent autour de l'expertise technique et de l'entrepreneuriat de ses membres, qui n'en sont qu'aux premiers pas de leur périple et on la volonté d'acquérir toujours plus de compétences et de connaissances dans ces deux domaines.
        </v-card-text>
        <v-layout wrap row class="py-3">
          <v-flex xs12 md4>
            <div>PICTO</div>
            <v-card class="transparent" flat>
              <v-card-text class="extra-black primary--text headline">L'expertise Technique</v-card-text>
              <v-card-text class="condensed py-1 px-5">L'art du code</v-card-text>
              <v-card-text class="condensed py-1 px-5">L'intelligence des choix</v-card-text>
              <v-card-text class="condensed py-1 px-5">La simplicité de l'exécution</v-card-text>
              <v-card-text class="condensed py-1 px-5">L'innovation technologique</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md4>
            <div>PICTO</div>
            <v-card class="transparent" flat>
              <v-card-text class="extra-black primary--text headline">La vision métier</v-card-text>
              <v-card-text class="condensed py-1 px-5">La connaissance profonde du métier</v-card-text>
              <v-card-text class="condensed py-1 px-5">L'anticipation des besoins</v-card-text>
              <v-card-text class="condensed py-1 px-5">La conception favorisant l'évolution</v-card-text>
              <v-card-text class="condensed py-1 px-5">L'analyse du besoin</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md4>
            <div>PICTO</div>
            <v-card class="transparent" flat>
              <v-card-text class="extra-black primary--text headline">Le suivi</v-card-text>
              <v-card-text class="condensed py-1 px-5">La réactivité</v-card-text>
              <v-card-text class="condensed py-1 px-5">Le devoir de conseil</v-card-text>
              <v-card-text class="condensed py-1 px-5">L'automatisation</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import DisplayTitle from './display/DisplayTitle'
export default {
  components: { DisplayTitle }
}
</script> 

<style lang="stylus" scoped>

h1
  font-family: 'Neue Plak Extended ExtraBlack' !important

.title *
  font-family: 'Neue Plak Narrow SemiBold' !important

.condensed
  font-family: 'Neue Plak Narrow SemiBold' !important

.extra-black
  font-family: 'Neue Plak ExtraBlack' !important


</style>
