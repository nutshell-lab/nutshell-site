<template>
  <v-layout 
    row 
    wrap 
    class="primary" 
    justify-center>
    <v-flex 
      xs11 
      sm10 
      class="py-3 my-5">
      <v-layout 
        row 
        wrap 
        align-center>
        <v-flex xs12>
          <v-layout 
            row 
            wrap 
            justify-center 
            align-center>
            <v-flex 
              md4 
              class="border-right text-xs-right py-3">
              <v-layout 
                column 
                wrap 
                align-end 
                class="text-xs-right pr-5">
                <v-flex>
                  <v-layout 
                    column 
                    wrap 
                    class="pr-5">
                    <v-flex class="text-xs-center">
                      <svg 
                        :height="215" 
                        :width="300">
                        <image 
                          :height="400" 
                          :width="400" 
                          x="-50" 
                          y="-95" 
                          xlink:href="/startup.svg"/>
                      </svg>
                    </v-flex>
                    <v-flex class="secondary--text text-xs-center text-uppercase headline">Nous portons
                      <br>
                      <span class="lighter">votre projet</span>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex 
              shrink 
              class="pl-5">
              <v-layout 
                v-for="item in targets.startup" 
                :key="item" 
                row 
                justify-center 
                class="text-xs-left py-3 pl-5">
                <v-flex 
                  shrink 
                  class="pr-5">
                  <svg 
                    :height="32" 
                    :width="50" 
                    class="ml-3 h-36">
                    <image 
                      :height="20" 
                      :width="50" 
                      x="0" 
                      y="10" 
                      xlink:href="/arrow-right.svg"/>
                  </svg>
                </v-flex>
                <v-flex class="white--text text-uppercase headline">
                  {{ item }}
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      targets: {
        startup: [
          'Construire votre prototype',
          'Externaliser votre CTO',
          'Gérer votre budget',
          'Piloter vos développements',
          'Anticiper votre évolution'
        ],
        company: [
          'Moderniser votre existant',
          'Lancer vos nouveaux projets',
          'Optimiser votre SI',
          "Attaquer d'autres marchés",
          'Dynamiser votre activité'
        ]
      }
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

.border-right {
  border-right: 1px #e69632 solid;
}

.border-left {
  border-left: 1px #e69632 solid;
}

.divider::before {
  content: '';
  position: absolute;
  width: 34.5%;
  height: 10px;
  -webkit-transform: skew(-40deg);
  transform: skew(-40deg);
  border-bottom: 1px #fddd3a solid;
  border-right: 1px #fddd3a solid;
}

.divider::after {
  content: '';
  position: absolute;
  width: 34.5%;
  top: 0px;
  right: 0px;
  height: 10px;
  -webkit-transform: skew(-40deg);
  transform: skew(-40deg);
  border-top: 1px #fddd3a solid;
}
</style>
