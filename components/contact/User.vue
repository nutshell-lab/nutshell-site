<template>
  <v-layout 
    row 
    wrap 
    justify-center 
    class="relative">
    <v-flex xs12>
      <v-layout 
        align-start>
        <v-flex 
          shrink 
          class="pl-3">
          <v-avatar size="80">
            <v-img 
              :src="user.image" 
              class="border"/>
          </v-avatar>
        </v-flex>
        <v-flex>
          <v-card 
            class="transparent relative pl-3 text-xs-left" 
            flat>
            <v-card-text class="pa-0 extrablack subheading primary--text">{{ user.name }}</v-card-text>
            <v-card-text class="pa-0 regular subheading primary--text">{{ user.role }}</v-card-text>
            <!-- <v-card-text class="pa-0 extrablack subheading primary--text">{{ user.phone }}</v-card-text> -->
            <v-card-text class="pa-0 extrablack subheading primary--text"><a 
              :href="user.github.url" 
              target="_blank" 
              class="no-decoration">{{ user.github.name }}</a></v-card-text>
          </v-card>
          <v-card
            v-if="!isSmall"
            class="transparent relative mt-4" 
            flat>
            <v-card-text class="title secondary--text text-xs-left">{{ user.quote }}</v-card-text>
            <v-icon 
              color="primary" 
              class="absolute" 
              style="top:8px;left:-25px" 
              x-large>format_quote</v-icon>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

export default {
  data: () => ({
    users: [
      {
        name: 'Nathan',
        image: '/users/nathan.jpg',
        role: 'Développeur - Café addict',
        phone: '(+33)7 60 10 43 65',
        github: {
          name: '#Thanith',
          url: 'https://github.com/Thanith'
        },
        quote: "Parfait ! Juste à l'heure pour un café..."
      },
      {
        name: 'Sorian',
        image: '/users/sorian.jpg',
        role: 'Développeur - Alchimiste',
        phone: '(+33)6 64 81 23 79',
        github: {
          name: '#Blue',
          url: 'https://github.com/RaisonBlue'
        },
        quote: "Quoi ? Il fait déjà nuit !?"
      },
      {
        name: 'Victor',
        image: '/users/victor.jpg',
        role: 'Développeur - Github fan',
        phone: '(+33)6 52 19 64 29',
        github: {
          name: '#BlitzBanana',
          url: 'https://github.com/BlitzBanana'
        },
        quote: "Hey, regardez ce que j'ai trouvé sur github !"
      }
    ]
  }),
  computed: {
    user() {
      return this.users[getRandomInt(this.users.length)]
    },
    isSmall() {
      return (
        this.$vuetify.breakpoint.name === 'sm' ||
        this.$vuetify.breakpoint.name === 'xs'
      )
    }
  }
}
</script>  

<style lang="stylus" scoped>
.no-decoration {
  text-decoration: none
}

.regular {
  font-family: 'Neue Plak Regular' !important;
}

.extrablack, .extrablack * {
  font-family: 'Neue Plak Extended ExtraBlack' !important;
}

.border {
  border: 3px solid #5e2e70
}

</style>
