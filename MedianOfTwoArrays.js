var findMedianSortedArrays = function (nums1 = [], nums2 = []) {
  let arr1 = nums1;
  let arr2 = nums2;
  if (arr2.length < arr1.length) {
    let arr = arr1;
    arr1 = arr2;
    arr2 = arr;
  }
  let low = 0;
  let high = arr1.length - 1;
  let arrLength = arr1.length + arr2.length;
  let mid = arrLength / 2;
};

console.log(findMedianSortedArrays([1, 2, 3, 4], [5, 6, 7]));
