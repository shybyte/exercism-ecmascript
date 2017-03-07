const negatePredicate = predicate => (el => !predicate(el));

const keep = (array, predicate) =>
  array.reduce((ac, el) => predicate(el) ? (ac.push(el), ac) : ac, []);

const discard = (array, predicate) =>
  keep(array, negatePredicate(predicate));

export default {keep, discard};