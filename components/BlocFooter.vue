<template>
  <v-layout 
    row 
    wrap 
    justify-center>
    <v-flex 
      xs11
      sm10
      md9
      lg8
      xl7
      class="py-5">
      <v-layout
        id="footer"
        :style="`${transform}`"
        class="animated"
        row 
        wrap 
        align-start
      >
        <div class="hidden-sm-and-up floating-social">
          <a
            v-for="(social, index) in socials"
            :key="index"
            :title="social.name" 
            :href="social.url"
            class="mr-1 d-block"
            target="_blank"
          >
            <v-hover>
              <svg 
                slot-scope="{ hover }" 
                height="32" 
                width="32">
                <image 
                  :xlink:href="hover ? social.iconOnHover : social.icon" 
                  x="0" 
                  y="0" 
                  height="32"
                  width="32"
                />
              </svg>
            </v-hover>
          </a>
        </div>
        <v-flex 
          xs12 
          sm6>
          <v-card 
            flat  
            class="transparent wide subheading">
            <v-card-text class="px-0 pb-1 pt-0 text-uppercase">
              <span 
                class="menu relative clickable" 
                @click="$vuetify.goTo('#in-a-nutshell', options)">à propos</span>
            </v-card-text>
            <v-card-text class="px-0 pb-1 pt-0 text-uppercase">
              <span 
                class="menu relative clickable" 
                @click="$vuetify.goTo('#how-it-works', options)">comment ça marche</span>
            </v-card-text>
            <v-card-text class="px-0 pb-1 pt-0 text-uppercase">
              <span 
                class="menu relative clickable" 
                @click="$vuetify.goTo('#in-production', options)">notre travail</span>
            </v-card-text><v-card-text class="px-0 pb-1 pt-0 text-uppercase">
              <span 
                class="menu relative clickable" 
                @click="$vuetify.goTo('#philosophy', options)">philosopie</span>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex 
          xs12 
          sm6>
          <v-layout 
            row 
            wrap 
            align-start>
            <v-flex 
              shrink
              hidden-sm-and-down
              class="px-2 mr-1">
              <v-icon 
                color="accent" 
                large>location_on</v-icon>
            </v-flex>
            <v-flex 
              xs12 
              class="pt-2 pb-3 hidden-sm-and-up"/>
            <v-flex>
              <v-card 
                flat 
                class="transparent subheading extended">
                <v-card-text class="pa-0">Nutshell Lab</v-card-text>
                <v-card-text class="pa-0">229 rue Solférino</v-card-text>
                <v-card-text class="pa-0">59000 Lille</v-card-text>
                <v-card-text class="pa-0">France</v-card-text>
                <v-card-text class="pa-0 pt-3 hidden-xs-only">
                  <a
                    v-for="(social, index) in socials"
                    :key="index"
                    :title="social.name" 
                    :href="social.url"
                    class="mr-1"
                    target="_blank"
                  >
                    <v-hover>
                      <svg 
                        slot-scope="{ hover }" 
                        height="32" 
                        width="32">
                        <image 
                          :xlink:href="hover ? social.iconOnHover : social.icon" 
                          x="0" 
                          y="0" 
                          height="32"
                          width="32"
                        />
                      </svg>
                    </v-hover>
                  </a>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12>
          <v-layout
            align-end>
            <v-flex>
              <v-flex 
                :class="mediaLink" 
                xs12 
                class="regular">
                <span 
                  class="work-together relative clickable" 
                  @click="openContact()">Démarrer un projet !</span>
              </v-flex>
              <v-flex 
                xs12 
                class="regular my-3 body-1 white--text">
                <div class="d-inline-block">© <span class="body-2 pl-1 pr-2">Nutshell Lab 2019</span></div>
                <span class="pr-2">|</span> 
                <div class="d-inline-block">
                  <a
                    target="_blank" 
                    class="secondary--text body-2 pr-2" 
                    href="https://www.societe.com/societe/nutshell-lab-838893683.html">
                    societe.com
                  </a>
                  | 
                  <a 
                    class="secondary--text body-2 px-2" 
                    @click.stop="routerPush(`/legals`)"
                  >
                    mentions légales
                  </a>
                </div>
                <span class="pr-2">|</span> 
                <div class="d-inline-block">
                  <span class="body-2">Pictogrammes créés et cédés par Eucalyp Studio</span>
                </div>
              </v-flex>
            </v-flex>
            <v-flex class="pl-3">
              <v-img
                src="/nut-logo.png"
                height="80"
                width="58"
                class="my-3"
              />
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      percentage: 0,
      offset: 75,
      socials: [
        {
          name: 'Nutshell Lab Linkedin',
          url: 'https://www.linkedin.com/company/nutshell-lab/about',
          icon: '/social/linkedinWhite.svg',
          iconOnHover: 'social/linkedinColored.svg'
        },
        {
          name: 'Nutshell Lab Npm',
          url: 'https://www.npmjs.com/search?q=%40nutshelllab',
          icon: '/social/npmWhite.svg',
          iconOnHover: 'social/npmColored.svg'
        },
        {
          name: 'Nutshell Lab Github',
          url: 'https://github.com/nutshell-lab',
          icon: '/social/githubWhite.svg',
          iconOnHover: 'social/githubColored.svg'
        }
      ]
    }
  },
  computed: {
    options() {
      return {
        duration: 1000,
        offset: 200,
        easing: 'easeInOutCubic'
      }
    },
    transform() {
      const value = this.percentage || 0
      return `-webkit-transform:translateY(${value}%);transform:translateY(${value}%);`
    },
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 490
        case 'sm':
          return 434
        default:
          return 417
      }
    },
    mediaLink() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'display-0 py-4'
        default:
          return 'display-1 py-5'
      }
    },
    mediaSocial() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'floating-social'
        default:
          return ''
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    ...mapActions({
      routerPush: 'router/push'
    }),
    handleScroll() {
      if (window.scrollY >= this.top()) {
        const scrollPercentage =
          100 *
          (1 - (this.top() + this.height) / (window.scrollY + this.offset)) *
          4
        this.percentage = scrollPercentage >= 0 ? 0 : scrollPercentage
      }
    },
    openContact() {
      this.$vuetify.goTo('#contact', this.options)
      setTimeout(() => {
        this.$emit('openContact')
      }, this.options.duration)
    },
    position() {
      const body = document.body
      const html = document.documentElement
      return (
        Math.max(
          body.scrollHeight,
          body.offsetHeight,
          html.clientHeight,
          html.scrollHeight,
          html.offsetHeight
        ) - window.innerHeight
      )
    },
    top() {
      return this.position() - this.height
    }
  }
}
</script>

<style lang="stylus" scoped>

.floating-social {
  position: absolute
  right: 0px
  top: 0px
}

a {
  text-decoration: none
}

.v-align {
  vertical-align: sub
}

.regular, .regular * {
  font-family: 'Neue Plak Regular' !important;
}

.extended, .extended * {
  font-family: 'Neue Plak Extended Bold' !important;
}

.wide, .wide * {
  font-family: 'Neue Plak Wide Black' !important;
}

.animated {
  transition: all linear .1s;
}

.underline {
  text-decoration: underline
}

.work-together::after {
  content: '';
  display: block;
  position: absolute;
  bottom: 1px;
  right: 0;
  width: 100%;
  height: 2px;
  background: #fff;
  -webkit-transform-origin: left center;
  transform-origin: left center;
  transition: all cubic-bezier(.7,0,.3,1) .4s;
}

.work-together:hover::after {
  transform: translateX(-100%);
  opacity: 0;
  webkit-transform: translateX(-100%);
}

.work-together:hover, .menu:hover {
  color: #e69632;
}

</style>
