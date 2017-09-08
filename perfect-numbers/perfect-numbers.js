function calculateAliquotSum(x) {
  let sum = 0;
  for (let d = 1; d < x; d++) {
    if (x % d === 0) {
      sum += d;
    }
  }
  return sum;
}

export default class PerfectNumbers {
  classify(number) {
    if (number < 1) {
      throw 'Classification is only possible for natural numbers.';
    }
    const aliquotSum = calculateAliquotSum(number);
    if (aliquotSum === number) {
      return 'perfect';
    } else if (aliquotSum > number) {
      return 'abundant';
    } else {
      return 'deficient'
    }
  }
}