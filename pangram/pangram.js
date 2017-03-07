const numberOfDistinctElements = (array) => new Set(array).size;

export default (text = '') => ({
  isPangram: () => (
    numberOfDistinctElements(text.toLowerCase().replace(/[^a-z]/g, '').split('')) === 26
  )
});