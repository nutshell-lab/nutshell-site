<template>
  <v-layout
    id="news-container"
    class="top"
  >
    <v-parallax
      dark
      :height="mediaHeight"
      src="/patternSecondary.svg"
      class="width-100 secondary-light bottom"
    >
      <v-layout 
        wrap 
        row 
        justify-center>
        <v-flex>
          <v-layout row wrap justify-center fill-height align-center>
            <!-- <v-flex
              @click.stop="triggered()"
              @mouseover="enlarged = true" @mouseout="leave()"
              shrink
              :class="[clicked ? 'clicked' : '', mediaSize]"
              class="bold relative text-uppercase primary--text clickable"
            >
              Découvrir notre offre de conseil
            </v-flex> -->
          </v-layout>
        </v-flex>
      </v-layout>
    </v-parallax>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    clicked: false,
    enlarged: false
  }),
  watch: {
    enlarged: function() {
      this.applyStyleVariables()
    }
  },
  methods: {
    triggered() {
      this.$vuetify.goTo('#how-it-works', this.options)
      this.$emit('needAdvice')
    },
    leave() {
      this.clicked = false
      this.enlarged = false
      this.applyStyleVariables()
    },
    applyStyleVariables () {
      const scope = document.getElementById('news-container').style
      const width = this.clicked || this.enlarged
        ? '270px'
        : this.isXs ? '150px' : '220px'
      scope.setProperty('--separator-width', width)
    }
  },
  computed: {
    isXs() {
      return this.$vuetify.breakpoint.name === 'xs'
    },
    mediaSize() {
      return this.isXs ? 'subheading' : 'title'
    },
    mediaHeight() {
      return this.isXs ? 45 : 60//this.isXs ? 70 : 100
    },
    options() {
      return {
        duration: 1000,
        offset: this.mediaOffset,
        easing: 'easeInOutCubic'
      }
    },
    mediaOffset() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 30
        case 'sm':
          return 100
        default:
          return 150
      }
    }
  },
  mounted() {
    this.applyStyleVariables()
  }
}
</script> 

<style lang="stylus" scoped>

#news-container {
  --separator-width: 220px
}

separator-width = calc(50% - var(--separator-width))

.bold {
  font-family: 'Neue Plak Bold' !important
}

.width-100 {
  width: 100%
}

.clickable {
  margin-top: -5px
  cursor pointer
  transition: all cubic-bezier(.7,0,.3,1) .4s
}

.relative {
  position: relative
}

.clickable::after {
  content: ''
  display: block
  position: absolute
  bottom: -2px
  right: 0
  width: 100%
  height: 2px
  background: #5e2e70
  -webkit-transform-origin: left center
  transform-origin: left center
  transition: all cubic-bezier(.7,0,.3,1) .3s
}

.clickable.clicked::after {
  transform: translateX(100%)
  opacity: 0
  webkit-transform: translateX(100%)
}

.clickable:hover::after, .clickable:hover::before, .clickable:hover::after {
  background: white
}

.clickable::before {
  content: ''
  display: block
  position: absolute
  bottom: -2px
  right: 0
  width: 100%
  height: 2px
  background: #5e2e70
  -webkit-transform-origin: left center
  transform-origin: left center
  transition: all cubic-bezier(.7,0,.3,1) .3s
}

.clickable.clicked::before {
  transform: translateX(-100%)
  opacity: 0
  webkit-transform: translateX(-100%)
}

.clickable:hover, .clickable.clicked {
  color: white !important
}

.top::before {
  z-index: 1
  content: ''
  position: absolute
  left: -4px
  height: 10px
  -webkit-transform: skew(-40deg)
  transform: skew(-40deg)
  background-color: #5e2e70 !important
  width: separator-width
  transition: all cubic-bezier(.7,0,.3,1) .3s !important
}

.bottom::after {
  z-index: 1
  content: ''
  position: absolute
  right: -4px
  height: 10px
  bottom: 0px
  -webkit-transform: skew(-40deg)
  transform: skew(-40deg)
  background-color: #fffdef !important
  width: separator-width
  transition: all cubic-bezier(.7,0,.3,1) .3s !important
}

</style>
