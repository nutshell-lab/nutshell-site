<template>
  <v-flex>
    <v-layout class="text-xs-right">
      <v-flex class="text-xs-right">
        <span v-for="item in items" :key="item.name"
          class="btn primary--text clickable mx-3 text-uppercase relative" 
          @click="goTo(item.anchor)">{{ item.name }}</span>
        <span 
          class="btn secondary--text clickable mx-3 text-uppercase relative" 
          @click="openContact()">contact</span>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    goTo(anchor) {
      this.$emit('goTo', anchor)
    },
    openContact() {
      this.$emit('openContact')
    }
  }
}
</script>

<style lang="stylus" scoped>

.btn {
  font-family: 'Neue Plak Wide ExtraBlack' !important;
}

.text-underlined {
  border-bottom: 2px solid
}

.clickable {
  cursor: pointer;
}

.relative {
  position: relative
}

.btn::after {
  content: '';
  display: block;
  height: 2px;
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  background: #5e2e70;
  -webkit-transform-origin: center left;
  transform-origin: center left;
  transition: -webkit-transform 250ms cubic-bezier(.7,0,.3,1);
  transition: transform 250ms cubic-bezier(.7,0,.3,1);
}

.btn:hover::after {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}

</style>
