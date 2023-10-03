<template>
  <div class="tw-container tw-mx-4 tw-my-4">
    <div class="tw-flex tw-flex-col tw-gap-2 tw-w-fit tw-p-2 tw-bg-gray-300">
      <div class="tw-flex tw-flex-col tw-gap-1">
          <div class="tw-flex-1">
            Health : {{ charactorInfor.starts.health }}
          </div>
          <div class="tw-flex-1">
            Mana : {{ charactorInfor.starts.mana }}
          </div>
          <div class="tw-flex-1">
            Physic Dame : {{ realPhysicDmg }}
          </div>
          <div class="tw-flex-1">
            Elemental Dame : {{ realElmDmg }}
          </div>
          <div class="tw-flex-1">
            Physic Def : {{ realPhysicArmor }}
          </div>
          <div class="tw-flex-1">
            Elemental Def : {{ realElmArmor }}
          </div>
      </div>
      <div class="tw-border tw-p-2">
        <div v-for="root in charactorInfor.root" :key="root"
          class="tw-flex tw-gap-1 tw-justify-start tw-text-center tw-items-center">
          <div class="tw-text-base">
            {{ root.type }} :
          </div>
          <div v-for="n in root.value" :key="n">
            <q-icon :name="roots[root.type].image" :class="roots[root.type].color" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';

const roots = ref({
  Fire: { image: 'local_fire_department', color: 'tw-text-red-400' },
  Thunder: { image: 'bolt', color: 'tw-text-purple-400' },
  Water: { image: 'water_drop', color: 'tw-text-blue-400' },
  Grass: { image: 'grass', color: 'tw-text-green-400' },
  Wind: { image: 'air', color: 'tw-text-sky-400' },
});

const charactorInfor = reactive({
  infor: {
    charName: 'Nguyen Van A',
    model: 'C:\\Users\\HienNH\\Pictures\\bcdg.jpg',
    level: {
      title: 'Normal people',
      currentLevel: 0,
      currentExp: 0,
      toNextLevel: 100,
    },
  },
  starts: {
    health: 100,
    mana: 100,
    baseDamge: 1,
    baseElmDame: 0,
    basePhysicDef: 0,
    baseElmDef: 0,
  },
  root: [
    { type: 'Fire', value: 5 },
    { type: 'Thunder', value: 1 },
    { type: 'Water', value: 2 },
    { type: 'Grass', value: 3 },
    { type: 'Wind', value: 1 },
  ],
  equipments: {
    head: {
      name: '', physicArmor: 0, elmArmor: 0, enchant: 0,
    },
    hand: {
      name: '', enchant: 0, physicDame: 1, elmDame: 0,
    },
    coat: {
      name: '', physicArmor: 0, elmArmor: 0, enchant: 0,
    },
    pants: {
      name: '', physicArmor: 0, elmArmor: 0, enchant: 0,
    },
  },
});

const realPhysicDmg = ref(0);
const realElmDmg = ref(0);
const realPhysicArmor = ref(0);
const realElmArmor = ref(0);

const calculateRealStart = () => {
  realPhysicDmg.value = charactorInfor.starts.basePhysicDef
    + charactorInfor.equipments.hand.physicDame;
  realElmDmg.value = charactorInfor.starts.baseElmDame
    + charactorInfor.equipments.hand.elmDame;
  realPhysicArmor.value = charactorInfor.starts.basePhysicDef
    + charactorInfor.equipments.head.physicArmor
    + charactorInfor.equipments.coat.physicArmor
    + charactorInfor.equipments.pants.physicArmor;
  realElmArmor.value = charactorInfor.starts.baseElmDef
    + charactorInfor.equipments.head.elmArmor
    + charactorInfor.equipments.coat.elmArmor
    + charactorInfor.equipments.pants.elmArmor;
};
onMounted(() => {
  calculateRealStart();
  console.log(roots.value);
});
</script>
