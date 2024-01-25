/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 时间换空间
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  // 记录在整个遍历过程中得到的每个最长字符串的长度
  let maxLengthMap = [0];
  // 当前字符串在map中的索引
  let curStrIdxOfMap = 0;
  // 正在计算的最大字符串
  let wipMaxStr = '';
  let charIdxOfMax = -1;
  for (let i = 0; i < s.length; i++) {
    const curChar = s[i];
    charIdxOfMax = wipMaxStr.indexOf(curChar);
    if (charIdxOfMax === -1) {
      // add
      wipMaxStr += curChar;
      maxLengthMap[curStrIdxOfMap]++;
    } else {
      // repeat
      // 创建下一个str
      curStrIdxOfMap++;
      // 从原先的str中截取没有重复的一部分
      wipMaxStr = wipMaxStr.slice(charIdxOfMax + 1);
      // 加上当前char
      wipMaxStr += curChar;

      maxLengthMap[curStrIdxOfMap] = wipMaxStr.length;
    }
    // 每次循环后更新当前最大字数
    if (maxLengthMap[curStrIdxOfMap] > maxLength) {
      maxLength = maxLengthMap[curStrIdxOfMap];
    }
  }
  return maxLength;
};
// @lc code=end
