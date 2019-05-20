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
              md8 
              class="pr-5">
              <v-layout 
                v-for="item in targets.company" 
                :key="item" 
                row 
                justify-center 
                class="text-xs-right py-3 pr-5">
                <v-flex class="white--text text-uppercase headline">
                  {{ item }}
                </v-flex>
                <v-flex 
                  shrink 
                  class="pl-5">
                  <svg 
                    :height="32" 
                    :width="50" 
                    class="mr-3 h-36">
                    <image 
                      :height="20" 
                      :width="50" 
                      x="0" 
                      y="10" 
                      xlink:href="/arrow-left.svg"/>
                  </svg>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex 
              md4 
              class="border-left text-xs-right pt-3">
              <v-layout 
                column 
                wrap 
                align-start 
                class="text-xs-right pl-5">
                <v-flex>
                  <v-layout 
                    column 
                    wrap 
                    class="pl-5">
                    <v-flex class="text-xs-center">
                      <svg 
                        :height="240" 
                        :width="300">
                        <image 
                          :height="400" 
                          :width="400" 
                          x="-50" 
                          y="-80" 
                          xlink:href="/company.svg"/>
                      </svg>
                    </v-flex>
                    <v-flex class="white--text text-xs-center text-uppercase headline">Nous boostons
                      <br>
                      <span class="lighter">votre business</span>
                    </v-flex>
                  </v-layout>
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
