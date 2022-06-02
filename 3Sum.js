// const threeSum = (nums = []) => {
//   // Sort the given array
//   nums.sort();

//   let result = [];
//   for (let num1Idx = 0; num1Idx + 2 < nums.length; num1Idx++) {
//     // Skip all duplicates from left
//     // num1Idx>0 ensures this check is made only from 2nd element onwards
//     if (num1Idx > 0 && nums[num1Idx] == nums[num1Idx - 1]) {
//       continue;
//     }

//     let num2Idx = num1Idx + 1;
//     let num3Idx = nums.length - 1;
//     while (num2Idx < num3Idx) {
//       let sum = nums[num2Idx] + nums[num3Idx] + nums[num1Idx];
//       if (sum == 0) {
//         // Add triplet to result
//         result.push([nums[num1Idx], nums[num2Idx], nums[num3Idx]]);

//         num3Idx--;

//         // Skip all duplicates from right
//         while (num2Idx < num3Idx && nums[num3Idx] == nums[num3Idx + 1])
//           num3Idx--;
//       } else if (sum > 0) {
//         // Decrement num3Idx to reduce sum value
//         num3Idx--;
//       } else {
//         // Increment num2Idx to increase sum value
//         num2Idx++;
//       }
//     }
//   }
//   return result;
// };

const threeSum = (nums = [-1, -1, 2]) => {
  if (nums.length < 3) return [];

  let map = new Map();
  let i = 0;
  while (i < nums.length) {
    map.set(nums[i], i);
    i++;
  }

  nums.sort();

  let start = 0,
    end = nums.length - 1;

  let triplets = [];

  do {
    let sum = nums[start] + nums[end];
    let val = map.get(sum);
    if (val !== undefined) {
      if (val !== start && val !== end)
        triplets.push([nums[start], nums[end], sum]);
    }

    if (sum >= 0) end--;
    if (sum <= 0) start++;
  } while (start < end);

  return triplets;
};
