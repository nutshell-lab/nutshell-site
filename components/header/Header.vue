<template>
  <v-toolbar 
    :height="mediaHeight"
    class="transform-none no-shadow"
    color="white">
    <v-layout align-center>
      <v-flex>
        <logo 
          :size="27" 
          class="clickable" 
          @click.native="routerPush(`/`)"/>
      </v-flex>
      <drawer 
        v-if="isDrawer" 
        :items="items" 
        @openContact="openContact()" 
        @goTo="goTo"/>
      <bar 
        v-else 
        :items="items" 
        @openContact="openContact()" 
        @goTo="goTo"/>
    </v-layout>
  </v-toolbar>
</template>

<script>
import Bar from './Bar'
import Drawer from './Drawer'
import Logo from './Logo'
import { mapActions } from 'vuex'

export default {
  components: { Logo, Bar, Drawer },
  data() {
    return {
      items: [
        {
          name: 'à propos',
          anchor: '#in-a-nutshell'
        },
        {
          name: 'comment ça marche',
          anchor: '#how-it-works'
        },
        {
          name: 'notre travail',
          anchor: '#in-production'
        },
        {
          name: 'philosophie',
          anchor: '#philosophy'
        }
      ]
    }
  },
  computed: {
    options() {
      return {
        duration: 1000,
        offset: this.mediaOffset,
        easing: 'easeInOutCubic'
      }
    },
    mediaHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm':
          return '60px'
        default:
          return '90px'
      }
    },
    isDrawer() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm':
          return true
        default:
          return false
      }
    },
    mediaOffset() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 30
        case 'sm':
          return 100
        default:
          return 150
      }
    }
  },
  methods: {
    ...mapActions({
      routerPush: 'router/push'
    }),
    goTo(anchor) {
      this.$vuetify.goTo(anchor, this.options)
    },
    openContact() {
      this.goTo('#contact')
      setTimeout(() => {
        this.$emit('openContact')
      }, this.options.duration)
    }
  }
}
</script>

<style lang="stylus" scoped>
.no-shadow {
  box-shadow: none
}

.transform-none {
  transform: none !important
}

</style>
