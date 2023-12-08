<script setup lang="ts">
const route = useRoute()
useHead({
  htmlAttrs: {
    lang: 'fr'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://nutshell-lab.com' + route.path,
    },
  ],
})
</script>

<template>
  <nu-layout>
    <NuxtPage />
  </nu-layout>
</template>

<style>
html, body, #__nuxt {
  height: 100%;
  width: 100%;
}
</style>
