/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// https://leetcode.cn/problems/reverse-linked-list-ii/solutions/634701/fan-zhuan-lian-biao-ii-by-leetcode-solut-teyq/
// 头插法
var reverseBetween = function (head, left, right) {
  // 设置dummy防止链表从head就开始反转
  const dummy = new ListNode(-1);
  dummy.next = head;
  // prev不变
  let prev = dummy;
  for (let i = 0; i < left - 1; i++) {
    prev = prev.next;
  }
  let cur = prev.next;
  for (let i = 0; i < right - left; i++) {
    // next跟着cur更新
    const next = cur.next;
    cur.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }
  return dummy.next;
};

// @lc code=end

