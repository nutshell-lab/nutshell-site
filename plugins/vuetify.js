import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: '#5e2e70',
    'primary-light': '#9676a1',
    accent: '#fddd3a',
    secondary: '#e69632',
    'secondary-light': '#f5b537',
    white: '#ffffff',
    'off-white': '#fffdef',
    blacky: '#303030',
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: '#E56565',
    success: colors.green.accent3
  }
})

//FFCB57 > fddd3a
//3F3A34 > 5e2e70
//E56565 > e69632
