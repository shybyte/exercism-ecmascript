export default (array, accumulator) =>
  array.reduce((ac, el) => (ac.push(accumulator(el)), ac), []);