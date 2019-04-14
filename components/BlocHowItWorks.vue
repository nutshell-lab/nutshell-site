<template>
  <v-layout wrap row class="py-5" justify-center>
    <v-flex xs12 xl8 lg9 md10 sm11 class="px-1">
      <display-title color="secondary">
        <h1 class="text-uppercase display-1">Comment ça marche ?</h1>
      </display-title>
      <v-card class="transparent title pb-4" flat>
        <v-card-text>
          Nutshell est un studio de conception logicielle. Notre rôle est d'accompagner nos clients dans la réalisation de leurs idées les plus ambitieuses.
        </v-card-text>
        <v-card-text>
          Fondée par trois amis pendant leurs études en ingénieurie logicielle, Nutshell est la résultante d'un constat d'inefficacité du marché du projet informatique et a pour essentielle valeur d'axer ses oeuvres vers la qualité du produit. Pour ce faire, le projet est le centre nerveux de toutes les reflexions, même les plus fondamentales, jusque dans le choix de la technologie. Car c'est bien celle-ci qui doit être adaptée au projet et non l'inverse.
        </v-card-text>
        <v-card-text>
          Bien loin de vendre du temps-cerveau/horaire et de bâcler le travail pour être une usine rentable, Nutshell met un point d'honneur à dédier entièrement son équipe au projet.
        </v-card-text>
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

h1 {
  font-family: 'Neue Plak Extended ExtraBlack' !important
}

.title * {
  font-family: 'Neue Plak Narrow SemiBold' !important
}

</style>
