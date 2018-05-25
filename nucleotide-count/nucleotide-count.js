function parse(dnaString) {
  const counts = { A: 0, C: 0, G: 0, T: 0 };
  [...dnaString].forEach((char) => {
    if (!(char in counts)) {
      throw new Error('Invalid nucleotide in strand');
    }
    counts[char] += 1;
  });
  return Object.values(counts).join(' ');
}

export default { parse };
