const INVALID_RESULT = 0;

const DIGITS = '0123456789abcdef';

const toDecimal = ([...digits]) =>
  digits.reduce((ac, digit, i) => 16 * ac + DIGITS.indexOf(digit), 0);

export default (hexadecimalString) => ({
  toDecimal: () => {
    if (!(/^[0-9a-f]+$/.test(hexadecimalString))) {
      return INVALID_RESULT;
    }
    return toDecimal(hexadecimalString);
  }
});