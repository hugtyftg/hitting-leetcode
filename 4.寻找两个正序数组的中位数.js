/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // 最暴力的解法
  let result = [...nums1, ...nums2];
  result.sort((a, b) => a - b);
  let index = -1;
  if (result.length % 2 === 0) {
    index = result.length / 2;
    return (result[index] + result[index - 1]) / 2;
  } else {
    index = Math.floor(result.length / 2);
    return result[index];
  }
};
// @lc code=end
