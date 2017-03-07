const toReversedDigits = n => [...n.toString()].reverse().map(s => parseInt(s));

const handleEverySecondDigit = digit => {
  const doubled = digit * 2;
  return (doubled < 10) ? doubled : (doubled - 9);
}

export default class Luhn {
  constructor(n) {
    const reversedDigits = toReversedDigits(n);
    this.checkDigit = reversedDigits[0];
    this.addends = reversedDigits.map(
      (d, i) => i % 2 === 1 ? handleEverySecondDigit(d) : d
    ).reverse();
    this.checksum = this.addends.reduce((sum, d) => sum + d, 0);
    this.valid = this.checksum % 10 === 0;
  }

  static create(n) {
    const luhn = new Luhn(n * 10);
    const validCheckDigit = luhn.valid ? 0 : (10 - luhn.checksum % 10);
    return n * 10 + validCheckDigit;
  }
}
