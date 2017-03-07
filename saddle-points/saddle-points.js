const getColumns = (rows) => {
  const columns = [];
  rows[0].forEach((_, colIndex) => {
    columns.push(rows.reduce((col, row) => (col.push(row[colIndex]), col), []));
  });
  return columns;
};

const getSaddlePoints = (rows, cols) => {
  const result = [];
  const minOfCols = cols.map(col => Math.min(...col));
  rows.forEach((row, rowIndex) => {
    const maxOfRow = Math.max(...row);
    row.forEach((el, colIndex) => {
      if (el >= maxOfRow && el <= minOfCols[colIndex]) {
        result.push([rowIndex, colIndex]);
      }
    });
  });
  return result;
}

export default matrixString => {
  const rows = matrixString
    .split('\n')
    .map(rowString => rowString.trim().split(/\s+/).map(s => parseFloat(s)));
  const columns = getColumns(rows);
  return {
    rows,
    columns,
    saddlePoints: getSaddlePoints(rows, columns)
  };
}