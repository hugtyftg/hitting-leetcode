/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 1.backtrack O(2^n)
/* var climbStairs = function (n) {
  const choices = [1, 2]; // 可选择向上爬 1 阶或 2 阶
  const state = 0; // 从第 0 阶开始爬
  const res = new Map();
  res.set(0, 0); // 使用 res[0] 记录方案数量
  // backtrack(choices, state, n, res);
  Backtrack(state, choices, res, n);
  return res.get(0);
};
function backtrack(choices, state, n, res) {
  // 当爬到第 n 阶时，方案数量加 1
  if (state === n) res.set(0, res.get(0) + 1);
  // 遍历所有选择
  for (const choice of choices) {
    // 剪枝：不允许越过第 n 阶
    if (state + choice > n) continue;
    // 尝试：做出选择，更新状态
    backtrack(choices, state + choice, n, res);
    // 回退
  }
}
function Backtrack(state, choices, res, n) {
  if (isSolution(state, n)) {
    recordSolution(res);
  }
  for (const choice of choices) {
    if (isValid(state, choice, n)) {
      state = makeChoice(state, choice);
      Backtrack(state, choices, res, n);
      state = undoChoice(state, choice);
    }
  }
}
// state是否是有效的解
function isSolution(state, n) {
  return state === n;
}
// 记录
function recordSolution(res) {
  res.set(0, res.get(0) + 1);
}
// 剪枝
function isValid(state, choice, n) {
  return state + choice <= n;
}
// 尝试
function makeChoice(state, choice) {
  return state + choice;
}
// 回退
function undoChoice(state, choice) {
  return state - choice;
} */

// 2.记忆搜索 O(n) O(n)
// var climbStairs = function (n) {
//   // 存储到达第n个台阶的方案数
//   const memo = new Array(n + 1).fill(-1);
//   return dfs(n, memo);
// };
// // 第n个台阶有多少种方案？
// function dfs(n, memo) {
//   if (n === 1 || n === 2) {
//     return n;
//   }
//   if (memo[n] !== -1) {
//     // 如果在缓存中查到，直接输出
//     return memo[n];
//   } else {
//     // 如果没有查到，继续dfs并且存入memo
//     const count = dfs(n - 1, memo) + dfs(n - 2, memo);
//     memo[n] = count;
//     return count;
//   }
// }

// 3.dp O(n) O(1)
var climbStairs = function (n) {
  if (n === 1 || n === 2) {
    return n;
  }
  // 初始状态
  let a = 1;
  let b = 2;
  for (let i = 3; i <= n; i++) {
    let tmp = b;
    b = a + b;
    a = tmp;
  }
  return b;
};
// @lc code=end
