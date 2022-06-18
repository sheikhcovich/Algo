var isValid = function (s = "}}}") {
  if (!s.includes("{") && !s.includes("[") && !s.includes("(")) return false;
  let map = new Map();
  map.set("(", ")");
  map.set("{", "}");
  map.set("[", "]");
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "[" || s[i] === "(") stack.push(s[i]);
    else {
      if (map.get(stack[stack.length - 1]) === s[i]) stack.pop();
      else stack.push(s[i]);
    }
  }
  if (stack.length && map.size) return false;
  else return true;
};

console.log(isValid());
