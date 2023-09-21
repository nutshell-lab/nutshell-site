<script lang="ts" setup>
defineProps({
  width: { type: Number, default: 32 },
  height: { type: Number, default: 32 },
  primaryColor: { type: String, default: "#fff" },
  secondaryColor: { type: String, default: "#2e2e2e" },
})
</script>

<template>
  <svg
    class="cursor-pointer"
    :width="width" :height="height"
    version="1.1"
    viewBox="0 0 8.4667 8.4667"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(0 .64253)">
      <rect
        transform="matrix(.99874 -.05023 .054529 .99851 0 0)"
        x="-.07982" y="3.15"
        width="8.092" height="3.6819"
        :fill="secondaryColor"
        stroke-width=".29418"
      />
      <g :fill="primaryColor" stroke-width=".26458">
        <rect x=".91666" y="3.2022" width="6.6333" height=".7772"/>
        <rect x=".91666" y="1.6986" width="6.6333" height=".7772"/>
        <rect x=".91666" y="4.7058" width="6.6333" height=".7772"/>
      </g>
    </g>
  </svg>
</template>
