<template>
  <v-avatar
    :size="size">
    <img src="~assets/logo.jpg" >
  </v-avatar>
</template>

<script>
export default {
  props: {
    size: {
      default: () => 100
    }
  }
}
</script>
