export default class Hamming {

  compute(strand1, strand2) {
    if (strand1.length !== strand2.length) {
      throw new Error('DNA strands must be of equal length.');
    }
    return strand1.split('').reduce(
      (sum, base1, i) => sum + (base1 !== strand2[i]),
      0
    )
  }

}