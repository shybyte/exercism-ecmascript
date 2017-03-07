export class ArgumentError extends Error {
  constructor() {
    super("Illegal Argument!");
  }
}

const OPERATORS = {
  'what is': (x, y) => y,
  'plus': (x, y) => x + y,
  'minus': (x, y) => x - y,
  'multiplied by': (x, y) => x * y,
  'divided by': (x, y) => x / y
};


export class WordProblem {
  constructor(question) {
    this.question = question;
  }

  answer() {
    const question = this.question.toLowerCase();
    if (!/(\d+)\?$/.test(question)) {
      throw new ArgumentError();
    }
    const regex = /([a-z\s]+?)\s+(-?\d+)/g;
    let result, matches;
    while ((matches = regex.exec(question)) !== null) {
      const operator = OPERATORS[matches[1].trim()];
      if (!operator) {
        throw new ArgumentError();
      }
      result = operator(result, parseFloat(matches[2]));
    }
    return result;
  }
}