import BigInt from './big-integer';

const pow = (base, exponent) => BigInt(base).pow(exponent);

export default () => ({
  square: (field) => pow(2, field - 1).toString(),
  total: () => pow(2, 64).subtract(1).toString()
})