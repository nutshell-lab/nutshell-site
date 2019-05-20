<template>
  <v-card 
    class="transparent fit-content" 
    flat>
    <v-card-text class="top">
      <h1 :class="[mediaSize, uppercase ? 'text-uppercase' : 'text-normal']">
        <slot/>
      </h1>
    </v-card-text>
    <div 
      :class="[color, mediaHeight]" 
      class="highlight"/>
  </v-card>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'transparent'
    },
    uppercase: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    mediaSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'display-0'
        case 'sm':
          return this.uppercase ? 'display-1' : 'display-1-5'
        default:
          return this.uppercase ? 'display-1-5' : 'display-2'
      }
    },
    mediaHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'x-small'
        case 'sm':
          return 'small'
        default:
          return ''
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

.text-uppercase, .text-uppercase span, .text-normal, .text-normal span {
  font-family: 'Neue Plak ExtraBlack' !important
}

.fit-content
  width: fit-content
  
.top
  position: relative
  z-index: 10

.highlight
  height: 20px
  position: relative
  top: -27px
  left: -10px
  width: 120%
  max-width: 90vw
  -webkit-transform: skew(-40deg);
  transform: skew(-40deg);

.highlight.small
  height: 17px
  top: -27px

.highlight.x-small
  height: 14px
  top: -25px
  width: 110%

</style>
