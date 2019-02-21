<template>
  <v-toolbar height="90px" color="white">
    <v-flex>
      <logo :size="50" />
    </v-flex>
    <v-flex>
      <v-layout class="text-xs-right">
        <v-flex class="text-xs-right">
          <v-hover>
            <span slot-scope="{ hover }" flat :class="hover ? 'text-underlined' : ''" class="btn primary--text clickable mx-3 text-uppercase">Quoi ?</span>
          </v-hover>
          <v-hover>
            <span slot-scope="{ hover }" flat :class="hover ? 'text-underlined' : ''" class="btn primary--text clickable mx-3 text-uppercase">Références</span>
          </v-hover>
          <v-hover>
            <span slot-scope="{ hover }" flat :class="hover ? 'text-underlined' : ''" class="btn primary--text clickable mx-3 text-uppercase">Pourquoi ?</span>
          </v-hover>
          <v-hover>
            <span slot-scope="{ hover }" flat :class="hover ? 'text-underlined' : ''" class="btn primary--text clickable mx-3 text-uppercase">Qui ?</span>
          </v-hover>
          <v-hover>
            <span slot-scope="{ hover }" flat :class="hover ? 'text-underlined' : ''" class="btn primary--text clickable mx-3 text-uppercase">Comment ?</span>
          </v-hover>
          <v-hover>
            <span slot-scope="{ hover }" flat :class="hover ? 'text-underlined' : ''" class="btn secondary--text clickable mx-3 text-uppercase">Contact</span>
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
  border-bottom: 3px solid
}

.clickable {
  cursor: pointer;
}

</style>
