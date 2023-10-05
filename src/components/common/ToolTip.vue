<script setup>

const props = defineProps(['displayObj', 'displayType', 'additionInfor']);
const { displayObj, displayType, additionInfor } = props;

</script>

<template>
  <q-tooltip class="tw-bg-slate-500">
    <div class="tw-flex tw-flex-col tw-gap-4">
      <div class="tw-italic tw-flex tw-flex-col">
        <div>
          {{ displayObj.detail }}
        </div>
        {{ displayObj.description }}
      </div>
      <div v-if="displayType === 'exp'">
        <div class="tw-flex tw-justify-between" v-for="infor in additionInfor" :key="infor">
          <div> {{ infor.label }} XP</div>
          <div> {{ infor.value }} XP</div>
        </div>
      </div>
      <div v-if="displayType === 'armor'">
        <div class="tw-flex tw-flex-col">
          <div class="tw-text-sm"> {{ additionInfor.name }} </div>
          <div> + {{ additionInfor.phsArmor }} <q-icon name="mdi-shield-sword-outline" size="1.5rem"></q-icon></div>
          <div> + {{ additionInfor.elmArmor }} <q-icon name="mdi-shield-sun-outline" size="1.5rem"></q-icon></div>
        </div>
      </div>
      <div v-if="displayType === 'weapon'">
        <div class="tw-flex tw-flex-col">
          <div class="tw-text-sm"> {{ additionInfor.name }} </div>
          <div> {{ additionInfor.type }} hand weapon</div>
          <div> + {{ additionInfor.phsDame }} <q-icon name="mdi-sword" size="1.5rem"></q-icon></div>
          <div> + {{ additionInfor.elmDame }} <q-icon name="mdi-magic-staff" size="1.5rem"></q-icon></div>
        </div>
      </div>
    </div>
  </q-tooltip>
</template>
