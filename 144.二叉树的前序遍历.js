/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  // 迭代实现
  const res = [];
  const stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      res.push(root.val);
      root = root.left;
    }
    root = stack.pop();
    root = root.right;
  }
  return res;
};
// var preorderTraversal = function (root) {
//   const res = [];
//   const dfs = (root) => {
//     if (!root) return
//     res.push(root.val);
//     dfs(root.left);
//     dfs(root.right);
//   }
//   dfs(root)
//   return res
// }

// @lc code=end
