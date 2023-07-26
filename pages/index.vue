<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="w-full h-full bg-zinc-950 text-white">
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
  </div>
</template>
