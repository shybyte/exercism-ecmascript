const translateWord = word => {
  const [_, consonantHead, tail] = /^([^auoie]*qu|[^auoie]*)(.*)$/.exec(word);
  return tail + consonantHead + 'ay';
};

export default () => ({
  translate: text =>
    text.split(/\s+/).map(translateWord).join(' ')
});