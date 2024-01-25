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
  const s = new Set();
  for (let i = start; i < choices.length; i++) {
    const choice = choices[i];
    if (!selected[i] && !s.has(choice) && target - sum >= choice) {
      state.push(choice);
      sum += choice;
      selected[i] = true;
      s.add(choice);
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
