var levelOrder = function (root) {
  if (root === null) return [];
  let queue = [];
  let levels = [];
  let level = [];
  queue.push(root);
  while (queue.length) {
    levels.push([]);
    while (queue.length) {
      let node = queue[0];
      if (node.left !== null) level.push(node.left);
      if (node.right !== null) level.push(node.right);
      let n = queue.shift();
      levels[levels.length - 1].push(n.val);
    }
    queue = level;
    level = [];
  }
  return levels;
};
