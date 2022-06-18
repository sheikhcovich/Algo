var firstUniqChar = function (s = "aabb") {
  for (let i = 0; i < s.length; i++) {
    if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) return i;
  }
  return -1;
};
console.log(firstUniqChar());
