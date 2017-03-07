const ALLERGIES = [
  'eggs',
  'peanuts',
  'shellfish',
  'strawberries',
  'tomatoes',
  'chocolate',
  'pollen',
  'cats'
];

const isBitTrue = (bitSet, bitPos) => !!(bitSet & Math.pow(2, bitPos));

export default allergiesBitSet => ({
  allergicTo: name => isBitTrue(allergiesBitSet, ALLERGIES.indexOf(name)),
  list: () => ALLERGIES.filter((_, i) => isBitTrue(allergiesBitSet, i))
});

