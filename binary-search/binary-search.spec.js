import BinarySearch from './binary-search';

describe('BinarySearch', () => {

  const sortedArray = [1, 2, 3, 4, 5, 6];
  const sortedArrayOfOddLength = [0, 1, 2, 2, 3, 10, 12];
  const unsortedArray = [10, 2, 5, 1];

  it ('should require a sorted array', () => {
    const invalidBinarySearch = new BinarySearch(unsortedArray);
    const validBinarySearch = new BinarySearch(sortedArray);

    expect(typeof invalidBinarySearch.array).toEqual('undefined');
    expect(Array.isArray(validBinarySearch.array)).toEqual(true);
  });

  it('empty array', () => {
    expect(new BinarySearch([]).indexOf(1)).toEqual(-1);
  });

  it('search 1 in [1]', () => {
    expect(new BinarySearch([1]).indexOf(1)).toEqual(0);
  });
  
  it('search 2 in [1]', () => {
    expect(new BinarySearch([2]).indexOf(1)).toEqual(-1);
  });

  it('search 1 in [1,2]', () => {
    expect(new BinarySearch([1,2]).indexOf(1)).toEqual(0);
  });

  it('search 2 in [1,2]', () => {
    expect(new BinarySearch([1,2]).indexOf(2)).toEqual(1);
  });

  it('should find the correct index of an included value', () => {
    expect(new BinarySearch(sortedArray).indexOf(3)).toEqual(2);
  });

  it('should search the middle of the array', () => {
    expect(new BinarySearch(sortedArrayOfOddLength).indexOf(2)).toEqual(3);
  });

  it('should return -1 for a value not in the array', () => {
    expect(new BinarySearch(sortedArray).indexOf(10)).toEqual(-1);
  });

});

