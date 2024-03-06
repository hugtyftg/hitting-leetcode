/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = []
  if (!root) {
    return res
  }
  // 维护一个状态代表层数
  let queue = [[root, 1]];
  while (queue.length) {
    const curNode = queue.shift()
    if (res.length < curNode[1]) {
      res.push([]);
    }
    res[curNode[1] - 1].push(curNode[0].val);

    if (curNode[0].left) queue.push([curNode[0].left, curNode[1] + 1]);
    if (curNode[0].right) queue.push([curNode[0].right, curNode[1] + 1]);
  }
  return res
};
// @lc code=end

