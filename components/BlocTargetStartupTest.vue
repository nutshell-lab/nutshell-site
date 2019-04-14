<template>
  <v-layout row wrap class="primary" justify-center>
    <svg :height="2000" :width="2000" class="watermark">
        <image x="0" y="-500" :height="2000" :width="2000" xlink:href="/startup.svg"/>
      </svg>
    <v-flex xs12 lg10 class="py-3 mb-4">
      <v-layout row wrap align-center justify-center>
        <v-flex xs12 lg10 xl8>
          <v-layout class="border-bottom" row wrap justify-center align-center>
            <v-flex class="text-xs-center py-4">
              <v-layout row wrap justify-center align-center class="text-xs-center">
                <v-flex data-aos="fade-right" class="white--text text-xs-center text-uppercase headline">Nous portons
                  <span class="lighter">votre projet</span>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 lg10 xl8>
          <v-layout row wrap justify-center align-center>
            <v-flex xs12 class="text-xs-center">
              <v-layout row wrap justify-center align-center class="text-xs-center relative">
                <v-flex md6 class="bordered bordered-bottom bordered-left accent--text text-xs-center text-uppercase">
                  <v-card data-aos="zoom-in" flat class="transparent accent--text py-4">
                    <v-card-text class="display-2 pb-0 line-h-40">Construire</v-card-text>
                    <v-card-text class="pt-0">
                      <v-layout row wrap justify-center align-start>
                        <v-flex xs12 class="white--text headline thiner">votre&nbsp;</v-flex>
                        <v-flex xs12 class="display-1 lighter line-h-24">prototype</v-flex>
                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex md6 class="bordered bordered-bottom bordered-right accent--text text-xs-center text-uppercase">
                  <v-card data-aos="zoom-in" flat class="transparent accent--text">
                    <v-card-text class="display-1 lighter pb-0 line-h-32">Externaliser</v-card-text>
                    <v-card-text class="pt-0">
                      <v-layout row wrap justify-center align-start>
                        <v-flex shrink class="white--text headline thiner">votre&nbsp;</v-flex>
                        <v-flex shrink class="display-2 line-h-40">CTO</v-flex>
                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 lg10 xl8>
          <v-layout row wrap justify-center align-center>
            <v-flex xs12 class="text-xs-center">
              <v-card data-aos="zoom-in"  flat class="transparent accent--text py-4 text-uppercase">
                <v-card-text class="display-1">
                  <v-layout row wrap justify-center align-end>
                    <!-- <div class="diamond"></div> -->
                    <v-flex shrink class="display-1 lighter">Gérer&nbsp;</v-flex>
                    <v-flex shrink class="white--text headline  lighter">votre&nbsp;</v-flex>
                    <v-flex shrink class="display-1">budget</v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 lg10 xl8>
          <v-layout class="" row wrap justify-center align-center>
            <v-flex xs12 class="text-xs-center">
              <v-layout row wrap justify-center align-center class="text-xs-center relative">
                <v-flex md6 class="bordered bordered-top bordered-left accent--text text-xs-center text-uppercase">
                  <v-card data-aos="zoom-in"  flat class="transparent accent--text py-4">
                    <v-card-text class="display-1 pb-0">
                      <v-layout row wrap justify-center align-end>
                        <v-flex shrink class="display-2 lighter line-h-40">Piloter&nbsp;</v-flex>
                        <v-flex shrink class="white--text title lighter">vos</v-flex>
                      </v-layout>
                    </v-card-text>
                    <v-card-text class="display-1 pt-0">
                        <v-flex shrink>développements</v-flex>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex md6 class="bordered bordered-top bordered-right accent--text text-xs-center text-uppercase">
                  <v-card data-aos="zoom-in"  flat class="transparent accent--text py-4">
                    <v-card-text class="display-2 pb-0">Anticiper</v-card-text>
                    <v-card-text class="subheading pt-0">
                      <v-layout row wrap justify-center align-center>
                        <v-flex xs12 class="white--text headline thiner">votre&nbsp;</v-flex>
                        <v-flex xs12 class="display-1 lighter line-h-24">évolution</v-flex>
                      </v-layout>
                    </v-card-text>
                  </v-card>
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
        ]
      }
    }
  }
}
</script>

<style scoped >
.watermark {
  position: absolute;
  opacity: 0.1;
  right: -900px;
  top: -430px
}

.layout * {
  font-family: 'Neue Plak Wide ExtraBlack' !important;
}

.lighter {
  font-family: 'Neue Plak Wide Light' !important;
}

.thiner {
  font-family: 'Neue Plak Wide Thin' !important;
}

.relative {
  position: relative;
}

.bordered::before {
  z-index: 1;
  content: "";
  position: absolute;
  height: 15px;
  width: calc(45% - 55px);
}

.bordered-bottom::before {
  border-bottom: 1px solid white !important;
  bottom: 0px;
}

.bordered-top::before {
  border-top: 1px solid white !important;
  top: 0px;
}

.bordered-left::before {
  right: calc(50% + 50px);
  border-right: 1px solid white !important
}

.bordered-left.bordered-bottom::before {
  -webkit-transform: skew(-40deg);
  transform: skew(-40deg);
}
.bordered-left.bordered-top::before {
  -webkit-transform: skew(40deg);
  transform: skew(40deg);
}
.bordered-right.bordered-bottom::before {
  -webkit-transform: skew(40deg);
  transform: skew(40deg);
}
.bordered-right.bordered-top::before {
  -webkit-transform: skew(-40deg);
  transform: skew(-40deg);
}

.bordered-right::before {
  left: calc(50% + 50px);
  border-left: 1px solid white !important
}

.diamond {
  z-index: 3;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  width: 700px;
  height: 700px;
  opacity: 0.1;
  border: #111111 20px solid;
  position: absolute;
  top: calc(50% - 350px);
}

.border-bottom {
  border-bottom: solid 1px white
}

.border-right {
  border-right: solid 1px white
}

.line-h-24 {
  line-height: 24px !important;
}

.line-h-40 {
  line-height: 40px !important;
}

.line-h-32 {
  line-height: 32px !important;
}


.divider::before {
  content: "";
  position: absolute;
  width: 34.5%;
  height: 10px;
  -webkit-transform: skew(-40deg);
  transform: skew(-40deg);
  border-bottom: 1px #fddd3a solid;
  border-right: 1px #fddd3a solid
}

.divider::after {
  content: "";
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

