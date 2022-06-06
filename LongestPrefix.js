var longestCommonPrefix = function (strs = ["flower,flow", "fligth"]) {
  let startWith = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let j = strs[i].length;
    while (j >= -1) {
      if (startWith.startsWith(strs[i].substring(0, j))) {
        startWith = strs[i].substring(0, j);
        break;
      }
      j--;
    }
    if (j === -1) return "";
  }
  if (strs.length === 1) return strs[0];
  return startWith;
};
