/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
// 添加上顶层的cost为0，本问题被转化为求到达最后一个cost时的最小值
var minCostClimbingStairs = function (cost) {
  cost = [...cost, 0];
  const n = cost.length - 1;
  if (n === 0 || n === 1) {
    return cost[n];
  }
  // 状态表
  const dp = Array.from({ length: cost.length }, () => -1);
  // 初始状态
  dp[0] = cost[0];
  dp[1] = cost[1];
  // 状态转移
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  return dp[n];
};
// @lc code=end
