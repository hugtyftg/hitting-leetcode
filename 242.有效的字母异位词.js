/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 快速 判断/查找 一个元素是否出现集合里的时候，就要考虑哈希法，一般有array、set、map三种
var isAnagram = function (s, t) {
  const sMap = new Map();
  const tMap = new Map();
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    recordChar(s[i], sMap);
    recordChar(t[i], tMap);
  }
  if (sMap.size !== tMap.size) return false;
  for (const key of sMap.keys()) {
    if (sMap.get(key) !== tMap.get(key)) {
      return false;
    }
  }
  return true;
};

const recordChar = (char, map) => {
  if (!map.get(char)) {
    map.set(char, 0);
  }
  const curCount = map.get(char);
  map.set(char, curCount + 1);
};
// @lc code=end
