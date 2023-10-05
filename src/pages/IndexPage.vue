<template>
  <div class="tw-w-screen">
    <div>
      <q-dialog v-model="showStarts">
        <q-card class="tw-bg-stone-500">
          <q-card-section>
            <StartsComponent :starts="characterInfor.starts" :equipments="characterInfor.equipments">
            </StartsComponent>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
    <div class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-4 tw-h-screen">
      <CharacterComponent :infor="characterInfor.infor" v-on:change="startHunting"></CharacterComponent>
    </div>
    <div>
      <q-dialog v-model="showEquips">
        <q-card class="tw-bg-stone-500">
          <q-card-section>
            <EquipsComponent :equips="characterInfor.equipments"></EquipsComponent>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
    <div>
      <q-dialog v-model="isHunting">
        <q-card class="tw-bg-stone-500">
          <q-card-section>
            <TestComponent></TestComponent>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script setup>
import {
  reactive, ref, onMounted,
} from 'vue';
import StartsComponent from 'src/components/StartsComponent.vue';
import EquipsComponent from 'src/components/EquipsComponent.vue';
import CharacterComponent from 'src/components/CharacterComponent.vue';
import TestComponent from 'src/components/sample/TestComponent.vue';

const showStarts = ref(false);
const showEquips = ref(false);
const isHunting = ref(false);
const characterInfor = reactive({
  infor: {
    charName: 'Nguyen Van A',
    model: '/images/bcdg.jpg',
    level: {
      title: 'Normal people',
      currentLevel: 0,
      currentExp: 0,
      toNextLevel: 10,
    },
  },
  starts: {
    health: 100,
    mana: 100,
    baseDamge: 1,
    baseElmDame: 0,
    basePhsDef: 0,
    baseElmDef: 0,
    root: [
      { type: 'Fire', value: 5 },
      { type: 'Thunder', value: 1 },
      { type: 'Water', value: 2 },
      { type: 'Grass', value: 3 },
      { type: 'Wind', value: 1 },
    ],
  },
  equipments: {
    head: {
      name: 'Viking helmet', phsArmor: 1, elmArmor: 1, image: '/images/viking_helmet.png',
    },
    hand: {
      name: 'Wooden Staff', type: 2, phsDame: 4, elmDame: 0, image: '/images/2hand_axe.png',
    },
    coat: {
      name: 'Viking Coat', phsArmor: 1, elmArmor: 0, image: '/images/viking_coat.png',
    },
    pant: {
      name: 'Leather Pant', phsArmor: 1, elmArmor: 0, image: '/images/m_leather_pant.png',
    },
  },
});

const startHunting = (val) => {
  isHunting.value = val;
  if (isHunting.value) {
    characterInfor.infor.level.currentExp += 1;
  }
};

onMounted(() => {
  document.addEventListener('keydown', (event) => {
    switch (event.code) {
      case 'KeyE':
        showStarts.value = false;
        showEquips.value = !showEquips.value;
        break;
      case 'KeyS':
        showEquips.value = false;
        showStarts.value = !showStarts.value;
        break;
      default:
        break;
    }
  });
});
</script>
