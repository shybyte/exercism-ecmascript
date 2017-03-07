const DEFAULT_POS = {white: [0, 3], black: [7, 3]};

const sameField = (field1, field2) =>field1[0] == field2[0] && field1[1] == field2[1];


export default ({white, black} = DEFAULT_POS) => {
  if (sameField(white, black)) {
    throw 'Queens cannot share the same space';
  }

  const canAttackHorizontalOrVertical = () => white[0] === black[0] || white[1] === black[1];
  const canAttackDiagonal = () => Math.abs((white[0] - black[0]) / (white[1] - black[1])) === 1;

  return {
    white: white,
    black: black,

    canAttack: () => canAttackHorizontalOrVertical() || canAttackDiagonal(),

    toString: ()=> {
      let s = '';
      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          if (sameField(black, [x, y])) {
            s += 'B';
          } else if (sameField(white, [x, y])) {
            s += 'W';
          } else {
            s += '_';
          }
          if (y < 7) {
            s += ' ';
          }
        }
        s += '\n';
      }
      return s;
    }
  };
};