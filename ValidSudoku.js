var isValidSudoku = function (board) {
  let map = new Map();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== ".") {
        let value = map.get(board[i][j]);
        if (value === undefined) {
          map.set(board[i][j], [[i, j]]);
        } else {
          let nthRow = Math.ceil((i + 1) / 3);
          let nthCol = Math.ceil((j + 1) / 3);
          for (let k = 0; k < value.length; k++) {
            let nthRowValue = Math.ceil((value[k][0] + 1) / 3);
            let nthColValue = Math.ceil((value[k][1] + 1) / 3);
            if (
              value[k][0] === i ||
              value[k][1] === j ||
              (nthRow === nthRowValue && nthCol === nthColValue)
            )
              return false;
          }
          value.push([i, j]);
        }
      }
    }
  }
  return true;
};
