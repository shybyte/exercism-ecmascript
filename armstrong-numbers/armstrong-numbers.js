function sum(numbers) {
  return numbers.reduce((x, y) => x + y, 0);
}

function validate(x) {
  const digits = [...x.toString()].map(char => parseInt(char, 10));
  return x === sum(digits.map(d => d ** digits.length));
}

export default {validate};