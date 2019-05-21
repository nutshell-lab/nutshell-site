<template>
  <v-layout 
    :class="mediaSpacing" 
    row 
    wrap>
    <v-flex>
      <v-layout 
        wrap 
        row 
        justify-center>
        <v-flex 
          xs11 
          sm10 
          md9 
          lg8 
          xl7 
          class="px-1 relative">
          <display-title color="accent">
            <span 
              id="how-it-works" 
              class="primary--text">Comment ça marche ?</span>
          </display-title>
          <v-layout 
            :class="mediaSize" 
            row 
            wrap 
            justify-end>
            <v-flex 
              :class="[move, small]" 
              xs6 
              class="panel">
              <v-layout 
                row 
                wrap 
                justify-end>
                <v-flex shrink>
                  <v-card 
                    flat 
                    class="transparent clickable" 
                    @click="select('project')">
                    <v-card-text class="py-2 secondary-light--text">
                      <span 
                        :class="selectedClass('project')" 
                        class="text-uppercase relative item bold item-advice">J'ai un projet</span>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex 
              :class="[move, small]" 
              xs6 
              class="panel">
              <v-layout 
                row 
                wrap>
                <v-flex shrink>
                  <v-card 
                    flat 
                    class="transparent clickable" 
                    @click="select('advice')">
                    <v-card-text class="py-2 primary--text">
                      <span 
                        :class="selectedClass('advice')" 
                        class="text-uppercase relative item bold item-project">Je veux du conseil</span>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-tabs 
        v-model="active" 
        class="tabs pt-2">
        <v-tab :key="0">advice</v-tab>
        <v-tab :key="1">project</v-tab>
        <v-tab-item :key="0">
          <v-layout 
            wrap 
            row 
            justify-center 
            class="tab tab-project py-4">
            <v-flex 
              xs11 
              sm10 
              md9 
              lg8 
              xl7 
              class="px-1 relative">
              <how-project />
            </v-flex>
          </v-layout>
        </v-tab-item>
        <v-tab-item :key="1">
          <v-layout 
            wrap 
            row 
            justify-center 
            class="tab tab-advice py-4">
            <v-flex 
              xs11 
              sm10 
              md9 
              lg8 
              xl7 
              class="px-1 relative">
              <how-advice />
            </v-flex>
          </v-layout>
        </v-tab-item>
      </v-tabs>
      <v-layout 
        row 
        wrap 
        class="px-3 pt-5 my-3 text-xs-center" 
        justify-center>
        <v-flex 
          :class="mediaSize" 
          xs11 
          sm10 
          md7 
          lg6 
          xl5 
          class="relative">
          <v-icon 
            color="secondary-light" 
            class="absolute xx-large bottom opacity-0-5"
            style="top:-50px;left:-45px;"
          >format_quote</v-icon>
          <span class="bold relative top primary--text">Que vous souhaitiez du conseil ou un projet, toute collaboration commence par <span class="secondary--text bold">votre rencontre</span> !</span>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import DisplayTitle from '../display/DisplayTitle'
import HowProject from './HowProject'
import HowAdvice from './HowAdvice'

const getKeyByValue = (object, value) =>
  Object.keys(object).find(key => object[key] === value)

export default {
  components: { DisplayTitle, HowProject, HowAdvice },
  props: {
    adviceTriggered: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tabs: {
        project: 0,
        advice: 1
      },
      selected: 'project',
      active: 0
    }
  },
  computed: {
    small() {
      const breakpoint = this.$vuetify.breakpoint.name
      return breakpoint === 'xs' || breakpoint === 'sm' ? 'small' : ''
    },
    mediaSpacing() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'py-0'
        case 'sm':
          return 'py-3'
        default:
          return 'py-5'
      }
    },
    mediaSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'subheading'
        default:
          return 'title'
      }
    },
    move() {
      return this.selected ? `move-${this.selected}` : null
    }
  },
  watch: {
    adviceTriggered: function(val) {
      if (val) {
        this.select('advice')
        this.$emit('advised', true)
      }
    },
    active: function(val) {
      this.select(getKeyByValue(this.tabs, val))
    }
  },
  methods: {
    select(where) {
      this.selected = where
      this.active = this.tabs[where]
    },
    selectedClass(where) {
      return this.selected === where ? 'selected' : ''
    }
  }
}
</script> 

<style lang="stylus" scoped>

.tabs * {
  transition: all .5s cubic-bezier(.7,0,.3,1) !important;
}

.tab::after, .tab::before {
  height: 10px;
  -webkit-transform: skew(-40deg);
  transform: skew(-40deg);
  background-color: #fffdef
  content: ''
  position: absolute
}

.tab-advice::after, .tab-advice::before {
  background-color: #5e2e70 !important
}

.tab-project::after, .tab-project::before {
  background-color: #f5b537 !important
}

.tab-advice::after {
  bottom: 0px
  right: -15px
  width: 35%
  -webkit-transform: skew(40deg);
  transform: skew(40deg);
}

.tab-advice::before {
  top: 0px
  left: -15px
  width: 35%
  -webkit-transform: skew(40deg);
  transform: skew(40deg);
}

.tab-project::after {
  bottom: 0px
  left: -15px
  width: 35%
}

.tab-project::before {
  top: 0px
  right: -15px
  width: 35%
}

.bottom
  z-index: 0

.top
  z-index: 10

.opacity-0-5
  opacity .5

.xx-large
  font-size: 150px !important

.extended, .extended * {
  font-family: 'Neue Plak Extended Regular' !important
}

.bold, .bold * {
  font-family: 'Neue Plak Bold' !important
}

.regular, .regular * {
  font-family: 'Neue Plak Regular' !important
}

.item::after {
  content: ''
  display: block
  position: absolute
  bottom: 0px
  right: 0
  width: 100%
  height: 2.5px
  -webkit-transform-origin: left center
  transform-origin: left center
  transition: all cubic-bezier(.7,0,.3,1) .8s
  opacity: 0
}

.item-advice::after {
  webkit-transform: translateX(100%)
  transform: translateX(100%)
  background: #f5b537
}

.item-project::after {
  webkit-transform: translateX(-100%)
  transform: translateX(-100%)
  background: #5e2e70
}

.item.selected::after {
  transform: translateX(0%)
  opacity: 1
  webkit-transform: translateX(0%)
}

.panel {
  -webkit-transform-origin: left center;
  transform-origin: left center;
  transition: all cubic-bezier(.7,0,.3,1) .5s;
}

.panel.move-advice {
  transform: translateX(calc(50%))
  webkit-transform: translateX(calc(50%))
}

.panel.move-project {
  transform: translateX(calc(-50%))
  webkit-transform: translateX(calc(-50%))
}

.panel.small {
  transform: translateX(0%) !important
  webkit-transform: translateX(0%) !important
}

>>> .v-tabs__container {
  display: none
}

</style>
