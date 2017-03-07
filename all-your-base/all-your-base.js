function isInputValid(input, fromBase) {
  return input.length > 0 && !(input.length > 1 && input[0] == 0) &&
    input.every(d => 0 <= d && d < fromBase);
}

function isBaseValid(base) {
  return typeof base == 'number'
    && base > 1 && Math.floor(base) == base;
}

export default class Converter {
  convert(input, fromBase, toBase) {
    if (!isBaseValid(fromBase)) {
      throw new Error("Wrong input base");
    }
    if (!isBaseValid(toBase)) {
      throw new Error("Wrong output base");
    }
    if (!isInputValid(input, fromBase)) {
      throw new Error("Input has wrong format");
    }

    let number = input.reduce((acc, x) => acc * fromBase + x, 0);
    const result = [];

    do {
      result.push(number % toBase);
      number = Math.floor(number / toBase);
    } while (number > 0)

    result.reverse();
    return result;
  }
}