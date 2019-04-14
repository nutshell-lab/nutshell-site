<template>
  <v-layout wrap row class="py-5" justify-center>
    <v-flex xs12 xl8 lg9 md10 sm11 class="px-1">
      <display-title color="accent">
        <h1 class="primary--text text-uppercase display-1">Nutshell en production</h1>
      </display-title>
      <v-card class="primary--text transparent title pb-4" flat>
        <v-card-text>
          Hundreds of companies around the world are using Rust in production today for fast, low-resource, cross-platform solutions. Software you know and love, like Firefox, Dropbox, and Cloudflare, uses Rust. From startups to large corporations, from embedded devices to scalable web services, Rust is a great fit.
        </v-card-text>
        <v-layout row wrap>
          <v-flex xs12 lg8>
            <v-card class="transparent" flat>
              <v-card-text class="black--text">"Travailler avec Nutshell c'est trop cool, lolol"</v-card-text>
              <v-card-text class="grey--text text-xs-right">Augustin Mulliez, Jitips</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 lg4>
            IMAGE
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12 lg4>
            IMAGE
          </v-flex>
          <v-flex xs12 lg8>
            <v-card class="transparent" flat>
              <v-card-text class="text-xs-right black--text">"Travailler avec Nutshell c'est trop cool, lolol"</v-card-text>
              <v-card-text class="grey--text">Gwénael Rigolé, Unic</v-card-text>
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

h1 {
  font-family: 'Neue Plak Extended ExtraBlack' !important
}

.title * {
  font-family: 'Neue Plak Narrow SemiBold' !important
}

</style>
