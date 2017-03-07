export  default (digitString) => {
  const digits = [...digitString].map(char => parseInt(char));

  const slices = (sliceLength) => {
    if (sliceLength > digits.length) {
      throw new Error('Slice size is too big.');
    }
    return digits.slice(0, digits.length - sliceLength + 1)
      .map((_, i) => digits.slice(i, i + sliceLength));
  };

  return {digits, slices};
}