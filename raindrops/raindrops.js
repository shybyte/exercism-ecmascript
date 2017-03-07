const FACTOR_RAINDROP_PAIRS = [
  [3, 'Pling'],
  [5, 'Plang'],
  [7, 'Plong']
];

const convert = n => (
  (FACTOR_RAINDROP_PAIRS.map(([factor,drop]) => (n % factor === 0) ? drop : '').join(''))
  || ('' + n)
);

export default () => ({convert});