<script setup>
import {
  computed, onMounted, reactive, ref,
} from 'vue';
import { LEVEL, EXP, HUNT } from 'src/helpers/tooltip';
import ToolTip from 'components/common/ToolTip.vue';
import FireAnimation from 'components/common/animation/FireAnimation.vue';

const props = defineProps(['level']);
const { level } = props;
const maxExp = ref();
const isMaxExp = computed(() => level.currentExp === maxExp.value);
const expPercent = computed(() => level.currentExp / maxExp.value);

const expAdditional = reactive([
  { label: 'Curent Exp', value: 0 },
  { label: 'To next Level', value: 0 },
]);

const emit = defineEmits(['change']);

const startHunting = () => {
  emit('change', true);
};

onMounted(async () => {
  maxExp.value = level.currentExp + level.toNextLevel;
  expAdditional[0].value = level.currentExp;
  expAdditional[1].value = level.toNextLevel;
});
</script>

<template>
  <div class="tw-w-full tw-flex tw-flex-col tw-gap-4">
    <div class="tw-flex tw-items-center tw-justify-center tw-gap-2 tw-w-full">
      <q-linear-progress size="10px" :value="expPercent" color="teal-4" track-color="blue-grey-4" rounded>
        <tool-tip :displayObj="EXP" displayType="exp" :additionInfor="expAdditional"></tool-tip>
      </q-linear-progress>
      <div class="tw-inline tw-w-[1.5rem] tw-h-[1.5rem]">
        <FireAnimation v-if="isMaxExp" class="tw-w-[1.5rem] tw-h-[1.5rem]" />
        <q-icon v-else name="fiber_manual_record" color="grey-6" size="1.5rem" />
        <tool-tip :displayObj="LEVEL"></tool-tip>
      </div>
    </div>
    <div class="tw-w-full">
      <div class="tw-flex tw-justify-center">
        <q-icon name="mdi-sword-cross" color="gray-5" size="2rem"
          class="tw-rounded-full tw-border-2 tw-border-gray-400 tw-p-1" @click="startHunting()">
          <tool-tip :displayObj="HUNT"></tool-tip>
        </q-icon>
      </div>
    </div>
  </div>
</template>
