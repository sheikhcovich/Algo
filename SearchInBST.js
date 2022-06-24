var searchBST = function (root, val) {
  var right = null;
  var left = null;

  if (root === null) return root;

  if (root.val === val) return root;
  else if (root.val < val) right = searchBST(root.right, val);
  else if (root.val > val) left = searchBST(root.left, val);

  return right || left;
};
