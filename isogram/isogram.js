export default class Isogram {
  constructor(text) {
    this.text = text;
  }

  isIsogram() {
    const letters = [...(this.text.replace(/[ -]/g, '').toLowerCase())];
    const letterSet = new Set();
    return !letters.some(char => {
      if (letterSet.has(char)) {
        return true;
      } else {
        letterSet.add(char);
        return false;
      }
    });
  }
}