export default () => {
  const rosterDB = {};

  const grade = (gradeNumber) => rosterDB[gradeNumber] || [];

  const add = (name, gradeNumber) => {
    rosterDB[gradeNumber] = Object.freeze(grade(gradeNumber).concat(name).sort());
  };

  // Clone it to prevent modification from evil outside.
  const roster = () =>
    Object.assign({}, rosterDB);

  return {add, grade, roster};
}