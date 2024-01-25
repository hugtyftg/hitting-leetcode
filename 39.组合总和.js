/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];
  const choices = candidates;
  const state = {
    arr: [],
    curSum: 0,
  };
  let start = 0;
  backTrack(state, choices, res, target, start);
  return res;
};
function backTrack(state, choices, res, target, start) {
  if (state.curSum === target) {
    res.push([...state.arr]);
    return;
  }
  // 防止出现逆序序列集合，因此每次进入下一轮的时候，开始选择的choice至少是上一个choice
  for (let i = start; i < choices.length; i++) {
    if (choices[i] <= target - state.curSum) {
      state.arr.push(choices[i]);
      state.curSum += choices[i];
      backTrack(state, choices, res, target, i);
      state.arr.pop();
      state.curSum -= choices[i];
    }
  }
}
// @lc code=end
