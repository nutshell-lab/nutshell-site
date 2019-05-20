<template>
  <v-app dark>
    <transition name="translate">
      <loading 
        v-if="isLoading"
        :active="true" 
        :is-full-page="true"
        :opacity="0"
        class="primary"
      >
        <v-img
          src="/nut-logo.png"
          height="150"
          width="108"
          class="animated"
        />
      </loading>
    </transition>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: { Loading },
  data() {
    return {
      isLoading: true
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener('load', event => {
        this.show(1500)
      })
    } else this.show(1500)
  },
  computed: {
    ...mapGetters({
      route: 'router/route'
    })
  },
  watch: {
    route (to) {
      if (to === null || to === this.$route.path)
        return this.reset()
      this.isLoading = true
      setTimeout(() => {
        this.$router.push(to)
        this.reset()
        this.show(500)
      }, 400)
    }
  },
  methods: {
    ...mapActions({
      reset: 'router/reset'
    }),
    show(duration) {
      setTimeout(() => {
        this.isLoading = false
      }, duration)
    }
  }
}
</script>

<style lang="stylus" scoped>

.translate-enter-active, .translate-leave-active {
  -webkit-transform-origin: left center;
  transform-origin: top center;
  transition: all cubic-bezier(.7,0,.3,1) .4s;
}

.translate-enter, .translate-leave-to, .translate-leave-active {
  transform: translateY(-100%);
  webkit-transform: translateY(-100%);
}

.animated {
  -webkit-transform-origin: center center;
  transform-origin: center center;
  -webkit-animation: Scale 2s ease-in-out infinite;
  -moz-animation: Scale 2s ease-in-out infinite;
  animation: Scale 2s ease-in-out infinite;
}

@-webkit-keyframes Scale {
  0% {
    -webkit-transform:scale(1);
    transform:scale(1)
  } 50% {
    -webkit-transform:scale(0.8);
    transform:scale(0.8);
  } 100% {
    -webkit-transform:scale(1);
    transform:scale(1)
  }
}

@keyframes Scale {
  0% {
    -webkit-transform:scale(1);
    transform:scale(1)
  } 50% {
    -webkit-transform:scale(0.8);
    transform:scale(0.8);
  } 100% {
    -webkit-transform:scale(1);
    transform:scale(1)
  }
}

@-moz-keyframes Scale {
  0% {
    -webkit-transform:scale(1);
    transform:scale(1)
  } 50% {
    -webkit-transform:scale(0.8);
    transform:scale(0.8);
  } 100% {
    -webkit-transform:scale(1);
    transform:scale(1)
  }
}

</style>
