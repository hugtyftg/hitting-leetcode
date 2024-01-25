/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 通过selected数组确保state中不会出现重复元素
// 通过duplication集合确保每轮选择不会出现数值相等的元素
var permuteUnique = function (nums) {
  const state = [];
  const choices = [...nums];
  const res = [];
  const selected = new Array(nums.length).fill(false);
  backtrack(state, choices, res, selected);
  return res;
};
function backtrack(state, choices, res, selected) {
  // isSolution
  if (state.length === choices.length) {
    // record solution
    res.push([...state]);
    return;
  }
  // 一轮选择
  const duplication = new Set();
  choices.forEach((choice, index) => {
    // isValid
    // state中没有选择过该元素，并且该轮选择并没选过相同数值的元素
    if (!selected[index] && !duplication.has(choice)) {
      // makechoice
      state.push(choice);
      selected[index] = true;
      duplication.add(choice);
      // back track
      backtrack(state, choices, res, selected);
      // undochoice
      state.pop();
      selected[index] = false;
      // 注意：回退的时候不能撤销set存入的数据
    }
  });
}
// @lc code=end
