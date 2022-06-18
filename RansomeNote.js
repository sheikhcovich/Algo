var canConstruct = function (ransomNote = "aab", magazine = "ab") {
  let m = magazine;
  for (let i = 0; i < ransomNote.length; i++) {
    if (!m.includes(ransomNote[i])) return false;
    else m = m.replace(ransomNote[i], "*");
  }
  return true;
};

console.log(canConstruct());
