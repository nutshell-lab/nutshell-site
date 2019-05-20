<template>
  <v-layout row wrap justify-center class="relative static" id="contact-container" :class="color">
    <svg 
      :height="1300" 
      :width="500" 
      class="ml-3 absolute animated bottom">
      <image 
        :height="1300" 
        :width="500" 
        x="0" 
        y="0" 
        xlink:href="/flash.svg"/>
    </svg>
    <v-flex 
      xs11
      sm10
      md9
      lg8
      xl7
      class="text-xs-center top">
      <v-layout 
        row 
        wrap 
        justify-center>
        <v-flex 
          shrink
          :class="mediaSpacing">
          <div 
            class="clickable"
            @click.stop="expand(true)"
            @mouseover="enlarged = true" @mouseout="enlarged = false"
          >
            <v-flex 
              id="contact" 
              xs12 
              :class="mediaSize"
              class="text-uppercase secondary--text">
              <span 
                class="wide">Nous contacter</span>
            </v-flex>
            <v-flex 
              xs12 
              :class="mediaMailSize"
              class="primary--text narrow -mt-1">
              <span>hello@nutshell-lab.com</span>
            </v-flex>
          </div>
          <v-expand-transition>
            <v-layout 
              v-show="expanded" 
              row 
              wrap 
              justify-center>
              <v-flex 
                xs12 
                lg4 
                class="relative pt-5" 
                hidden-md-and-down>
                <location />
                <user class="py-5 mt-4"/>
              </v-flex>
              <v-flex 
                xs12 
                lg8 
                light>
                <v-layout row wrap class="hidden-md-and-up mt-4" align-center justify-center>
                  <v-flex xs6 class="hidden-xs-only"><location/></v-flex>
                  <v-flex sm6 shrink><user /></v-flex>
                </v-layout>
                <form class="pt-5">
                  <v-layout 
                    row 
                    wrap>
                    <v-flex 
                      xs12 
                      class="px-2">
                      <v-text-field
                        v-validate="'required'"
                        v-model="name"
                        :error-messages="errors.collect('name')"
                        prepend-inner-icon="person_pin"
                        label="Nom*"
                        autocomplete="name"
                        data-vv-name="name"
                        color="secondary"
                        box
                        required
                      />
                    </v-flex>
                    <v-flex 
                      xs12 
                      class="px-2">
                      <v-text-field
                        v-validate="'required|email'"
                        v-model="email"
                        :error-messages="errors.collect('email')"
                        prepend-inner-icon="alternate_email"
                        label="E-mail*"
                        autocomplete="work email"
                        color="secondary"
                        data-vv-name="email"
                        box
                        required
                      />
                    </v-flex>
                    <v-flex 
                      xs12 
                      class="px-2">
                      <v-textarea
                        v-validate="''"
                        v-model="message"
                        :error-messages="errors.collect('message')"
                        prepend-inner-icon="message"
                        label="Votre message"
                        color="secondary"
                        data-vv-name="message"
                        box
                        rows="10"
                      />
                    </v-flex>
                  </v-layout>
                  <v-layout 
                    row 
                    wrap 
                    justify-center>
                    <v-flex shrink>
                      <v-btn 
                        class="primary action" 
                        depressed 
                        large 
                        @click="submit">envoyer</v-btn>
                      <v-btn 
                        class="secondary action" 
                        depressed 
                        large 
                        @click="cancel">annuler</v-btn>
                    </v-flex>
                  </v-layout>
                </form>
              </v-flex>
            </v-layout>
          </v-expand-transition>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import Vue from 'vue'
import { to } from '~/config/sendgrid'
import Location from './Location'
import User from './User'
import VeeValidate from 'vee-validate'
import ky from 'ky'

Vue.use(VeeValidate)

export default {
  $_veeValidate: {
    validator: 'new'
  },
  components: { Location, User },
  props: {
    expandTriggered: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    name: '',
    email: '',
    message: '',
    dictionary: {
      attributes: {
        email: 'Adresse e-mail'
      },
      custom: {
        name: {
          required: () => "Ooups, il semblerait que vous n'ayez pas de nom ?"
        },
        email: {
          required: () =>
            "Une petite adresse mail pour qu'on puisse vous recontacter ?"
        }
      }
    },
    expanded: false,
    enlarged: false
  }),
  computed: {
    isXs() {
      return this.$vuetify.breakpoint.name === 'xs'
    },
    isSm() {
      return this.$vuetify.breakpoint.name === 'sm'
    },
    mediaSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'title bold'
        case 'sm':
          return 'display-0'
        default:
          return 'display-1'
      }
    },
    mediaMailSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'subheading'
        case 'sm':
          return 'title'
        default:
          return 'headline'
      }
    },
    mediaSpacing() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'py-3'
        case 'sm':
          return 'py-4'
        default:
          return 'py-4 my-2'
      }
    },
    mail() {
      return {
        to,
        from: this.email,
        subject: 'Hello from our beautiful website !',
        text: `
          from : ${this.name}\n
          message : ${this.message}
        `
      }
    },
    color() {
      return this.expanded ? 'organic2' : 'accent'
    }
  },
  watch: {
    expandTriggered: function(val) {
      if (val) this.expand()
    },
    enlarged: function() {
      this.applyStyleVariables()
    }
  },
  mounted() {
    this.$validator.localize('fr', this.dictionary)
    this.applyStyleVariables()
  },
  methods: {
    async submit() {
      const valid = await this.$validator.validateAll()
      if(valid) {
        try {
          ky.post('/api/mail/send', { json: this.mail }).json()
          
        } catch(e) {
          this.error()
        }
      }
    },
    error() {
      this.$emit('error', 'Ooops, ça ne semble pas fonctionner, revenez plus tard...')
    },
    clear() {
      this.name = ''
      this.email = ''
      this.phone = ''
      this.companyName = ''
      this.message = ''
      this.select = null
      this.checkbox = null
      this.$validator.reset()
    },
    expand(cancelIfExpanded) {
      if (cancelIfExpanded && this.expanded) {
        this.expanded = false
        this.enlarged = false
      } else { 
        this.$emit('expanded')
        this.expanded = true
      }
      this.applyStyleVariables()
    },
    cancel() {
      this.expanded = false
      this.applyStyleVariables()
      this.clear()
    },
    applyStyleVariables () {
      const scope = document.getElementById('contact-container').style
      const width = this.expanded
        ? this.isXs || this.isSm ? '50%' : '33%'
        : this.enlarged 
          ? '320px'
          : this.isXs ? '150px' : this.isSm ? '200px' : '270px'
      scope.setProperty('--separator-width', width)
    }
  }
}
</script>

<style lang="stylus" scoped>

#contact-container {
  --separator-width: 270px
  transition: background cubic-bezier(.7,0,.3,1) .5s !important
}

#contact-container.accent {
  transition: none !important
}

separator-width = calc(50% - var(--separator-width))

.wide {
  font-family: 'Neue Plak Extended Light' !important;
}

.narrow, .narrow * {
  font-family: 'Neue Plak Narrow Black' !important;
}

>>> .v-btn__content {
  font-family: 'Neue Plak Bold' !important
}

.-mt-1 {
  margin-top: -3px
}

.action {
  border: 2px solid transparent !important
}

.action:hover {
  border-color: white !important
}

>>> .v-input__slot:before {
  border-color: #5e2e70 !important;
}

>>> .error--text .v-input__slot:before {
  border-color: #E56565 !important;
}

>>> .v-text-field > .v-input__control > .v-input__slot:before, >>> .v-text-field > .v-input__control > .v-input__slot:after {
  border-width: 1.5px !important;
  bottom: -2px !important;
}

>>> .v-label {
  color: #5e2e70;
  line-height 1em
  font-family: 'Neue Plak Regular' !important;
}

>>> input, >>> textarea {
  color: #5e2e70 !important;
  font-family: 'Neue Plak Regular' !important;
}

>>> .v-input--is-focused > input{
  color: #e69632 !important;
}

>>> .v-input__slot {
  background: rgba(255,255,255,0.5) !important
}

>>> .v-input__prepend-inner {
  width: 40px;
}

>>> .v-input__prepend-inner .v-icon {
  color: #5e2e70
}

#contact-container::before {
  z-index: 1;
  content: '';
  position: absolute;
  left: -4px;
  height: 10px;
  -webkit-transform: skew(-40deg);
  transform: skew(-40deg);
  background-color: #5e2e70 !important;
  width: separator-width;
  transition: all cubic-bezier(.7,0,.3,1) .3s !important;
}

#contact-container::after {
  z-index: 1;
  content: '';
  position: absolute;
  right: -4px;
  height: 10px;
  bottom: 0px;
  -webkit-transform: skew(-40deg);
  transform: skew(-40deg);
  background-color: #fffdef !important;
  width: separator-width;
  transition: all cubic-bezier(.7,0,.3,1) .3s !important;
}

.top {
  z-index: 1
}

.bottom {
  z-index: 0
}

.animated {
  top: -150px;
  left: 10%;
  -webkit-animation: Float 20s ease-in-out infinite
  -moz-animation: Float 20s ease-in-out infinite 
  animation: Float 20s ease-in-out infinite
}

@-webkit-keyframes Float {
  0% {
    -webkit-transform:translateZ(0);
    transform:translateZ(0)
  } 50% {
    -webkit-transform:translate3d(-100px, -20px, 0);
    transform:translate3d(-100px, -20px, 0);
  } 100% {
    -webkit-transform:translateZ(0);
    transform:translateZ(0)
  }
}

@-moz-keyframes Float {
  0% {
    -webkit-transform:translateZ(0);
    transform:translateZ(0)
  } 50% {
    -webkit-transform:translate3d(-100px, -20px, 0);
    transform:translate3d(-100px, -20px, 0);
  } 100% {
    -webkit-transform:translateZ(0);
    transform:translateZ(0)
  }
}

@keyframes Float {
  0% {
    -webkit-transform:translateZ(0);
    transform:translateZ(0)
  } 50% {
    -webkit-transform:translate3d(-100px, -20px, 0);
    transform:translate3d(-100px, -20px, 0);
  } 100% {
    -webkit-transform:translateZ(0);
    transform:translateZ(0)
  }
}
</style>
