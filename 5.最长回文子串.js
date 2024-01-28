/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  /*   let dequeue = [];
  for (let i = 0; i < s.length; i++) {
    dequeue.push(s[i]);
  }
  let shifted, poped;
  let leftRemain = [];
  let rightRemain = [];
  while (dequeue.length > 1) {
    shifted = dequeue.shift();
    poped = dequeue.pop();
    if (shifted === poped) {
      leftRemain.push(shifted);
      rightRemain.push(poped);
    } else {
      // 清空
      leftRemain = [];
      rightRemain = [];
    }
  }
  let palindrome;
  // 最后分情况拼接字符串
  if (dequeue.length === 1) {
    // 奇数
    palindrome = leftRemain.join('') + dequeue.shift() + rightRemain.join('');
  } else {
    palindrome = leftRemain.join('') + rightRemain.join('');
  }
  return palindrome; */
  let n = s.length;
  if (n < 2) {
    return s;
  }
  let maxLength = 1;
  let begin = 0;
  // dp表，所有单字母字串都是palindrome
  let dp = new Array(n).fill(new Array(n).fill(false));
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }
  // 递推
  for (let L = 2; L <= n; L++) {
    //
  }
};
longestPalindrome('adgsfgasdf');
// @lc code=end
