var isAnagram = function (s = "car", t = "rat") {
  if (s.length !== t.length) return false;
  let m = t;
  for (let i = 0; i < s.length; i++) {
    if (!m.includes(s[i])) return false;
    else m = m.replace(s[i], "*");
  }
  return true;
};

console.log(isAnagram());
