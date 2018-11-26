<template>
  <v-layout row wrap class="primary">
    <v-flex xs12 sm6 v-for="title in titles" :key="title">
      <v-layout wrap>
        <v-flex xs12 class="text-xs-center">{{ title }}</v-flex>
        <v-flex xs12 v-for="item in content[title]" :key="item"> {{ item }}</v-flex>
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

<style>
</style>
