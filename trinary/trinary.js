const INVALID_TRINARY_RESULT = 0;

const toDecimal = ([...digits]) =>
  digits.reduce((ac, digit, i) => 3 * ac + (1 * digit), 0);

export default (trinaryString) => ({
  toDecimal: () => {
    if (!(/^[012]+$/.test(trinaryString))) {
      return INVALID_TRINARY_RESULT;
    }
    return toDecimal(trinaryString);
  }
});