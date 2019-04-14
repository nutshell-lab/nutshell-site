<template>
  <v-toolbar height="90px" color="white">
    <v-flex>
      <logo :size="27" />
    </v-flex>
    <v-flex>
      <v-layout class="text-xs-right">
        <v-flex class="text-xs-right">
          <v-hover>
            <span slot-scope="{ hover }" flat :class="hover ? 'text-underlined' : ''" class="btn primary--text clickable mx-3 text-uppercase">à propos</span>
          </v-hover>
          <v-hover>
            <span slot-scope="{ hover }" flat :class="hover ? 'text-underlined' : ''" class="btn primary--text clickable mx-3 text-uppercase">philosopie</span>
          </v-hover>
          <v-hover>
            <span slot-scope="{ hover }" flat :class="hover ? 'text-underlined' : ''" class="btn primary--text clickable mx-3 text-uppercase">notre travail</span>
          </v-hover>
          <v-hover>
            <span slot-scope="{ hover }" flat :class="hover ? 'text-underlined' : ''" class="btn primary--text clickable mx-3 text-uppercase">comment nous travaillons</span>
          </v-hover>
          <v-hover>
            <span slot-scope="{ hover }" flat :class="hover ? 'text-underlined' : ''" class="btn primary--text clickable mx-3 text-uppercase">blog</span>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-toolbar>
</template>

<script>
import Logo from './Logo'
export default {
  components: { Logo }
}
</script>

<style scoped>
.btn {
  font-family: 'Neue Plak Wide ExtraBlack' !important;
}

.text-underlined {
  border-bottom: 2px solid
}

.clickable {
  cursor: pointer;
}

</style>
