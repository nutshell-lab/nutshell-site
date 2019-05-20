<template>
  <v-layout 
    row 
    wrap 
    justify-center>
    <v-flex 
      xs11 
      sm10 
      lg8 
      class="py-3 my-5 pt-4">
      <v-layout 
        row 
        wrap 
        align-center>
        <v-carousel 
          height="230" 
          hide-controls 
          class="elevation-0 references">
          <v-carousel-item 
            v-for="(ref, index) in refs" 
            :key="index">
            <v-layout 
              row 
              wrap 
              align-content-center 
              class="reference">
              <v-flex 
                xs12 
                class="text-xs-center primary--text headline">
                <span class="secondary--text">"</span> {{ ref.comment }} <span class="secondary--text">"</span>
              </v-flex>
              <v-flex 
                xs12 
                class="text-xs-center primary--text headline mt-3">
                <span class="secondary--text text-uppercase">{{ ref.author }}</span> <span class="lighter">{{ ref.attributes }}</span>
              </v-flex>
            </v-layout>
          </v-carousel-item>
        </v-carousel>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      refs: [
        {
          comment:
            "We have to get what Red Badger are providing. With highly skilled teams, they are doing what the big consultancies who have been in here for years just can't do or translate into meaningful outcomes. This is the first time in two decades of banking that I've seen a transformation actually look like it might succeed.",
          author: 'Peter Pit',
          attributes: 'Nike CEO'
        },
        {
          comment:
            "We have to get what Red Badger are providing. With highly skilled teams, they are doing what the big consultancies who have been in here for years just can't do or translate into meaningful outcomes. This is the first time in two decades of banking that I've seen a transformation actually look like it might succeed.",
          author: 'Peter Pit',
          attributes: 'Nike CEO'
        },
        {
          comment:
            "We have to get what Red Badger are providing. With highly skilled teams, they are doing what the big consultancies who have been in here for years just can't do or translate into meaningful outcomes. This is the first time in two decades of banking that I've seen a transformation actually look like it might succeed.",
          author: 'Peter Pit',
          attributes: 'Nike CEO'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>

.reference * {
  font-family: 'Neue Plak ExtraBlack' !important;
}

.lighter {
  font-family: 'Neue Plak Regular' !important;
}

.references >>> .v-carousel__controls {
  background-color: white
}

.references >>> .v-btn--active::before {
  background-color: #5e2e70 !important
}

.references >>> i {
  color: #5e2e70 !important
}

</style>
