/* eslint-disable no-else-return */

function sum(array) {
  return array.reduce((s, value) => s + value, 0);
}

export default class ISBN {
  constructor(isbnString) {
    this.isbnString = isbnString;
  }

  isValid() {
    const digits = [...this.isbnString.replace(/-/g, '')].map((d) => {
      if (d === 'X') {
        return 10;
      } else if (d.match(/\d/)) {
        return parseInt(d, 10);
      } else {
        return NaN;
      }
    });
    return sum(digits.map((d, i) => d * (10 - i))) % 11 === 0;
  }
}

