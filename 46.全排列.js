/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 通过selected数组确保state中不会出现重复元素
var permute = function (nums) {
  let state = [];
  let choices = [...nums];
  const res = [];
  const selected = new Array(nums.length).fill(false);
  backtrack(state, choices, res, selected);
  return res;
};
function backtrack(state, choices, res, selected) {
  if (isSolution(state, choices)) {
    recordSolution(state, res);
    return;
  }
  choices.forEach((choice, index) => {
    if (isValid(index, selected)) {
      makeChoice(choice, index, state, selected);
      backtrack(state, choices, res, selected);
      undoChoice(state, index, selected);
    }
  });
}
function isSolution(state, choices) {
  return state.length === choices.length;
}
function recordSolution(state, res) {
  res.push([...state]);
}
function isValid(index, selected) {
  return !selected[index];
}
function makeChoice(choice, index, state, selected) {
  state.push(choice);
  selected[index] = true;
}
function undoChoice(state, index, selected) {
  state.pop();
  selected[index] = false;
}
// @lc code=end
