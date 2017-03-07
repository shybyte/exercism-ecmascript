const RULES = [
  ['M', 1000], ['CM', 900],
  ['D', 500], ['CD', 400],
  ['C', 100], ['XC', 90],
  ['L', 50], ['XL', 40],
  ['X', 10], ['IX', 9],
  ['V', 5], ['IV', 4],
  ['I', 1]
].map(([letters,value]) => ({letters, value}));


const toRoman = n => {
  const rule = RULES.find(rule => n >= rule.value);
  if (rule) {
    return rule.letters + toRoman(n - rule.value);
  } else {
    return '';
  }
};


export default toRoman;