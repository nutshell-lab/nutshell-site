<template>
  <v-layout row wrap align-center justify-center>
    <v-flex xs11 sm10 lg8 class="py-5 my-5">
      <v-layout column wrap align-start justify-center class="primary--text">
        <v-flex shrink class="py-5 my-5">
          <div class="display-4">WE</div>
          <div class="display-4">BUILD</div>
          <no-ssr>
            <vue-typer class="typer-title display-4" text="COOKIES" :typeDelay="120" :preTypeDelay="1000" eraseStyle="backspace" :eraseDelay="70" caretAnimation="solid"></vue-typer>
          </no-ssr>
          <div class="mt-5">
            <no-ssr>
              <vue-typer class="typer-subtitle display-2"  text="Chocolate, fruits even grapes... they're all delicious."
                :typeDelay="20" 
                :preTypeDelay="1100" 
                eraseStyle="backspace"
                :eraseDelay="20"
                caretAnimation="expand"
              ></vue-typer>
            </no-ssr>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
if (process.browser) {
  var VueTyper = require('vue-typer').VueTyper
}

export default {
  components: {
    VueTyper
  }
}
</script>

<style scoped>
.layout * {
  font-family: 'Neue Plak Wide ExtraBlack' !important;
}

.regular {
  font-family: 'Neue Plak Regular' !important;
}
</style>
