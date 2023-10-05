<script setup>
import { computed } from 'vue';
import RootsComponent from 'src/components/RootsComponent.vue';

const props = defineProps(['starts', 'equipments']);
const { starts, equipments } = props;

const realPhsDmg = computed(() => starts.basePhsDef
  + equipments.hand.phsDame);

const realElmDmg = computed(() => starts.baseElmDame
  + equipments.hand.elmDame);

const realPhsArmor = computed(() => starts.basePhsDef
  + equipments.head.phsArmor
  + equipments.coat.phsArmor
  + equipments.pant.phsArmor);

const realElmArmor = computed(() => starts.baseElmDef
  + equipments.head.elmArmor
  + equipments.coat.elmArmor
  + equipments.pant.elmArmor);

</script>

<template>
  <div class="tw-flex tw-flex-col tw-gap-2 tw-min-w-[235px] tw-w-fit tw-p-2 tw-text-white">
    <fieldset class="tw-border tw-border-solid tw-border-gray-300 tw-p-3">
      <legend class="tw-text-sm tw-text-center">
        Character Starts</legend>
      <div class="tw-flex tw-flex-col tw-gap-1">
        <div class="tw-flex-1">
          Health : {{ starts.health }}
        </div>
        <div class="tw-flex-1">
          Mana : {{ starts.mana }}
        </div>
        <div class="tw-flex-1 tw-flex tw-gap-2 tw-items-center">
          Phs.Dame : {{ realPhsDmg }}
          <q-icon name="mdi-sword" size="1.5rem"></q-icon>
        </div>
        <div class="tw-flex-1 tw-flex tw-gap-2 tw-items-center">
          Elm.Dame : {{ realElmDmg }}
          <q-icon name="mdi-magic-staff" size="1.5rem"></q-icon>
        </div>
        <div class="tw-flex-1 tw-flex tw-gap-2 tw-items-center">
          Phs.Def : {{ realPhsArmor }}
          <q-icon name="mdi-shield-sword-outline" size="1.5rem"></q-icon>
        </div>
        <div class="tw-flex-1 tw-flex tw-gap-2 tw-items-center">
          Elm.Def : {{ realElmArmor }}
          <q-icon name="mdi-shield-sun-outline" size="1.5rem"></q-icon>
        </div>
      </div>
    </fieldset>
    <RootsComponent :roots="starts.root"></RootsComponent>
  </div>
</template>
