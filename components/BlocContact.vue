<template>
  <v-layout row wrap justify-center>
    <no-ssr>
      <vue-particles
        class="absolute"
        color="#e69632"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#e69632"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="false"
      >
      </vue-particles>
    </no-ssr>
    <v-flex xs11 sm10 lg8 class="text-xs-center">
      <v-layout row wrap align-center>
        <v-flex xs12>
          <v-flex xs12 class="text-uppercase secondary--text display-1">Contact US</v-flex>
          <v-flex xs12 class="primary--text headline narrow">hello@nutshell-lab.com</v-flex>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>

.layout * {
  font-family: 'Neue Plak Wide Regular' !important;
}

.narrow {
  font-family: 'Neue Plak Narrow Black' !important;
}

.absolute {
  position: absolute
  top:0px
  height: 100%
  width: 100%
}

</style>
