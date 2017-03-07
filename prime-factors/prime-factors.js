const primeFactors = (nArg) => {
  if (nArg < 2) {
    return [];
  }

  let result = [];
  let i = 2;
  let n = nArg;

  while (i <= Math.sqrt(n)) {
    if (n % i === 0) {
      n = n / i;
      result.push(i);
    } else {
      i += 1;
    }
  }

  result.push(n);
  return result;
};


export default () => ({for: primeFactors});