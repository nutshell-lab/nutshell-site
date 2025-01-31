<script setup lang="ts">
// import SilkaRegular from '/fonts/Silka/Silka-Regular.woff2'

useSeoMatrix()
// if (process.server) {
//   useHead({
//     link: [
//       {
//         rel: 'preload',
//         href: SilkaRegular,
//         crossorigin: '',
//         as: 'font',
//         type: 'font/woff2',
//       }
//     ]
//   })
// }
</script>

<template>
  <nu-layout>
    <NuxtPage class="page" />
  </nu-layout>
</template>

<style>
@reference "~/assets/css/main.css";

html, body, #__nuxt {
  height: 100%;
  width: 100%;
}
.page::before {
  @apply bg-cinnabar w-screen h-full fixed top-0 left-0 z-40;
	transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s ease-in-out;
	content: '';
}
.page-enter-active,
.page-leave-active {
  @apply transition-all ease-in-out duration-300
}
.page-enter-from::before,
.page-leave-to::before {
  transform: scaleX(1);
  transform-origin: left;
}
</style>
