const PLANTS = {
  R: 'radishes',
  C: 'clover',
  G: 'grass',
  V: 'violets'
};

const DEFAULT_KIDS = [
  'Alice', 'Bob', 'Charlie', 'David',
  'Eve', 'Fred', 'Ginny', 'Harriet',
  'Ileana', 'Joseph', 'Kincaid', 'Larry'
];

export default (gardenMap, kids = DEFAULT_KIDS) => {
  const sortedKids = Array.from(kids).sort();
  const secondRowOffset = gardenMap.indexOf('\n') + 1;
  const result = {};
  sortedKids.forEach((kidName, i) => {
    const offsetStart = i * 2;
    const offsets = [
      offsetStart, offsetStart + 1,
      offsetStart + secondRowOffset, offsetStart + 1 + secondRowOffset
    ];
    const plantNames = offsets.map(offset => PLANTS[gardenMap[offset]]);
    result[kidName.toLowerCase()] = plantNames;
  });
  return result;
};