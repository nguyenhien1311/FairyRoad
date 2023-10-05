<script setup>
import { LIST_ROOT } from 'src/helpers/enum';

const props = defineProps(['roots']);
const { roots } = props;

</script>

<template>
  <fieldset class="tw-border tw-border-solid tw-border-gray-300 tw-p-3 ">
    <legend class="tw-text-sm tw-text-center">
      Elemental Roots</legend>
    <div v-for="root in roots" :key="root" class="tw-flex tw-gap-1">
      <div class="tw-text-base">
        {{ root.type }} :
      </div>
      <div v-for="n in root.value" :key="n">
        <q-icon :name="LIST_ROOT[root.type].image" :class="LIST_ROOT[root.type].color" size="xs" />
      </div>
    </div>
  </fieldset>
</template>
