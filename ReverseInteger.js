var reverse = function (x = 123) {
  let s = "" + x;
  let number = Number.parseInt(s.split("").reverse().join(""));
  if (-1 * 2 ** 31 <= number && number <= 2 ** 31 - 1) return 0;

  return x >= 0 ? number : -1 * number;
};
