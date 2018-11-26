<template>
  <v-responsive
    :class="color"
    :width="width"
    :aspect-ratio="aspect-ratio"
    :height="height"
  >
  <v-layout row wrap justify-center align-center>
    <v-flex xs11 sm10><slot></slot></v-flex>
  </v-layout>
  </v-responsive>
</template>

<script>
export default {
  props: {
    height: {
      default: () => 'wrap-content'
    },
    width: {
      default: () => '100%'
    },
    color: {
      default: () => 'primary'
    },
    'aspect-ratio': {}
  }
}
</script>
