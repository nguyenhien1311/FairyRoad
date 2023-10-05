<script setup>
import { onMounted, ref } from 'vue';
import { ADVENTURE } from 'src/helpers/enum';

const evtPhsTraining = ref(false);
const evtHealing = ref(false);
const randomEvent = ADVENTURE[Math.floor(Math.random() * ADVENTURE.length)];

const handleEvent = (event, result) => {
  console.log(event.type, result);
  switch (event.type) {
    case 'evtHealing':
      if (result) {
        evtHealing.value = true;
      }
      break;

    default:
      break;
  }
};

onMounted(() => {
  console.log(randomEvent);
});
</script>

<template>
  <div>
    <div class="tw-text-white">{{ randomEvent.textShowing }}</div>
    <div class="tw-flex tw-flex-col tw-items-start tw-gap-1 tw-mt-4 tw-ml-4">
      <button v-for="opt in  randomEvent.option " :key="opt"
        :class="['tw-underline', opt.value ? 'tw-text-green-300' : 'tw-text-gray-300']"
        @click="handleEvent(randomEvent, opt.result)">
        {{ opt.label }}</button>
    </div>
  </div>
  <div v-if="evtPhsTraining">
    <div class="ryu "></div>
    <div class="tw-flex tw-justify-center tw-text-white tw-my-4">
      You train your self gain 1 Physical Dame !
    </div>
  </div>
  <div v-if="evtHealing">
    <img src="/gifs/healing.gif" alt="Healling" />
    <div class="tw-flex tw-justify-center tw-text-white tw-my-4">
      You restting and heal 10 HP !
    </div>
  </div>
</template>

<style scoped>
.flip {
  -webkit-transform: scaleX(-1);
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  transform: scaleX(-1);
}

.ryu {
  width: 435px;
  height: 267px;
  /* positioning tweak */
  background: url('http://bennet.org/images/codepen/ryu-sprite-demo.png') no-repeat 0 0%;
  animation: sprite 3.5s steps(45) infinite;
}

@keyframes sprite {
  from {
    background-position: 0 0%;
  }

  to {
    background-position: 0 100%;
  }
}
</style>
