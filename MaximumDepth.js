let recursive = (root) => {
  if (root === null) return;
  return Math.max(recursive(root.left), recursive(root.right)) + 1;
};

console.log(recursive(0));
