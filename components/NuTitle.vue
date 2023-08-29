<script lang="ts" setup>
const props = defineProps<{
  text: String,
  active: Boolean,
}>()
</script>

<template>
  <div class="text-white inline-block relative text-6xl font-black px-1">
    <span class="relative">{{ props.text }}</span>
  </div>
</template>

<style scoped>
div::before {
  position: absolute;
  top: 0px;
  left: 0px;
  content: "";
  width: 100%;
  height: 100%;
  border-bottom: 24px solid #F45353;
  transform: rotate(-3deg);
}
</style>
