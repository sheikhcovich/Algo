var runningSum = function (nums = [1, 2, 3, 4]) {
  let sum = 0;
  for (let index = 0; index < nums.length; index++) {
    sum = nums[index] + sum;
    nums[index] = sum;
  }
  return nums;
};
