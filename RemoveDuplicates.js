let removeDuplicates = function (nums = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]) {
  let j = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      j = j + 1;
      nums[j] = nums[i];
    }
  }
  nums.length = j + 1;

  return nums;
};
