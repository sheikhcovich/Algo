var trap = function (height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) {
  let i = 1;
  let j = 0;
  let amongTraps = 0;
  let maxTrap = 0;

  while (i < height.length) {
    if (height[j] <= height[i]) {
      maxTrap = maxTrap + height[j] * (i - j - 1) - amongTraps;
      j = i;
      amongTraps = 0;
    } else if (height[j] > height[i]) {
      amongTraps = amongTraps + height[i];
    }
    i++;
  }
  i = i - 2;
  let k = i + 1;
  amongTraps = 0;
  while (i >= j) {
    if (height[k] <= height[i]) {
      maxTrap = maxTrap + height[k] * (k - i - 1) - amongTraps;
      k = i;
      amongTraps = 0;
    } else if (height[k] > height[i]) {
      amongTraps = amongTraps + height[i];
    }
    i--;
  }
  return maxTrap;
};
