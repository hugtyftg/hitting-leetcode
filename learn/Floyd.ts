const graph2: number[][] = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 1, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0],
];
function Floyd(graph: number[][]) {
  // 保存任意一对点之间的路径
  const path: number[][] = Array.from({ length: graph.length }, () =>
    Array.from({ length: graph.length }, () => -1)
  );
  // 路径
  // 注意：没有连边的为infinity，对角线上为0
  const A: number[][] = [];
  for (let i = 0; i < graph.length; i++) {
    A[i] = [];
    for (let j = 0; j < graph.length; j++) {
      if (graph[i][j] === 0) {
        A[i][j] = Infinity;
      } else {
        A[i][j] = graph[i][j];
      }
      if (i === j) {
        A[i][j] = 0;
      }
    }
  }
  // 核心的三层循环，通过中间点k判断是否要更新A
  for (let k = 0; k < graph.length; k++) {
    for (let i = 0; i < graph.length; i++) {
      for (let j = 0; j < graph.length; j++) {
        if (A[i][j] > A[i][k] + A[k][j]) {
          A[i][j] = A[i][k] + A[k][j];
          path[i][j] = k;
        }
      }
    }
  }
  console.log(A);
}
Floyd(graph2);
