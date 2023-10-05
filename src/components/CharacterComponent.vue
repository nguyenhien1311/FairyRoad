<script setup>
import ExpBarComponent from 'src/components/ExpBarComponent.vue';
import { ref } from 'vue';

const props = defineProps(['infor']);
const { infor } = props;

const emit = defineEmits(['change']);

const isHunting = ref(false);

const startHunting = (val) => {
  isHunting.value = val;
  emit('change', true);
};

</script>

<template>
  <div class="tw-flex tw-flex-col tw-gap-5">
    <div class="tw-flex tw-justify-center tw-mb-5 tw-text-lg">
      {{ infor.level.title }}
    </div>
    <q-img :src="infor.model" :ratio="1" class="tw-w-96 tw-h-96 floating" />
    <ExpBarComponent :level="infor.level" v-on:change="startHunting">
    </ExpBarComponent>
  </div>
</template>
<style scoped>
.floating {
  animation: float 4s infinite;
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }

  50% {
    transform: translatey(-20px);
  }

  100% {
    transform: translatey(0px);
  }
}
</style>
