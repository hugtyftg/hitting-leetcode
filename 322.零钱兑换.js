/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function (coins, amount) {
//   const MAX = amount + 1;
//   const n = coins.length
//   // dp table
//   const dp = Array.from({ length: n + 1 }, () => Array.from({ length: amount + 1 }, () => 0));
//   // init dp state

//   // 如果没有硬币，无效解，置为MAX
//   for (let a = 0; a <= amount; a++) {
//     dp[0][a] = MAX
//   }
//   // 如果目标金额为0，最少硬币为0
//   for (let i = 0; i <= n; i++) {
//     dp[i][0] = 0;
//   }
//   // dp state transfrom
//   for (let i = 1; i <= n; i++) {
//     for (let a = 1; a <= amount; a++) {
//       if (coins[i - 1] > a) {
//         dp[i][a] = dp[i - 1][a];
//       } else {
//         dp[i][a] = Math.min(dp[i - 1][a], dp[i][a - coins[i - 1]] + 1);
//       }
//     }
//   }
//   return dp[n][amount] !== MAX ? dp[n][amount] : -1;
// };

// 优化空间复杂度
var coinChange = function (coins, amount) {
  const n = coins.length;
  const Max = amount + 1;
  const dp = Array.from({ length: amount + 1 }, () => Max)
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let a = 1; a <= amount; a++) {
      if (coins[i - 1] > a) {
        dp[a] = dp[a];
      } else {
        dp[a] = Math.min(dp[a], dp[a - coins[i - 1]] + 1);
      }
    }
  }
  return dp[amount] !== Max ? dp[amount] : -1
}
coinChange([1, 2, 5],
  11)
// @lc code=end

