var hasPathSum = function (root, targetSum) {
  if (root === null) return false;

  let sum = 0;
  return helper(root, targetSum, sum);
};

var helper = function (root, targetSum, sum) {
  if (root == null) return false;

  sum += root.val;
  if (targetSum === sum && root.left === null && root.right === null)
    return true;
  let left = helper(root.left, targetSum, sum);
  let right = helper(root.right, targetSum, sum);
  return right || left;
};
