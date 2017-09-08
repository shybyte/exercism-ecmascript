export default class Flattener {
  // eslint-disable-next-line class-methods-use-this
  flatten(inputArray) {
    const result = [];

    function pushFlat(input) {
      if (Array.isArray(input)) {
        input.forEach(pushFlat);
      } else if (input !== undefined && input !== null) {
        result.push(input);
      }
    }

    pushFlat(inputArray);
    return result;
  }
}
