/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  let smallSet, biggerSet;
  if (set1.size > set2.size) {
    smallSet = set2;
    biggerSet = set1;
  } else {
    smallSet = set1;
    biggerSet = set2;
  }
  const intersection = [];
  for (const key of smallSet.keys()) {
    if (biggerSet.has(key)) {
      intersection.push(key);
    }
  }
  return intersection;
};
// @lc code=end
