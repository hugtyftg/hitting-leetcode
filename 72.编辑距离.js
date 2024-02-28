/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const n1 = word1.length;
  const n2 = word2.length;
  // 状态：将word1的前i个字符改为word2的前j个字符所需要的最小步数
  const dp = Array.from({ length: n1 + 1 }, () => Array.from({ length: n2 + 1 }, () => 0));
  for (let i = 0; i < n1 + 1; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j < n2 + 1; j++) {
    dp[0][j] = j;
  }
  dp[0][0] = 0;
  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1
      }
    }
  }
  return dp[n1][n2]
};

// @lc code=end