var maxProfit = function (prices) {
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  let maxValue = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] < min) {
      max = prices[i];
      min = prices[i - 1];
    } else {
      max = Math.max(max, prices[i]);
    }
    maxValue = Math.max(maxValue, max - min);
  }

  return maxValue <= 0 ? 0 : maxValue;
};

console.log(maxProfit([3, 2, 6, 5, 0, 3]));
