const product = (array)=> array.reduce((ac, x) => ac * x, 1)

export  default (digitString) => {
  const digits = [...digitString].map(char => parseInt(char));

  const slice = (sliceLength) => {
    if (sliceLength > digits.length) {
      throw new Error('Slice size is too big.');
    }
    return digits.slice(0, digits.length - sliceLength + 1)
      .map((_, i) => digits.slice(i, i + sliceLength));
  };

  const largestProduct = sliceLength => {
    const slices = slice(sliceLength);
    if (digits.length === 0) {
      return 1;
    }
    return Math.max(...slices.map(product));
  };

  return {digits, slice, largestProduct};
}