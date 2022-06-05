// the idea of this Algorithm is calculate the area,and if one of two elements smaller than the another one move it
// if they are equal move both, and keep calculating max area each move

var maxArea = function (heights = [1, 8, 6, 2, 5, 4, 8, 3, 7]) {
  let i = 0;
  let j = heights.length - 1;
  let maxArea = 0;
  while (i < j) {
    let minHeight = Math.min(heights[i], heights[j]);
    let area = (j - i) * minHeight;
    maxArea = Math.max(maxArea, area);
    if (heights[i] < heights[j]) i++;
    else if (heights[i] > heights[j]) j--;
    else if (heights[i] === heights[j]) {
      i++;
      j--;
    }
  }
  return maxArea;
};
