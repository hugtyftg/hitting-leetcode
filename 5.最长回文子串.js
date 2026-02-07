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
// var longestPalindrome = function (s) {
//   /*   let dequeue = [];
//   for (let i = 0; i < s.length; i++) {
//     dequeue.push(s[i]);
//   }
//   let shifted, poped;
//   let leftRemain = [];
//   let rightRemain = [];
//   while (dequeue.length > 1) {
//     shifted = dequeue.shift();
//     poped = dequeue.pop();
//     if (shifted === poped) {
//       leftRemain.push(shifted);
//       rightRemain.push(poped);
//     } else {
//       // 清空
//       leftRemain = [];
//       rightRemain = [];
//     }
//   }
//   let palindrome;
//   // 最后分情况拼接字符串
//   if (dequeue.length === 1) {
//     // 奇数
//     palindrome = leftRemain.join('') + dequeue.shift() + rightRemain.join('');
//   } else {
//     palindrome = leftRemain.join('') + rightRemain.join('');
//   }
//   return palindrome; */
//   let n = s.length;
//   if (n < 2) {
//     return s;
//   }
//   let maxLength = 1;
//   let begin = 0;
//   // dp表，所有单字母字串都是palindrome
//   let dp = new Array(n).fill(new Array(n).fill(false));
//   for (let i = 0; i < n; i++) {
//     dp[i][i] = true;
//   }
//   // 递推
//   for (let L = 2; L <= n; L++) {
//     //
//   }
// };
/* 状态定义
  dp[i,j]：字符串s从索引i到j的子串是否是回文串
    true： s[i,j] 是回文串
    false：s[i,j] 不是回文串
转移方程
  dp[i][j] = dp[i+1][j-1] && s[i] == s[j]
    s[i] == s[j]：说明当前中心可以继续扩张，进而有可能扩大回文串的长度
    dp[i+1][j-1]：true
      说明s[i,j]的**子串s[i+1][j-1]**也是回文串
      说明，i是从最大值开始遍历的，j是从最小值开始遍历的
    特殊情况
      j - i < 2：意即子串是一个长度为0或1的回文串
总结
  dp[i][j] = s[i] == s[j] && ( dp[i+1][j-1] || j - i < 2) */
var longestPalindrome = function (s) {
  let n = s.length;
  let res = '';
  const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1]);
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1);
      }
    }
  }
  return res;
};
longestPalindrome('adgsfgasdf');
// @lc code=end
