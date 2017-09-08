export function encode(input) {
  return input.replace(/(.)\1+/g, (chunk, char) => chunk.length + char);
}

export function decode(input) {
  return input.replace(/(\d+)(.)/g, (pair, count, char) => char.repeat(count));
}
