var firstMissingPositive = function (nums = [3, 4, 2, 5, 1]) {
  let min = Number.MAX_SAFE_INTEGER;
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
    if (nums[i] > 0) min = Math.min(nums[i], min);
  }
  if (min !== 1) return 1;
  else {
    let j = 0;
    for (j; j < map.size; j++) {
      min = min + 1;
      let value = map.get(min);
      if (value === undefined) return min;
    }
    if (j === map.size) min = min + 1;
  }
  return min;
};
