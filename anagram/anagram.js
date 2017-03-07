const sortedLetters = word =>[...word].sort().join('');

export default class Anagram {
  constructor(word) {
    this.wordLowerCase = word.toLowerCase();
    this.sortedwordLetters = sortedLetters(this.wordLowerCase);
  }

  matches(...wordsArg) {
    const words = (typeof wordsArg[0] === 'string') ? wordsArg : wordsArg[0];
    return words.filter(w => {
        const wLowerCase = w.toLowerCase();
        return this.wordLowerCase != wLowerCase &&
          this.sortedwordLetters === sortedLetters(wLowerCase);
      }
    );
  }

}