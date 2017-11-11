/* eslint-disable no-mixed-operators */

const ALPHABET_LENGTH = 26;

function rotateChar(char, min, key) {
  return String.fromCharCode((char.charCodeAt(0) - min + key) % ALPHABET_LENGTH + min);
}

export default class RotationalCipher {
  static rotate(text, key) {
    return text
      .replace(/[a-z]/g, c => rotateChar(c, 'a'.charCodeAt(0), key))
      .replace(/[A-Z]/g, c => rotateChar(c, 'A'.charCodeAt(0), key));
  }
}

