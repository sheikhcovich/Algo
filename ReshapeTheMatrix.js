var matrixReshape = function (
  mat = [
    [1, 2],
    [3, 4],
  ],
  r = 4,
  c = 1
) {
  const newMat = [];
  let row = new Array();
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      row.push(mat[i][j]);
      if (row.length === c) {
        newMat.push(row);
        row = new Array();
      }
    }
  }
  if (newMat.length !== r || newMat[newMat.length - 1].length !== c) return mat;
  else return newMat;
};
console.log(matrixReshape());
