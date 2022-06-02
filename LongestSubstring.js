// bruteforce solution
var lengthOfLongestSubstring = function (s = "") {
  let max = 0;
  let substr = "";
  if (s.length === 1) {
    return 1;
  }
  for (let i = 0; i < s.length - 1; i++) {
    substr = s.charAt(i);
    console.log(substr);
    for (let j = i + 1; j < s.length; j++) {
      if (!substr.includes(s.charAt(j))) {
        substr = substr + s.charAt(j);
        max = Math.max(substr.length, max);
      } else break;
    }
  }
  max = Math.max(substr.length, max);
  return max;
};

//Dynamic Programming
var lengthOfLongestSubstring = function (s = "") {
  let max = 0;
  let i = 0;
  let substr = "";
  let j = 0;
  while (i < s.length) {
    let char = s.charAt(i);
    if (!substr.includes(char)) {
      substr = substr + char;
    } else {
      max = Math.max(max, substr.length);
      let lastIndex = s.substring(0, i).lastIndexOf(char);
      j = lastIndex + 1;

      if (j === i) substr = char;
      else substr = s.substring(j, i) + char;
    }
    max = Math.max(max, substr.length);
    i++;
  }
  console.log(substr);
  return max;
};
