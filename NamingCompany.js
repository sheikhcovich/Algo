var distinctNames = function (ideas = ["coffee", "donuts", "time", "toffee"]) {
  let map = new Map();
  for (let i = 0; i < ideas.length; i++) map.set(ideas[i]);

  let count = 0;

  for (let i = 0; i < ideas.length; i++) {
    for (let j = 0; j < ideas.length; j++) {
      if (j === i) continue;
      let firstName =
        ideas[j].charAt(0) + ideas[i].substring(1, ideas[i].length);
      let lastName =
        ideas[i].charAt(0) + ideas[j].substring(1, ideas[j].length);
      if (map.get(firstName) === undefined && map.get(lastName) === undefined)
        count = count + 1;
    }
  }
  return count;
};
console.log(distinctNames());
