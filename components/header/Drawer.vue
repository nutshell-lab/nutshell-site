<template>
  <v-flex>
    <v-bottom-sheet v-model="sheet">
      <template v-slot:activator>
        <v-btn
          fixed
          fab
          bottom
          right
          color="white"
          :class="mediaSize"
        >
          <v-icon color="primary">menu</v-icon>
        </v-btn>
      </template>
      <v-list class="white">
        <v-list-tile
          v-for="item in items"
          :key="item.name"
          @click="goTo(item.anchor)"
        >
          <v-list-tile-title class="btn primary--text text-uppercase caption">{{ item.name }}</v-list-tile-title>
        </v-list-tile>
        <v-list-tile
          @click="openContact()"
        >
          <v-list-tile-title class="btn secondary--text text-uppercase caption">contact nous</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-bottom-sheet>
  </v-flex>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      sheet: false
    }
  },
  computed: {
    mediaSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'v-btn--small'
        default:
          return ''
      }
    }
  },
  methods: {
    goTo(anchor) {
      this.$emit('goTo', anchor)
      this.sheet = false
    },
    openContact() {
      this.$emit('openContact')
      this.sheet = false
    }
  }
}
</script>

<style lang="stylus" scoped>

i {
  line-height 17px !important
}

.where {
  font-family: 'Neue Plak Extended Bold' !important;
}

.btn {
  font-family: 'Neue Plak Wide ExtraBlack' !important;
}

>>> .v-overlay--absolute {
  height: 100vh !important
}
</style>