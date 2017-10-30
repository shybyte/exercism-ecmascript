/* eslint-disable no-use-before-define,object-curly-spacing,no-plusplus,comma-dangle */

// https://www.youtube.com/watch?v=rdI94aW6IWw
function calculate(coins, changeValue) {
  if (changeValue < 0) {
    throw new Error('Negative totals are not allowed.');
  }

  const c = [0];
  const s = [0];

  for (let x = 1; x <= changeValue; x++) {
    const [minCost, minCoin] = findMin(coins, coin =>
      ((coin <= x) ? c[x - coin] + 1 : Number.MAX_VALUE)
    );
    c.push(minCost);
    s.push(minCoin);
  }

  if (c[changeValue] === Number.MAX_VALUE) {
    throw new Error(`The total ${changeValue} cannot be represented in the given currency.`);
  }

  const result = [];
  for (let i = changeValue; i > 0; i -= s[i]) {
    result.push(s[i]);
  }

  return result;
}

function findMin(array, getWeight) {
  let minIndex = -1;
  let minWeight = Number.MAX_VALUE;

  array.forEach((v, i) => {
    const weight = getWeight(v);
    if (weight < minWeight) {
      minIndex = i;
      minWeight = weight;
    }
  });

  return [minWeight, array[minIndex]];
}

export default () => ({calculate});
