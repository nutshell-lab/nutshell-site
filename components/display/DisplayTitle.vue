<template>
  <v-card class="transparent fit-content" flat>
    <v-card-text class="top">
      <slot></slot>
    </v-card-text>
    <div class="highlight" :class="color"></div>
  </v-card>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'transparent'
    }
  }
}
</script>

<style lang="stylus" scoped>

.fit-content
  width: fit-content
  
.top
  position: relative
  z-index: 999999

.highlight
  height: 20px
  position: relative
  top: -30px
  left: -10px
  width: 120%
  max-width: 90vw
  -webkit-transform: skew(-40deg);
  transform: skew(-40deg);

</style>
