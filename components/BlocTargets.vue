<template>
  <v-layout row wrap class="primary" align-center>
    <v-flex xs12 sm6>
      <v-layout column wrap justify-center align-center class="text-xs-center">
        <v-flex class="accent--text text-uppercase">
          <object width="100" data="https://image.flaticon.com/icons/svg/1087/1087840.svg"></object>
        </v-flex>
        <v-flex class="accent--text text-xs-center text-uppercase">Nous portons
          <br>
          <span class="lighter">votre projet</span>
        </v-flex>
        <v-flex>
          <object class="my-4" width="30" data="https://image.flaticon.com/icons/png/512/608/608258.png"></object>
        </v-flex>
        <v-flex class="white--text text-uppercase headline">Construire<br> votre prototype</v-flex>
        <v-flex>
          <object class="my-4" width="30" data="https://image.flaticon.com/icons/png/512/608/608258.png"></object>
        </v-flex>
        <v-flex class="white--text text-uppercase headline">Externaliser<br> votre CTO</v-flex>
        <v-flex>
          <object class="my-4" width="30" data="https://image.flaticon.com/icons/png/512/608/608258.png"></object>
        </v-flex>
        <v-flex class="white--text text-uppercase headline">Gérer<br> votre budget</v-flex>
        <v-flex>
          <object class="my-4" width="30" data="https://image.flaticon.com/icons/png/512/608/608258.png"></object>
        </v-flex>
        <v-flex class="white--text text-uppercase headline">Piloter<br> vos développements</v-flex>
        <v-flex>
          <object class="my-4" width="30" data="https://image.flaticon.com/icons/png/512/608/608258.png"></object>
        </v-flex>
        <v-flex class="white--text text-uppercase headline">Anticiper<br> votre évolution</v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12 sm6>
      <v-layout column wrap justify-center align-center class="text-xs-center">
        <v-flex>
          <object width="100" data="https://image.flaticon.com/icons/svg/1420/1420337.svg"></object>
        </v-flex>
        <v-flex class="white--text text-xs-center text-uppercase">Nous boostons
          <br>
          <span class="lighter">votre business</span>
        </v-flex>
        <v-flex>
          <object class="my-4" width="30" data="https://image.flaticon.com/icons/png/512/608/608258.png"></object>
        </v-flex>
        <v-flex class="accent--text text-uppercase headline">Futuriser<br> votre existant</v-flex>
        <v-flex>
          <object class="my-4" width="30" data="https://image.flaticon.com/icons/png/512/608/608258.png"></object>
        </v-flex>
        <v-flex class="accent--text text-uppercase headline">Lancer<br> vos nouveaux projets</v-flex>
        <v-flex>
          <object class="my-4" width="30" data="https://image.flaticon.com/icons/png/512/608/608258.png"></object>
        </v-flex>
        <v-flex class="accent--text text-uppercase headline">Optimiser<br> votre SI</v-flex>
        <v-flex>
          <object class="my-4" width="30" data="https://image.flaticon.com/icons/png/512/608/608258.png"></object>
        </v-flex>
        <v-flex class="accent--text text-uppercase headline">Attaquer<br> d'autres marchés</v-flex>
        <v-flex>
          <object class="my-4" width="30" data="https://image.flaticon.com/icons/png/512/608/608258.png"></object>
        </v-flex>
        <v-flex class="accent--text text-uppercase headline">Dynamiser<br> votre activité</v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    content: {
      'Portez votre projet': [
        'Construire votre prototype',
        'Externaliser votre CTO',
        'Gérer votre budget',
        'Piloter vos développements',
        'Anticiper votre évolution'
      ],
      'Boostez votre business': [
        'Futurisez votre existant',
        'Lancer vos nouveaux projet',
        'optimiser votre Si',
        "Attaquer d'autres marchés",
        'dynamiser votre activité'
      ]
    }
  }),
  computed: {
    titles() {
      return Object.keys(this.content)
    }
  }
}
</script>

<style scoped >
.layout * {
  font-family: 'Neue Plak Wide ExtraBlack' !important;
}

.lighter {
  font-family: 'Neue Plak Wide Thin' !important;
}
</style>

