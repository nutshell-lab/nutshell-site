<template>
  <div>
    <svg 
      :height="height + 10" 
      :width="width" 
      :class="margin">
      <image 
        :height="height" 
        :width="width" 
        x="0" 
        y="10" 
        xlink:href="/logo.svg"/>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      default: () => 20
    }
  },
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm':
          return this.size * 1.6
        default:
          return this.size * 2
      }
    },
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm':
          return this.size * 6.4
        default:
          return this.size * 8
      }
    },
    margin() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm':
          return 'ml-1'
        default:
          return 'ml-3'
      }
    }
  }
}
</script>
