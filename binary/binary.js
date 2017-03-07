const INVALID_BINARY_RESULT = 0;

// Just for inefficient fun: Let's use recursion on reversed binary string.
const toDecimal =
  ([head, ...tail]) => (1 * head) + (tail.length > 0 ? 2 * toDecimal(tail) : 0);

export default (binaryString) => ({
  toDecimal: () => {
    if (!(/^[01]+$/.test(binaryString))) {
      return INVALID_BINARY_RESULT;
    }
    return toDecimal(binaryString.split('').reverse());
  }
});