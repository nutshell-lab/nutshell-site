<template>
  <v-layout row wrap align-center justify-center class="static">
    <svg :height="1300" :width="500" class="ml-3 absolute animated">
      <image x="0" y="0" :height="1300" :width="500" xlink:href="/flash.svg"/>
    </svg>
    <v-flex xs11 sm10 lg8 class="py-2 my-2 front">
      <v-layout column wrap align-start justify-center class="primary--text">
        <v-flex shrink class="py-5 my-5">
          <template class="front">
            <div class="display-4 extra-black">WE</div>
            <div class="display-4 extra-black">BUILD</div>
            <div class="h-340">
              <template v-if="showAll">
                <no-ssr>
                  <vue-typer class="typer-title display-4" :text="done ? '' : item.title" 
                    :typeDelay="100"
                    :preTypeDelay="1000"
                    eraseStyle="backspace"
                    :preEraseDelay="titlePreEraseDelay"
                    :eraseDelay="titleEraseDelay"
                    @typed="startTypingDescription"
                    @erased="done = true"
                  ></vue-typer>
                </no-ssr>
                <div class="mt-5 h-130">
                  <no-ssr>
                    <vue-typer class="typer-subtitle display-1" :text="showDescription ? item.description : ''"
                      :typeDelay="descriptionTypeDelay" 
                      :preTypeDelay="0" 
                      eraseStyle="backspace"
                      :eraseDelay="descriptionEraseDelay"
                      :preEraseDelay="descriptionPreEraseDelay"
                      @erased="rotate"
                    ></vue-typer>
                  </no-ssr>
                </div>
              </template>
            </div>
          </template>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import shuffle from 'lodash/shuffle'
if (process.browser) {
  var VueTyper = require('vue-typer').VueTyper
}

const items = [
  {
    title: 'COOKIES',
    description: "Chocolate, fruits even grapes... they're all delicious."
  },
  {
    title: 'PROJECTS',
    description: "Look at them they're fun and smooth... but everything has a price."
  },
  {
    title: 'THINGS',
    description: "A connected toothbrush or a nuclear weapon, we can make all your dreams come true"
  }
]

export default {
  components: {
    VueTyper
  },
  data() {
    return {
      shuffledItems: shuffle(items),
      currentItem: 0,
      showDescription: false,
      titlePreEraseDelay: 0,
      titleEraseDelay: 120,
      descriptionEraseDelay: 5,
      descriptionPreEraseDelay: 5000,
      descriptionTypeDelay: 5,
      showAll: false,
      done: false
    }
  },
  computed: {
    item() {
      return this.shuffledItems[this.currentItem]
    }
  },
  mounted() {
    this.computeTime()
    this.showAll = true
  },
  methods: {
    startTypingDescription() {
      this.showDescription = true
    },
    rotate() {
      this.showAll = false
      const nextIndex = this.currentItem + 1
      this.currentItem = nextIndex === this.shuffledItems.length ? 0 : nextIndex
      this.computeTime()
      this.showDescription = false
      this.done = false
      this.showAll = true
    },
    computeTime() {
      this.titlePreEraseDelay = (this.item.description.length * this.descriptionTypeDelay) + this.descriptionPreEraseDelay + 500
    }
  }
}
</script>

<style>
.extra-black {
  font-family: 'Neue Plak Wide ExtraBlack' !important;
}

.h-150 {
  height: 130px
}

.h-340 {
  height: 340px
}

.absolute {
  position: absolute;
  z-index: 0
}

.static {
  position: static
}

.front {
  position: relative;
  z-index: 1
}

.animated {
  top: -150px;
  right: 10%;
  -webkit-animation: TopPosition 15s ease infinite, RightPosition 13s ease infinite;
	-moz-animation: TopPosition 15s ease infinite, RightPosition 13s ease infinite;
	animation: TopPosition 15s ease infinite, RightPosition 13s ease infinite;
}

@-webkit-keyframes TopPosition {
	0% {
		top: -150px;
	}
	50% {
		top: -170px;
	}
	100% {
		top: -150px;
	}
}

@-moz-keyframes TopPosition {
	0% {
		top: -150px;
	}
	50% {
		top: -170px;
	}
	100% {
		top: -150px;
	}
}

@keyframes TopPosition {
	0% {
		top: -150px;
	}
	50% {
		top: -170px;
	}
	100% {
		top: -150px;
	}
}

@-webkit-keyframes RightPosition {
	0% {
		right: 20%;
	}
	50% {
		right: 22%;
	}
	100% {
		right: 20%;
	}
}

@-moz-keyframes RightPosition {
	0% {
		right: 20%;
	}
	50% {
		right: 22%;
	}
	100% {
		right: 20%;
	}
}

@keyframes RightPosition {
	0% {
		right: 20%;
	}
	50% {
		right: 22%;
	}
	100% {
		right: 20%;
	}
}

</style>
