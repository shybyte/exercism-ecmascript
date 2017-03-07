import Triplet from './pythagorean-triplet';

describe('Triplet', () => {

  it('calculates the sum', () => {
    expect(new Triplet(3, 4, 5).sum()).toBe(12);
  });

  it('calculates the product', () => {
    expect(new Triplet(3, 4, 5).product()).toBe(60);
  });

  it('can recognize a pythagorean triplet', () => {
    expect(new Triplet(3, 4, 5).isPythagorean()).toBe(true);
  });

  it('can recognize a non pythagorean triplet', () => {
    expect(new Triplet(5, 6, 7).isPythagorean()).toBe(false);
  });

  it('can make triplets up to 10', () => {
    const triplets = Triplet.where({ maxFactor: 10 });
    const products = triplets.sort().map(triplet => {
      return triplet.product();
    });
    expect(products).toEqual([60, 480]);
  });

  it('can make triplets 11 through 20', () => {
    const triplets = Triplet.where({ minFactor: 11, maxFactor: 20 });
    const products = triplets.sort().map(triplet => {
      return triplet.product();
    });
    expect(products).toEqual([3840]);
  });

  it('can filter on sum', () => {
    const triplets = Triplet.where({ sum: 180, maxFactor: 100 });
    const products = triplets.sort().map(triplet => {
      return triplet.product();
    });
    expect(products).toEqual([118080, 168480, 202500]);
  });

  it('can filter on sum 1000', () => {
    const triplets = Triplet.where({ sum: 1000, maxFactor: 1000});
    expect(triplets.length).toEqual(1);
    expect(triplets[0].a).toEqual(200);
    expect(triplets[0].b).toEqual(375);
    expect(triplets[0].c).toEqual(425);
  });

});
