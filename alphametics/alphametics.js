/* eslint-disable no-plusplus,no-continue,no-param-reassign */

// ordered in order of addition evaluation
function getUniqueChars(reversedWords, maxLength) {
  const uniqueChars = new Set();
  for (let i = 0; i < maxLength; i++) {
    reversedWords.forEach((word) => {
      const char = word[i];
      if (char) {
        uniqueChars.add(char);
      }
    });
  }
  return Array.from(uniqueChars);
}

function toNumber(word, mapping) {
  // This boring old for-loop is faster than a reduce.
  let sum = 0;
  for (let i = word.length - 1; i >= 0; i--) {
    sum = (10 * sum) + mapping.get(word[i]);
  }
  return sum;
}

function toObject(map) {
  if (!map) {
    return map;
  }
  return Array.from(map).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}

export default function solve(puzzleString) {
  const words = puzzleString.match((/[A-Z]+/g));
  const reversedWords = words.map(w => [...w].reverse());
  const maxLength = Math.max(...reversedWords.map(w => w.length));
  // ordered in order of addition evaluation
  const uniqueChars = getUniqueChars(reversedWords, maxLength);
  const leadingChars = new Set(words.map(w => w[0]));
  const summands = reversedWords.slice(0, -1);
  const sum = reversedWords[reversedWords.length - 1];

  function isSumValid(mapping) {
    const currentSum = summands.reduce((acc, summand) => acc + toNumber(summand, mapping), 0);
    const expectedSum = toNumber(sum, mapping);
    return currentSum === expectedSum;
  }

  /**
   * Used to prune the search tree.
   * @returns {boolean} true means we are really sure, that it's invalid
   *                    false does not grantee that it's valid
   */
  function isPartialSumInvalid(mapping) {
    let colSum = 0;
    for (let col = 0; col < maxLength; col++) {
      for (let i = 0; i < summands.length; i++) {
        const char = summands[i][col];
        if (char) {
          const digit = mapping.get(char);
          if (digit) {
            colSum += digit;
          } else {
            return false;
          }
        }
      }

      const rem = colSum % 10;

      const sumChar = sum[col];
      if (sumChar) {
        const digit = mapping.get(sumChar);
        if (digit) {
          if (digit !== rem) {
            return true;
          }
        } else {
          return false;
        }
      } else {
        return true;
      }

      colSum = Math.floor(colSum / 10);
    }
    return false;
  }

  function solveInternal(usedNumbers = new Set(), mapping = new Map()) {
    if (mapping.size < uniqueChars.length) {
      const c = uniqueChars[mapping.size];
      const begin = leadingChars.has(c) ? 1 : 0;
      for (let x = begin; x < 10; x++) {
        if (usedNumbers.has(x)) {
          continue;
        }
        mapping.set(c, x);
        usedNumbers.add(x);

        // Prune the search tree
        if (!isPartialSumInvalid(mapping)) {
          const solution = solveInternal(usedNumbers, mapping);
          if (solution) {
            return solution;
          }
        }

        usedNumbers.delete(x);
        mapping.delete(c);
      }
    } else if (isSumValid(mapping)) {
      return mapping;
    }
    return null;
  }

  return toObject(solveInternal());
}
