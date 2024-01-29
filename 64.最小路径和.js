/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
// 1.backtrack —— overflow
// var minPathSum = function (grid) {
//   let res = new Map();
//   res.set('pathSum', 0);
//   let state = {
//     path: [[0, 0]],
//     sum: grid[(0, 0)],
//   };
//   const m = grid.length; // 行
//   const n = grid[0].length; // 列
//   const choices = ['down', 'right'];
//   backTrack(state, choices, res, grid, m, n);
//   return res.get('pathSum');
// };
// function backTrack(state, choices, res, grid, m, n) {
//   if (state.path.length === m + n - 2 && state.sum < res.get('pathSum')) {
//     res.set('pathSum', state);
//     return;
//   }
//   for (const choice of choices) {
//     // make choice
//     const prevPath = state.path[state.path.length - 1];
//     console.log(choice);
//     const curPath =
//       choice === 'down'
//         ? [prevPath[0] + 1, prevPath[1]]
//         : [prevPath[0], prevPath[1] + 1];
//     state.path.push(curPath);
//     state.sum += grid[(curPath[0], curPath[1])];
//     // back track
//     backTrack(state, choices, res, grid, m, n);
//     // undo choice
//     state.path.pop();
//     state.sum -= grid[(curPath[0], curPath[1])];
//   }
// }

// 2.memorized searching
// var minPathSum = function (grid) {
//   const n = grid.length;
//   const m = grid[0].length;
//   const memo = Array.from({ length: n }, () => Array.from({ length: m }, () => -1));
//   return dfs(grid, memo, n - 1, m - 1)
// }
// function dfs(grid, memo, i, j) {
//   if (i === 0 && j === 0) {
//     return grid[0][0]
//   }
//   // 若行列索引越界，则返回 +∞ 代价
//   if (i < 0 || j < 0) {
//     return Infinity;
//   }
//   if (memo[i][j] !== -1) {
//     return memo[i][j]
//   } else {
//     memo[i][j] = Math.min(dfs(grid, memo, i - 1, j), dfs(grid, memo, i, j - 1)) + grid[i][j];
//     return memo[i][j]
//   }
// }

// 3.dp
var minPathSum = function (grid) {
  const n = grid.length; // 行数
  const m = grid[0].length; // 列数
  // dp表，注意，多维数组初始化的时候不能用Array.prototype.fill
  const dp = Array.from({ length: n }, () => Array.from({ length: m }, () => 0))
  // 初始状态
  dp[0][0] = grid[0][0]
  // 状态转移：行
  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  // 状态转移：列
  for (let j = 1; j < m; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  // 状态转移
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[n - 1][m - 1]
};
// @lc code=end