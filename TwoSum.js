const twoSum = (nums = [], target = 9) => {
  let map = new Map();
  for (let index = 0; index < nums.length; index++) map.set(nums[index], index);
  console.log(map);

  let set = new Set();
  for (let index = 0; index < nums.length; index++) {
    const ele = target - nums[index];
    const secondEle = map.get(ele);
    if (secondEle !== undefined && index !== secondEle) {
      set.add(index);
      set.add(secondEle);
    }
  }
  return [...set];
};
