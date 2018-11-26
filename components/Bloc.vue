<template>
  <v-responsive
    :class="color"
    :width="width"
    :aspect-ratio="aspect-ratio"
    :height="height"
  >
  <slot></slot>
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
