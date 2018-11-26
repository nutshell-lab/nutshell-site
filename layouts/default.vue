<template>
  <v-app>
    <v-content>
      <nuxt />
    </v-content>
    <generic-footer />
  </v-app>
</template>

<script>
import GenericFooter from '../components/GenericFooter'
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'apps', title: 'Welcome', to: '/' },
        { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  components: { GenericFooter }
}
</script>
