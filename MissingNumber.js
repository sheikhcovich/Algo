var missingNumber = function (nums) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
    sum = sum + nums[i];
  }
  let maxSum = 0;
  for (let index = 1; index <= nums.length; index++) {
    maxSum = maxSum + index;
  }
  return nums.length < 2 && nums[0] === 1 ? 0 : maxSum - sum;
};
