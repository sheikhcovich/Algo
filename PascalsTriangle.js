var generate = function (numRows) {
  let arr = [];
  for (let index = 1; index <= numRows; index++) {
    let row = new Array(index);
    row[0] = 1;
    row[row.length - 1] = 1;
    let i = 1;
    if (arr.length)
      while (i < arr[arr.length - 1].length) {
        let ele = arr[arr.length - 1][i] + arr[arr.length - 1][i - 1];
        row[i] = ele;
        i++;
      }

    arr.push(row);
  }
  return arr;
};
console.log(generate(5));
