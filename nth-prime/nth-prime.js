export default () => {
  const primes = [2];
  let currentCandidate = 3;
  return {
    nth: (nthIndex) => {
      if (!(Number.isInteger(nthIndex) && nthIndex > 0)) {
        throw new Error('Prime is not possible');
      }
      const i = nthIndex - 1;
      while (!primes[i]) {
        if (primes.every(prime => currentCandidate % prime !== 0)) {
          primes.push(currentCandidate);
        }
        currentCandidate += 1;
      }
      return primes[i];
    }
  };
};