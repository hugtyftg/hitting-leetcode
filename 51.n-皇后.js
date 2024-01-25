/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
// 主对角线row-col恒定，次对角线row+col恒定
// 列取值[0,n-1]，主对角线取值[1-n, n-1]，次对角线取值[0，2n-2]
// 注意，数组索引不能为负数，所以后续涉及到主对角线的计算时需要加上n+1
// n列，2n-1条主对角线，2n-1条次对角线
var solveQueens = function (n) {
  // 记录每一列是否有皇后
  const colMatrix = new Array(n).fill(false);
  // 记录每一条主对角线是否有皇后
  const mainMatrix = new Array(2 * n - 1).fill(false);
  // 记录每一条次对角线是否有皇后
  const subMatrix = new Array(2 * n - 1).fill(false);
  // 每一步（每一行）有四种选择
  const choices = Array.from({ length: n }, (_, k) => k);
  const res = [];
  const state = [];
  backTrack(state, choices, res, colMatrix, mainMatrix, subMatrix);
  return res;
};
function backTrack(state, choices, res, colMatrix, mainMatrix, subMatrix) {
  // 放置完所有
  if (state.length === choices.length) {
    res.push([...state]);
    return;
  }
  choices.forEach((choice) => {
    if (isValid(state, choice, choices, colMatrix, mainMatrix, subMatrix)) {
      // make choice
      colMatrix[choice] = true;
      mainMatrix[state.length - choice + choices.length - 1] = true; // row - col
      subMatrix[state.length + choice] = true; // row + col
      state.push(getRowOutput(choice, choices.length)); // 注意：state要在最后修改，否则state.length和row无法对应
      // back track
      backTrack(state, choices, res, colMatrix, mainMatrix, subMatrix);
      // undo choice
      state.pop(); // 注意：state要在最前面修改，否则state.length 和 row无法对应
      colMatrix[choice] = false;
      mainMatrix[state.length - choice + choices.length - 1] = false;
      subMatrix[state.length + choice] = false;
    }
  });
}
// 仅当目标位置的col、主对角线和次对角线都没有其他Queen的时候，该位置才是可行的
function isValid(state, choice, choices, colMatrix, mainMatrix, subMatrix) {
  // 行
  const isColValid = !colMatrix[choice];
  // 行数也就是当前为第几步-1，可以通过state长度判断
  // main diagonal
  const isMainDiaValid =
    !mainMatrix[state.length - choice + choices.length - 1];
  // sub diagonal
  const isSubDiaValid = !subMatrix[state.length + choice];
  if (isColValid && isMainDiaValid && isSubDiaValid) {
    return true;
  } else {
    return false;
  }
}
// 返回一个表示当前步骤（行）的字符串
function getRowOutput(Qindex, choicesLength) {
  let result = '';
  for (let i = 0; i < choicesLength; i++) {
    if (i === Qindex) {
      result += 'Q';
    } else {
      result += '.';
    }
  }
  return result;
}
// @lc code=end
