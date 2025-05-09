<script setup lang="ts">
import "altcha";
import { watchOnce } from "@vueuse/core";
import { defineExpose } from "vue";

const widget = ref<(AltchaWidgetMethods & HTMLElement) | null>(null);
const props = defineProps({
  payload: {
    type: String,
    required: false,
  },
});
const emit = defineEmits<{
  (e: "update:payload", value: string): void;
}>();
const internalValue = ref(props.payload);

watch(internalValue, (v) => {
  emit("update:payload", v || "");
});

const onStateChange = (ev: CustomEvent | Event) => {
  if ("detail" in ev) {
    const { payload, state } = ev.detail;
    if (state === "verified" && payload) {
      internalValue.value = payload;
    } else {
      internalValue.value = "";
    }
  }
};

function reset() {
  return widget.value && widget.value.reset();
}

defineExpose({ reset });

watchOnce(widget, (widget) => {
  widget && widget.addEventListener("statechange", onStateChange);
});

onUnmounted(() => {
  if (widget.value) {
    widget.value.removeEventListener("statechange", onStateChange);
  }
});

const strings = JSON.stringify({
  ariaLinkLabel: "Altcha.org",
  error: "Vérification erronée. Réessayez plus tard.",
  expired: "Vérification expirée. Essayez à nouveau.",
  footer:
    'Protected by <a href="https://altcha.org/" target="_blank" aria-label="Visit Altcha.org">ALTCHA</a>',
  label: "Je ne suis pas un robot",
  verified: "Vérifié",
  verifying: "Vérification...",
  waitAlert: "Vérification... patientez.",
});
</script>

<template>
  <altcha-widget
    ref="widget"
    challengeurl="https://platform.nutshell-lab.com/api/altcha"
    :strings="strings"
    hidefooter
    hidelogo
  />
</template>
