const charCodeOf = char => char.charCodeAt(0);
const toChar = charCode => String.fromCharCode(charCode);

const aCODE = charCodeOf('a');
const ALPHABET_LENGTH = charCodeOf('z') + 1 - aCODE;

const randomKey = () =>
  Array.from({length: 100},
    () => toChar(Math.random() * (ALPHABET_LENGTH) + aCODE)
  ).join('')

const wrapInAlphabetRange =
  charCode => (charCode - aCODE + 10 * ALPHABET_LENGTH) % ALPHABET_LENGTH + aCODE;

const applyShiftArray = (shiftArray, [...chars]) =>
  chars
    .map(charCodeOf)
    .map((charCode, i) =>
      wrapInAlphabetRange(charCode + shiftArray[i % shiftArray.length])
    )
    .map(toChar)
    .join('');

const reverseShiftArray = shiftArray => shiftArray.map(shift => ALPHABET_LENGTH - shift)

export default class Cipher {
  constructor(key) {
    if (!/[a-z]$/.test(key)) {
      throw new Error('Bad key');
    }
    this.key = key || randomKey();
    this.shiftArray = [...this.key].map(c => charCodeOf(c) - aCODE);
  }

  encode(s) {
    return applyShiftArray(this.shiftArray, s);
  }

  decode(s) {
    return applyShiftArray(reverseShiftArray(this.shiftArray), s);
  }
}