/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// selected数组确保同一个元素不会被选择多次
// duplication集合确保某一步不会重复选择数值相等的元素
// 数组预排序+每一步选择（每一次下钻到下一个backtrack）从上一步的i开始，
// 可以保证不会出现重复组合（所用元素相同，仅仅是元素在第几步被选择不同）如[1,1,6]和[1,6,1]
var combinationSum2 = function (candidates, target) {
  const state = [];
  const res = [];
  candidates.sort((a, b) => a - b);
  const selected = new Array(candidates.length).fill(false);
  let sum = 0;
  let start = 0;
  backTrack(state, candidates, res, target, selected, sum, start);
  return res;
};
function backTrack(state, choices, res, target, selected, sum, start) {
  if (sum === target) {
    res.push([...state]);
    return;
  }
  const duplication = new Set();
  for (let i = start; i < choices.length; i++) {
    const choice = choices[i];
    if (!selected[i] && !duplication.has(choice) && target - sum >= choice) {
      state.push(choice);
      sum += choice;
      selected[i] = true;
      duplication.add(choice);
      backTrack(state, choices, res, target, selected, sum, i);
      state.pop();
      sum -= choice;
      selected[i] = false;
      // 注意：回退的时候不能撤销set
    }
  }
}
const res = combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
console.log(res);
// @lc code=end
