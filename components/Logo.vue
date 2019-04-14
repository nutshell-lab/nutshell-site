<template>
  <svg :height="height" :width="width" class="ml-3">
    <image x="0" y="0" :height="height" :width="width" xlink:href="/logo.svg"/>
  </svg>
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
      return this.size * 2
    },
    width() {
      return this.size * 8
    }
  }
}
</script>
