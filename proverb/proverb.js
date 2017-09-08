function proverbInternal(nouns, qualifier) {
  return nouns.map((noun1, i) => (
    i < nouns.length - 1 ?
      `For want of a ${noun1} the ${nouns[i + 1]} was lost.` :
      `And all for the want of a ${qualifier ? qualifier + ' ' : ''}${nouns[0]}.`
  )).join('\n');
}

export default function proverb(...nouns) {
  const lastElement = nouns[nouns.length - 1];
  if (lastElement.qualifier) {
    return proverbInternal(nouns.slice(0, -1), lastElement.qualifier);
  } else {
    return proverbInternal(nouns);
  }
}
