const isPalindrome =
  number => ([...number.toString()].reverse().join('')) === number.toString();


/**
 * Generate palindrome-products table and calculate largest/smallest.
 *
 * @param {Number} [minFactor]
 * Minimum Factor
 *
 * @param {Number} [maxFactor]
 * Maximum Factor
 *
 * @return {{largest: number, smallest: number}}
 */
function generate({minFactor = 1, maxFactor = Number.MAX_VALUE}) {
  const factorsByProduct = {};
  for (let factor1 = minFactor; factor1 <= maxFactor; factor1++) {
    for (let factor2 = factor1; factor2 <= maxFactor; factor2++) {
      const product = factor1 * factor2;
      if (isPalindrome(product)) {
        const factors = factorsByProduct[product] || [];
        factors.push([factor1, factor2]);
        factorsByProduct[product] = factors;
      }
    }
  }
  const smallestProduct = Math.min(...Object.keys(factorsByProduct))
  const largestProduct = Math.max(...Object.keys(factorsByProduct))
  return {
    smallest: {
      value: smallestProduct,
      factors: factorsByProduct[smallestProduct]
    },
    largest: {
      value: largestProduct,
      factors: factorsByProduct[largestProduct]
    }
  };
}

export default generate;
