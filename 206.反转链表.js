/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return null;
  let p = head;
  let s = []
  s.push(p);
  while (p) {
    s.push(p);
    p = p.next;
  }
  let result = s.pop();
  let rp = result;
  while (s.length) {
    rp.next = s.pop()
    rp = rp.next;
  }
  // 原来的第一个元素会出现环
  rp.next = null;
  console.log(result);
  return result
};
// @lc code=end

