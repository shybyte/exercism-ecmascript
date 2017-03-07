export default (size) => {
  const rows = [[1]];
  for (let l = 2; l <= size; l++) {
    const lastRow = rows[rows.length - 1];
    rows.push(Array.from({length: l},
      (_, i) => (lastRow[i - 1] || 0) + (lastRow[i] || 0)
    ));
  }
  return {
    rows,
    lastRow: rows[rows.length - 1]
  };
};
