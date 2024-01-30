/*
 * @lc app=leetcode.cn id=2279 lang=javascript
 *
 * [2279] 装满石头的背包的最大数量
 */

// @lc code=start
/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function (capacity, rocks, additionalRocks) {
  const n = capacity.length;
  // 每个背包剩余可以装石头的数量
  const remainRocks = capacity.map((cap, i) => {
    const remainRock = cap - rocks[i];
    return remainRock;
  });
  console.log(remainRocks);
  // 初始化dp表
  // dp[i, a] 表示当前要做选择的背包编号i和当前剩余石头数量a，值代表当前装满石头的背包数量
  // 没有选择背包或者剩余石头数量为0的时候，最大满背包数量等于初始满背包数量
  const dp = Array.from({ length: n }, () =>
    Array.from({ length: additionalRocks + 1 }, () => 0)
  );


  // 状态转移 列
  for (let a = 0; a < additionalRocks; a++) {
    // dp[0][a] = 0
    if (a >= remainRocks[0]) {
      dp[0][a] = 1;
    } else {
      dp[0][a] = 0;
    }
  }
  // 状态转移 行
  for (let i = 0; i < n; i++) {
    // dp[i][0] = initFullNum
    let f = 0;
    for (let index = 0; index <= i; index++) {
      if (remainRocks[index] === 0) {
        f++;
      }
    }
    dp[i][0] = f;
  }
  console.log(dp);
  // 状态转移 其他
  // dp[i, a] = Max(dp[i-1, a], dp[i-1, a-remainRocks[i]]+1)
  for (let i = 1; i < n; i++) {
    for (let a = 1; a <= additionalRocks; a++) {
      if (remainRocks[i - 1] > a) {
        // 若当前背包所需石头数量超过剩余石头总数，不选该背包
        dp[i][a] = dp[i - 1][a]
      } else {
        // 不选该背包和选择该背包 这两种方案的最大值
        dp[i][a] = Math.max(dp[i - 1][a], dp[i - 1][a - remainRocks[i - 1]] + 1);
      }
    }
  }
  return dp[n - 1][additionalRocks];
};


// @lc code=end
