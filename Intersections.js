var intersect = function (nums1, nums2) {
  let arr = [];
  let map = new Map();
  for (let i = 0; i < nums1.length; i++) {
    let value = map.get(nums1[i]);
    if (value === undefined) {
      map.set(nums1[i], 1);
    } else {
      value = value + 1;
      map.set(nums1[i], value);
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    let value = map.get(nums2[i]);
    if (value > 1 && value !== undefined) {
      value = value - 1;
      map.set(nums2[i], value);
    } else if (value === 1) {
      map.delete(nums2[i]);
    }
    if (value !== undefined) arr.push(nums2[i]);
  }
  return arr;
};

let set = new Set();
