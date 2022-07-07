var searchMatrix = function (
  matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
    [70, 80, 90, 100],
    [110, 120, 130, 140],
  ],

  target = 23
) {
  let arr = findTheRow(matrix, target);
  let isTargeetThere = findTarget(arr, target);
  return isTargeetThere;
};
let findTheRow = (matrix, target) => {
  let low = 0;
  let high = matrix.length - 1;
  while (low < high) {
    let mid = Math.ceil((low + high) / 2);
    if (low + 1 === high)
      if (matrix[low][matrix[low].length - 1] < target) return matrix[high];
      else return matrix[low];

    let arr = matrix[mid];
    if (arr[arr.length - 1] < target) low = mid;
    else high = mid;
  }
};

let findTarget = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  if (low === high) return matrix[low];
  while (low <= high) {
    let mid = Math.ceil((low + high) / 2);
    if (arr[mid] === target) return true;
    if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return false;
};

console.log(searchMatrix());
