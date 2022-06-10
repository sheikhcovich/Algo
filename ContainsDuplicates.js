var containsDuplicate = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let value = map.get(nums[i]);
    if (value === undefined) map.set(nums[i], i);
    else return true;
  }
  return false;
};
