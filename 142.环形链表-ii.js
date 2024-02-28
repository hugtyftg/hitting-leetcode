/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head) return null;
  let slow = head, fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      // 说明存在环
      // 下面开始找环
      // 从起点和相遇点分别出发两个指针，相遇的时候一定是环的入口
      let index1 = head;
      let index2 = fast;
      while (index1 !== index2) {
        index1 = index1.next;
        index2 = index2.next;
      }
      return index1;
    }
  }
  return null
};
// @lc code=end

