export default () => ({
  count: text => {
    const wordCounts = {};
    text.trim().split(/\s+/).forEach(word => {
      wordCounts[word] = wordCounts.hasOwnProperty(word) ? (wordCounts[word] + 1) : 1;
    });
    return wordCounts;
  }
});