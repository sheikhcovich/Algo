var searchRange = function (nums = [], target) {
  let result = [-1, -1];
  result[0] = firstOrLastOccurance(nums, target, true);
  result[1] = firstOrLastOccurance(nums, target, false);
  return result;
};

var firstOrLastOccurance = function (nums, target, searchFirst) {
  let low = 0;
  let high = nums.length - 1;
  let result = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      result = mid;
      if (searchFirst) high = mid - 1;
      else low = mid + 1;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return result;
};

console.log(searchRange([1, 1, 3, 3, 5, 5, 5, 5, 9, 9, 11], 9));
