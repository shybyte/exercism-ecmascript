export default (lettersByScore) => {
  const result = {};
  Object.entries(lettersByScore).forEach(([score, letters]) => {
    letters.forEach(letter => {
      result[letter.toLowerCase()] = parseInt(score);
    });
  });
  return result;
}

