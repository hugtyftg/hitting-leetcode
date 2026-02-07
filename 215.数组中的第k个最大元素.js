/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 小顶堆解决topK问题
var findKthLargest = function (nums, k) {
  const heap = nums.slice(0, k);
  buildHeap(heap);

  for (let i = k; i < nums.length; i++) {
    // 如果当前元素的值大于小顶堆顶值，更新
    if (nums[i] > heap[0]) {
      heap[0] = nums[i];
      SiftDown(heap, 0)
    }
  }
  return heap[0]
};
function buildHeap(arr) {
  if (arr.length === 1) return;
  // 从最后一个非叶子节点开始倒序siftdown
  for (let i = Math.floor((arr.length - 1 - 1) / 2); i >= 0; i--) {
    SiftDown(arr, i)
  }
}
function SiftDown(heap, i) {
  while (true) {
    let curIndex = i;
    let l = 2 * i + 1, r = 2 * i + 2;
    if (heap[curIndex] > heap[l] && l < heap.length) curIndex = l;
    if (heap[curIndex] > heap[r] && r < heap.length) curIndex = r;
    if (curIndex === i) {
      // 如果没有发生交换，说明已经结束sift down
      break;
    } else {
      // 如果发生交换，一定记得先交换元素，再更新i
      [heap[i], heap[curIndex]] = [heap[curIndex], heap[i]]
      i = curIndex;
    }
  }
}
// @lc code=end

