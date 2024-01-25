/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 结果链表
  let result = new ListNode(0);
  let lrp = result;
  let resultIsEmpty = true;
  let nextBitPlus = false;
  // 两个链表等长时
  while (l1 && l2) {
    let curVal = l1.val + l2.val;
    // 上一次运算进位
    if (nextBitPlus) {
      curVal++;
      nextBitPlus = false;
    }
    // 这一次运算进位
    if (curVal >= 10) {
      curVal -= 10;
      nextBitPlus = true;
    }

    if (resultIsEmpty) {
      // 初始化
      result.val = curVal;
      resultIsEmpty = false;
    } else {
      // 添加链表节点
      let curNode = new ListNode(curVal);
      lrp.next = curNode;
      lrp = lrp.next;
    }
    l1 = l1.next;
    l2 = l2.next;
  }

  // 不等长链表的处理
  let remainLp = l1 ? l1 : l2;
  while (remainLp) {
    let curVal = remainLp.val;
    // 上一次运算进位
    if (nextBitPlus) {
      curVal++;
      nextBitPlus = false;
    }
    // 这一次运算进位
    if (curVal >= 10) {
      curVal -= 10;
      nextBitPlus = true;
    }
    let curNode = new ListNode(curVal);
    lrp.next = curNode;
    lrp = lrp.next;
    remainLp = remainLp.next;
  }

  // 链表遍历结束之后仍有一个进位
  if (nextBitPlus) {
    let newNode = new ListNode(1);
    lrp.next = newNode;
  }
  return result;
};
// @lc code=end
