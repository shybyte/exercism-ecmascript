/* eslint-disable no-param-reassign,no-plusplus,no-mixed-operators */

export default class WordSearch {
  constructor(letterSquare) {
    this.letterSquare = letterSquare;
  }

  find(words) {
    return words.reduce((result, word) => {
      result[word] = this.findWord(word);
      return result;
    }, {});
  }

  findWord(word) {
    const reversedWord = word.split('').reverse().join('');

    for (let rowIndex = 0; rowIndex < this.letterSquare.length; rowIndex++) {
      const row = this.letterSquare[rowIndex];

      // search left to right
      {
        const i = row.indexOf(word);
        if (i >= 0) {
          return {
            start: [rowIndex + 1, i + 1],
            end: [rowIndex + 1, i + word.length],
          };
        }
      }

      // search right to left
      {
        const i = row.indexOf(reversedWord);
        if (i >= 0) {
          return {
            start: [rowIndex + 1, i + word.length],
            end: [rowIndex + 1, i + 1],
          };
        }
      }

      // search vertically
      for (let colIndex = 0; colIndex < row.length; colIndex++) {
        if (rowIndex + word.length <= this.letterSquare.length) {
          let topBottomWord = '';

          for (let i = 0; i < word.length; i++) {
            topBottomWord += this.letterSquare[rowIndex + i][colIndex];
          }
          if (topBottomWord === word) {
            return {
              start: [rowIndex + 1, colIndex + 1],
              end: [rowIndex + word.length, colIndex + 1],
            };
          } else if (topBottomWord === reversedWord) {
            return {
              start: [rowIndex + word.length, colIndex + 1],
              end: [rowIndex + 1, colIndex + 1],
            };
          }
        }
      }
    }

    // search diagonal
    const width = this.letterSquare[0].length;
    for (let rowIndex = 0; rowIndex < this.letterSquare.length; rowIndex++) {
      for (let colIndex = 0; colIndex < width; colIndex++) {
        if (rowIndex + word.length <= this.letterSquare.length) {
          let topLeftToBottomRightWord = '';

          for (let i = 0; i < word.length; i++) {
            topLeftToBottomRightWord += this.letterSquare[rowIndex + i][colIndex + i];
          }

          if (topLeftToBottomRightWord === word) {
            return {
              start: [rowIndex + 1, colIndex + 1],
              end: [rowIndex + word.length, colIndex + word.length],
            };
          } else if (topLeftToBottomRightWord === reversedWord) {
            return {
              start: [rowIndex + word.length, colIndex + word.length],
              end: [rowIndex + 1, colIndex + 1],
            };
          }
        }

        let bottomLeftToTopRightWord = '';

        for (let i = 0; i < word.length; i++) {
          bottomLeftToTopRightWord += (this.letterSquare[rowIndex - i] || '')[colIndex + i];
        }

        if (bottomLeftToTopRightWord === word) {
          return {
            start: [rowIndex + 1, colIndex + 1],
            end: [rowIndex + 2 - word.length, colIndex + word.length],
          };
        } else if (bottomLeftToTopRightWord === reversedWord) {
          return {
            start: [rowIndex + 2 - word.length, colIndex + word.length],
            end: [rowIndex + 1, colIndex + 1],
          };
        }
      }
    }

    return undefined;
  }
}
