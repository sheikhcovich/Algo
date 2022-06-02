//bruteforce
// var isPalindrome = function (s = "") {
//   let i = 0;
//   let j = s.length - 1;
//   while (i <= j) {
//     if (s[i] !== s[j]) return false;
//     i++;
//     j--;
//   }
//   return true;
// };

// var longestPalindrome = function (s = "") {
//   let map = new Map();
//   for (let i = 0; i < s.length; i++) {
//     let value = map.get(s[i]);
//     if (value === undefined) map.set(s[i], [i]);
//     else {
//       value.push(i);
//       map.set(s[i], value);
//     }
//   }
//   let longestPalindrome = "";
//   let keys = map.keys();
//   for (let key of keys) {
//     let val = map.get(key);
//     let i = val.length - 1;
//     let j = 0;
//     let subStr = "";
//     while (i >= j) {
//       while (j <= i) {
//         let subStr = s.substring(val[j], val[i] + 1);
//         let palindrome = isPalindrome(subStr);
//         if (palindrome) {
//           if (subStr.length > longestPalindrome.length) {
//             longestPalindrome = subStr;
//             break;
//           }
//         }
//         j++;
//       }
//       if (subStr === longestPalindrome) break;

//       i--;
//       j = 0;
//     }
//   }
//   return longestPalindrome;
// };

var isPalindrome = function (s = "") {
  let i = 0;
  let j = s.length - 1;
  while (i <= j) {
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }
  return true;
};
var longestPalindrome = function (s = "abarkfierfcddc") {
  let palindrome = "";
  let cache = "";
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = s.length - 1; j > i; j--) {
      cache = s.substring(i, j + 1);
      if (isPalindrome(cache)) {
        if (cache.length > palindrome.length) palindrome = cache;
        break;
      }
    }
  }
  if (!palindrome.length) palindrome = s[0];
  return palindrome;
};
