/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  return getDepth(root) >= 0
};

function getDepth (root) {
  if (!root) { return 0 }
  const leftDepth = getDepth(root.left)
  if (leftDepth < 0) { return -1 }
  const rightDepth = getDepth(root.right)
  if (rightDepth < 0) { return -1 }
  return Math.abs(leftDepth - rightDepth) <= 1 ? Math.max(leftDepth, rightDepth) + 1 : -1
}