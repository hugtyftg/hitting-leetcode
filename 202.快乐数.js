/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// 方法一：hash表记录，如果是无限循环，肯定会出现重复的sum
var isHappy = function (n) {
  const set = new Set();
  let number = n;
  let sum = hSum(number);
  while (sum !== 1) {
    if (set.has(sum)) {
      return false;
    } else {
      set.add(sum);
      sum = hSum(sum);
    }
  }
  return true;
};
const hSum = (n) => {
  let sum = 0;
  const strN = String(n);
  for (const i of strN) {
    const ni = Number(i);
    sum += ni * ni;
  }
  return sum;
};
// @lc code=end
