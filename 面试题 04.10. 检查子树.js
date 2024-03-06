/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {boolean}
 */
//  双层递归
// 时间复杂度分析：最差情况下,t1在小于t2子树高度以上节点都要比对M次，M是t2节点的大小，所以时间复杂度为O（N*M）
var checkSubTree = function (t1, t2) {
  if (t1 === null && t2 === null) return true;
  if (t1 === null || t2 === null) return false;
  // 如果当前节点开始的两棵子树已经是相等的，直接返回，否则递归地比较t1的两个子树是否和t2相同
  if (isSame(t1, t2)) {
    return true;
  } else {
    return checkSubTree(t1.left, t2) || checkSubTree(t1.right, t2)
  }
};
// 判断两个节点是否是相同的子树
function isSame(t1, t2) {
  if (t1 === null && t2 === null) {
    return true;
  }
  if (t1 === null || t2 === null) {
    return false;
  }
  if (t1.val === t2.val) {
    return isSame(t1.left, t2.left) && isSame(t1.right, t2.right)
  } else {
    return false;
  }
}