/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// // 1.dp
// var change = function (amount, coins) {
//   const n = coins.length;

//   // dp table
//   const dp = Array.from({ length: n + 1 }, () => Array.from({ length: amount + 1 }, () => 0));
//   for (let i = 0; i <= n; i++) {
//     dp[i][0] = 1
//   }
//   for (let i = 1; i < n + 1; i++) {
//     for (let a = 1; a < amount + 1; a++) {
//       if (coins[i - 1] > a) {
//         dp[i][a] = dp[i - 1][a]
//       } else {
//         dp[i][a] = dp[i - 1][a] + dp[i][a - coins[i - 1]];
//       }
//     }
//   }
//   return dp[n][amount]
// };
// 2.dp 空间优化
var change = function (amount, coins) {
  const n = coins.length;
  // dp table
  const dp = Array.from({ length: amount + 1 }, () => 0);
  dp[0] = 1;
  for (let i = 1; i < n + 1; i++) {
    for (let a = 1; a < amount + 1; a++) {
      if (coins[i - 1] > a) {
        dp[a] = dp[a];
      } else {
        dp[a] = dp[a] + dp[a - coins[i - 1]];
      }
    }
  }
  return dp[amount]
};


// @lc code=end

