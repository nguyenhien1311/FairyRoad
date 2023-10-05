<script setup>
import { ARMOR, WEAPON } from 'src/helpers/tooltip';
import ToolTip from 'components/common/ToolTip.vue';

const props = defineProps(['equips']);
const { equips } = props;

</script>

<template>
  <fieldset class="tw-border tw-border-solid tw-border-gray-300 tw-p-5 tw-m-2">
    <legend class="tw-text-sm tw-text-center tw-text-white">
      Equipments</legend>
    <div class="tw-flex tw-flex-col tw-gap-4">
      <div>
        <div class="tw-flex tw-justify-center">
          <div class="armor head armor-center">
            <q-img :src="equips.head.image" :ratio="1" class="tw-w-[70px] tw-h-[70px]" loading="lazy" />
            <tool-tip :displayObj="ARMOR" displayType="armor" :additionInfor="equips.head"></tool-tip>
          </div>
        </div>
      </div>
      <div class="tw-flex tw-flex-row tw-gap-3">
        <div class="tw-flex tw-justify-center">
          <div class="armor weapon armor-center">
            <q-img :src="equips.hand.image" :ratio="1" class="tw-w-[50px] tw-h-[120px]" loading="lazy" />
            <tool-tip :displayObj="WEAPON" displayType="weapon" :additionInfor="equips.hand"></tool-tip>
          </div>
        </div>
        <div>
          <div class="armor body armor-center">
            <q-img :src="equips.coat.image" :ratio="1" class="tw-w-[100px] tw-h-[100px]" loading="lazy" />
            <tool-tip :displayObj="ARMOR" displayType="armor" :additionInfor="equips.coat"></tool-tip>
          </div>
        </div>
        <div class="tw-flex tw-justify-center">
          <div class="armor weapon armor-center">
            <q-img :src="equips.hand.image" :ratio="1" :class="['tw-w-[50px] tw-h-[120px]',
              equips.hand.type === 2 ? 'tw-opacity-25' : '']" loading="lazy" />
            <tool-tip :displayObj="WEAPON" displayType="weapon" :additionInfor="equips.hand"></tool-tip>
          </div>
        </div>
      </div>
      <div>
        <div class="tw-flex tw-justify-center">
          <div class="armor pant armor-center">
            <q-img :src="equips.pant.image" :ratio="1" class="tw-w-[100px] tw-h-[150px]" loading="lazy" />
            <tool-tip :displayObj="ARMOR" displayType="armor" :additionInfor="equips.pant"></tool-tip>
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</template>
<style scoped>
.armor {
  @apply tw-border tw-border-white
}

.armor.head {
  @apply tw-w-[100px] tw-min-h-[100px] tw-max-h-[150px]
}

.armor.body {
  @apply tw-min-w-[170px] tw-max-w-[200px] tw-min-h-[170px] tw-max-h-[200px]
}

.armor.pant {
  @apply tw-min-w-[170px] tw-max-w-[250px] tw-min-h-[200px] tw-max-h-[250px]
}

.armor.weapon {
  @apply tw-w-[100px] tw-h-[170px]
}

.armor.armor-center {
  @apply tw-flex tw-justify-center tw-items-center
}
</style>
