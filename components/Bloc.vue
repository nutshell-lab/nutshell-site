<template>
  <v-responsive
    :class="[color, dividerClass, 'static']"
    :width="width"
    :height="height"
  >
    <v-layout 
      :class="[divider ? 'divided' : '', bordered]" 
      :style="backgrounded"
      row 
      wrap 
      fill-height 
      justify-center 
      align-center>
      <slot />
    </v-layout>
  </v-responsive>
</template>

<script>
export default {
  props: {
    dividerFill: {
      default: () => true
    },
    dividerPercent: {
      default: () => null
    },
    dividerPx: {
      default: () => null
    },
    divider: {
      default: () => false
    },
    height: {
      default: () => 'wrap-content'
    },
    width: {
      default: () => '100%'
    },
    color: {
      default: () => 'primary'
    },
    aspectRatio: {},
    background: {
      default: () => false
    }
  },
  computed: {
    dividerClass() {
      const dividerLength = this.dividerPercent
        ? this.dividerPercent
        : this.dividerPx
          ? `${this.dividerPx}-px`
          : '50'
      const filled = this.dividerFill ? '-fill' : ''
      return this.divider
        ? `divider divider-${dividerLength} divider-${this.divider}${filled}`
        : ''
    },
    bordered() {
      return this.divider && !this.dividerFill ? `bordered-${this.divider}` : ''
    },
    backgrounded() {
      return this.background ? `background: repeat url("${this.background}");` : ''
    }
  }
}
</script>

<style scoped>
.divided {
  padding-top: 10px;
}

.divider-white-fill::before {
  background-color: white !important;
}

.divider-off-white-fill::before {
  background-color: #fffdef !important;
}

.divider-secondary-light-fill::before {
  background-color: #f5b537 !important;
}

.divider-secondary-fill::before {
  background-color: #e69632 !important;
}

.divider-accent-fill::before {
  background-color: #fddd3a !important;
}

.divider-primary-fill::before {
  background-color: #5e2e70 !important;
}

.divider-accent::before {
  background-color: #5e2e70;
  border-bottom: 1px solid #fddd3a !important;
  border-right: 1px solid #fddd3a !important;
}

.divider::before {
  z-index: 1;
  content: '';
  position: absolute;
  left: -4px;
  height: 10px;
  -webkit-transform: skew(-40deg);
  transform: skew(-40deg);
}

.divider-40::before {
  width: calc(40% + 3px);
}

.divider-80::before {
  width: calc(80% + 3px);
}

.divider-65::before {
  width: calc(65% + 3px);
}

.divider-35::before {
  width: calc(35% + 3px);
}

.divider-35::before {
  width: calc(35% + 3px);
}

.divider-50::before {
  width: calc(50% + 3px);
}

.divider-325-px::before {
  width: 325px;
}

.divider-235-px::before {
  width: 235px;
}

.bordered-accent {
  border-top: 1px solid #fddd3a !important;
}

.static {
  position: relative;
}
</style>
