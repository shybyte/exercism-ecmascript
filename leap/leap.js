export default function isLeap(year) {
  const isDivisibleBy = x => year % x === 0;
  return isDivisibleBy(400) || (isDivisibleBy(4) && !isDivisibleBy(100));
}




