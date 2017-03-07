import generate from './palindrome-products';

describe("Palindrome", function() {

  it("largest palindrome from single digit factors", function() {
    const palindromes = generate({maxFactor: 9});
    const largest = palindromes.largest;

    expect(largest.value).toEqual(9);
    expect(largest.factors).toContain([1, 9],[3, 3]);
  });

  it("largest palindrome from double digit factors", function() {
    const palindromes = generate({ maxFactor: 99, minFactor: 10 });
    const largest = palindromes.largest;

    expect(largest.value).toEqual(9009);
    expect(largest.factors.join()).toEqual([91, 99].join());
  });

  it("smallest palindrome from double digit factors", function() {
    const palindromes = generate({ maxFactor: 99, minFactor: 10 });
    const smallest = palindromes.smallest;

    expect(smallest.value).toEqual(121);
    expect(smallest.factors.join()).toEqual([11, 11].join());
  });

  it("largest palindrome from triple digit factors", function() {
    const palindromes = generate({ maxFactor: 999, minFactor: 100 });
    const largest = palindromes.largest;

    expect(largest.value).toEqual(906609);
    expect(largest.factors.join()).toEqual([913, 993].join());
  });

  it("smallest palindrome from triple digit factors", function() {
    const palindromes = generate({ maxFactor: 999, minFactor: 100 });
    const smallest = palindromes.smallest;

    expect(smallest.value).toEqual(10201);
    expect(smallest.factors.join()).toEqual([101, 101].join());
  });

});
