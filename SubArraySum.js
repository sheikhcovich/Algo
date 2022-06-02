var subarraySum = function (nums = [2, 1, 4, 3, 9], k = 7) {
  let i = 1;
  let j = 0;
  let sum = nums[j] + nums[i];
  let count = 0;
  while (i < nums.length) {
    if (i >= nums.length) {
      console.log(sum);
      sum = sum - nums[j];
      console.log(sum);
      if (sum === k && i !== j) count++;
      j++;
      continue;
    } else if (sum === k) {
      count++;
      i++;
      sum = sum - nums[j] + nums[i];
      j++;
    } else if (sum < k) {
      if (nums[i] === k) count++;
      i++;
      sum = sum + nums[i];
    } else if (sum > k) {
      sum = sum - nums[j];
      j++;
    }
  }
  while (j < i) {
    sum = sum - nums[j];
    if (sum === k) count++;
    j++;
    console.log(sum);
  }

  if (nums.length === 1 && nums[0] === k) count++;
  return count;
};
