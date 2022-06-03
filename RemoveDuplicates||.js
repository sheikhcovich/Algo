let removeDuplicates = function (nums = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]) {
  let j = 0;
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (j === 0 && nums[i] === nums[j]) count = count + 1;
    if (nums[i] !== nums[j] || count < 2) {
      j = j + 1;
      nums[j] = nums[i];
    }
    if (nums[i] === nums[i + 1]) {
      count = count + 1;
    } else {
      count = 0;
    }
  }
  nums.length = j + 1;

  return nums;
};
