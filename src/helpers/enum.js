export const LIST_ROOT = {
  Fire: { image: 'local_fire_department', color: 'tw-text-red-400' },
  Thunder: { image: 'bolt', color: 'tw-text-purple-400' },
  Water: { image: 'water_drop', color: 'tw-text-blue-400' },
  Grass: { image: 'grass', color: 'tw-text-green-400' },
  Wind: { image: 'air', color: 'tw-text-sky-400' },
};

export const ADVENTURE = [
  {
    type: 'evtHealing',
    textShowing: 'You found a chilling stream behind the trees. It\'s look so peaceful! You decided to :',
    option: [
      { label: 'Continue traveling', value: false, result: 'You continue going!' },
      { label: 'Stop and rest', value: true, result: 'You sit down and rest! You heal 10 HP' },
    ],
  },
  {
    type: 'evtPhsTraining',
    textShowing: 'You found an old man. He want to teach you some move! You decided to :',
    option: [
      { label: 'Ignore him, You don\'t need that', value: false, result: 'You continue going!' },
      { label: 'Let him teach you', value: true, result: 'You train your self gain 1 Physical Dame !' },
    ],
  },
];
