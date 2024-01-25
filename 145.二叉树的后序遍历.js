/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
  const res = [];
  const stack = [];
  let prev = null;
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (!root.right || root.right == prev) {
      // leaf
      res.push(root.val);
      prev = root;
      root = null;
    } else {
      // not leaf
      stack.push(root);
      root = root.right;
    }
  }
  return res;
};
// @lc code=end
/* 
  // 迭代实现
  const res = [];
  const stack = [];
  let prev = null;
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (!root.right || root.right === prev) {
      // 触发后序条件，前者是针对没有后代的Leaf，后者是针对最后回去时候的主干节点
      res.push(root.val);
      prev = root;
      root = null;
    } else {
      stack.push(root);
      root = root.right;
    }
  }

*/
