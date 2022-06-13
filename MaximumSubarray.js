var maxSubArray = function (nums) {
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    max = Math.max(max, sum);
    if (sum <= 0) sum = 0;
  }
  return max;
};
