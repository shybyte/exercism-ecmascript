const INVALID_RESULT = 0;

const toDecimal = ([...digits]) =>
  digits.reduce((ac, digit, i) => 8 * ac + (1 * digit), 0);

export default (octalString) => ({
  toDecimal: () => {
    if (!(/^[0-7]+$/.test(octalString))) {
      return INVALID_RESULT;
    }
    return toDecimal(octalString);
  }
});