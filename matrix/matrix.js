const getColumns = (rows) => {
  const columns = [];
  rows[0].forEach((_, colIndex) => {
    columns.push(rows.reduce((col, row) => (col.push(row[colIndex]), col), []));
  });
  return columns;
};

export default matrixString => {
  const rows = matrixString
    .split('\n')
    .map(rowString => rowString.split(/\s+/).map(s => parseFloat(s)));
  return {
    rows,
    columns: getColumns(rows)
  };
}