var calculateTax = function (
  brackets = [
    [1, 0],
    [4, 25],
    [5, 50],
  ],
  income = 2
) {
  let earned = 0;
  let taxes = 0;
  for (let i = 0; i < brackets.length; i++) {
    console.log(taxes);
    if (brackets[i][0] <= income) {
      taxes = taxes + ((brackets[i][0] - earned) * brackets[i][1]) / 100;
      earned = brackets[i][0];
    } else {
      console.log(earned);
      taxes = taxes + ((income - earned) * brackets[i][1]) / 100;
      break;
    }
  }
  return taxes;
};
console.log(calculateTax());
