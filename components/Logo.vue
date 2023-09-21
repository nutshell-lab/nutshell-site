<script lang="ts" setup>
defineProps({
  width: { type: Number, default: 150 },
  height: { type: Number, default: 50 },
  primaryColor: { type: String, default: "#fff" },
  secondaryColor: { type: String, default: "#f45353" },
})
</script>

<template>
  <svg :width="width" :height="height" version="1.1" viewBox="0 0 150 50" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(1.7632e-7 -1.2287)">
      <rect transform="matrix(.99919 -.040352 .030745 .99953 0 0)" x="7.7432" y="31.056" width="132.31" height="13.333" :fill="secondaryColor" stroke-width=".21382"/>
      <text x="11.198094" y="33.032665" :fill="primaryColor" font-family="'Fira Code'" font-size="33.867px" letter-spacing="-1.4552px" stroke-width=".26458" style="line-height:0" xml:space="preserve"><tspan x="11.198094" y="33.032665" fill="#ffffff" font-family="Inter" font-weight="bold" stroke-width=".26458">Nutshell</tspan></text>
    </g>
  </svg>
</template>
