let merge = function (
  nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3
) {
  let i = 0;
  let j = 0;
  let counter = 0;
  let sortedArr = [];
  sortedArr.length = m + n;

  console.log(nums1);

  while (counter < sortedArr.length) {
    if (nums1[i] > nums2[j] || i >= m) {
      sortedArr[counter] = nums2[j];
      j++;
    } else if (nums1[i] <= nums2[j] || j >= n) {
      sortedArr[counter] = nums1[i];
      i++;
    }

    counter++;
  }
  for (let index = 0; index < sortedArr.length; index++) {
    nums1[index] = sortedArr[index];
  }
  return nums1;
};
console.log(merge());
