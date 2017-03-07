function bottles(number) {
  switch (number) {
    case 0:
      return 'no more bottles';
    case 1:
      return '1 bottle';
    default:
      return number + ' bottles';
  }
}

function action(number) {
  switch (number) {
    case 0:
      return 'Go to the store and buy some more';
    case 1:
      return 'Take it down and pass it around';
    default:
      return 'Take one down and pass it around';
  }
}

function capitalize(s) {
  return s.slice(0, 1).toUpperCase() + s.slice(1);
}

function verse(beerNumber) {
  const situation = capitalize(`${bottles(beerNumber)} of beer on the wall, ${bottles(beerNumber)} of beer.\n`);
  const nextNumber = beerNumber === 0 ? 99 : beerNumber - 1;
  return situation + action(beerNumber) + `, ${bottles(nextNumber)} of beer on the wall.\n`;
}

function sing(beerMax = 99, beerMin = 0) {
  return Array.from({length: beerMax - beerMin + 1}, (_, i) => verse(beerMax - i)).join('\n')
}

export default {verse, sing}


