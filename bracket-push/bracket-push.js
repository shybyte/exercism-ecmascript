const OPENING = "{[(";
const CLOSING = "}])";

export default ([...brackets]) => {
  const stack = [];
  for (let bracket of brackets) {
    const bracketIndex = OPENING.indexOf(bracket);
    if (bracketIndex >= 0) {
      stack.push(CLOSING[bracketIndex]);
    } else if (stack.pop() !== bracket) {
      return false;
    }
  }
  return stack.length === 0;
}

//
//
//
// export default ([...brackets])=> {
//   const stack = [];
//   for (let bracket of brackets) {
//     if (OPENING.includes(bracket)) {
//       stack.push(OPENING.indexOf(bracket));
//     } else if (stack.pop() !== CLOSING.indexOf(bracket)) {
//       return false;
//     }
//   }
//   return stack.length === 0;
// }