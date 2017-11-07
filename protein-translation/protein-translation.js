const STOP = 'STOP';

const CODONS_PROTEIN_PAIRS = [
  [['AUG'], 'Methionine'],
  [['UUU', 'UUC'], 'Phenylalanine'],
  [['UUA', 'UUG'], 'Leucine'],
  [['UCU', 'UCC', 'UCA', 'UCG'], 'Serine'],
  [['UAU', 'UAC'], 'Tyrosine'],
  [['UGU', 'UGC'], 'Cysteine'],
  [['UGG'], 'Tryptophan'],
  [['UAA', 'UAG', 'UGA'], STOP],
];

const PROTEIN_BY_CODON = CODONS_PROTEIN_PAIRS.reduce(
  (map, [codons, protein]) => {
    codons.forEach((c) => {
      // eslint-disable-next-line no-param-reassign
      map[c] = protein;
    });
    return map;
  }, {});

export default function translate(rnaSequencesString = '') {
  const rnaSequences = rnaSequencesString.match(/.../g) || [];
  const proteinSequences = rnaSequences.map(codon => PROTEIN_BY_CODON[codon]);

  if (proteinSequences.includes(undefined)) {
    throw new Error('Invalid codon');
  }

  const stopIndex = proteinSequences.indexOf(STOP);
  return stopIndex > -1 ? proteinSequences.slice(0, stopIndex) : proteinSequences;
}
