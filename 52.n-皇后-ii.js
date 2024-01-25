/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N 皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 注意，对于这种最终输出是number的问题，state可以用number，但是res一定不能
// 因为在传参的时候primitive value会复制一份全新的参数，选择过程中res的变化不会同步更改
// 因此可以考虑传入一个map
var totalNQueens = function (n) {
  // 记录每一列是否有皇后
  const colMatrix = new Array(n).fill(false);
  // 记录每一条主对角线是否有皇后
  const mainMatrix = new Array(2 * n - 1).fill(false);
  // 记录每一条次对角线是否有皇后
  const subMatrix = new Array(2 * n - 1).fill(false);
  // 每一步（每一行）有四种选择
  const choices = Array.from({ length: n }, (_, k) => k);
  const res = new Map();
  res.set('result', 0);
  const state = 0;
  backTrack(state, choices, res, colMatrix, mainMatrix, subMatrix);
  return res.get('result');
};
function backTrack(state, choices, res, colMatrix, mainMatrix, subMatrix) {
  // 放置完所有
  if (state === choices.length) {
    res.set('result', res.get('result') + 1);
    return;
  }
  choices.forEach((choice) => {
    if (isValid(state, choice, choices, colMatrix, mainMatrix, subMatrix)) {
      // make choice
      colMatrix[choice] = true;
      mainMatrix[state - choice + choices.length - 1] = true; // row - col
      subMatrix[state + choice] = true; // row + col
      state++;
      // back track
      backTrack(state, choices, res, colMatrix, mainMatrix, subMatrix);
      // undo choice
      state--;
      colMatrix[choice] = false;
      mainMatrix[state - choice + choices.length - 1] = false;
      subMatrix[state + choice] = false;
    }
  });
}
// 仅当目标位置的col、主对角线和次对角线都没有其他Queen的时候，该位置才是可行的
function isValid(state, choice, choices, colMatrix, mainMatrix, subMatrix) {
  // 行
  const isColValid = !colMatrix[choice];
  // 行数也就是当前为第几步-1，可以通过state长度判断
  // main diagonal
  const isMainDiaValid = !mainMatrix[state - choice + choices.length - 1];
  // sub diagonal
  const isSubDiaValid = !subMatrix[state + choice];
  if (isColValid && isMainDiaValid && isSubDiaValid) {
    return true;
  } else {
    return false;
  }
}
// @lc code=end
