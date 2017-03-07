const toSegments = (text, size) => text ?
  text.match(new RegExp(`.{1,${size}}`, 'g'))
  : [];

const encrypt = (textSegments, length) =>
  Array.from({length}, (_, i) =>
    textSegments.map(segment => segment[i]).join('')
  ).join('');

export default (text) => {
  // Works only for latin/english letters, but who cares.
  const normalizedText = text.toLowerCase().replace(/[^\da-z]/g, '');
  const size = Math.ceil(Math.sqrt(normalizedText.length));
  const plaintextSegments = toSegments(normalizedText, size);
  const ciphertext = encrypt(plaintextSegments, size);
  return {
    normalizePlaintext: () => normalizedText,
    size: () => size,
    plaintextSegments: () => plaintextSegments,
    ciphertext: () => ciphertext
  };
}