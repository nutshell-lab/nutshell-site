import Vue from 'vue'
import VueFacebookPixel from 'vue-analytics-facebook-pixel'

Vue.use(VueFacebookPixel)

Vue.analytics.fbq.init('838209666535750', {
  em: 'marketing@nutshell-lab.com'
})
