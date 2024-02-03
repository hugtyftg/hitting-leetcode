const graph: number[][] = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 1, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0],
];
const INF = Number.MAX_SAFE_INTEGER;
const dijkstra = (graph: number[][], src: number) => {
  const length = graph.length;
  const dist: number[] = Array.from({ length }, () => INF);

  const visited: boolean[] = Array.from({ length }, () => false);
  // initial source
  dist[src] = 0;
  // 每次都选最近的一个点（贪心），并根据该点更新dist数组
  // 当选到倒数第二个点的时候，就剩最后一个点了，直接能得到结果，所以不用再循环一次了，外循环次数是length - 1
  for (let i = 0; i < length - 1; i++) {
    // current node
    const u: number = curMinDistNode(dist, visited);
    visited[u] = true;
    for (let v = 0; v < length; v++) {
      if (
        // 该点没有被访问过
        !visited[v] &&
        // 距离是有效的
        graph[u][v] !== 0 &&
        // 距离小于当前距离
        dist[u] + graph[u][v] < dist[v]
      ) {
        dist[v] = dist[u] + graph[u][v];
      }
    }
  }
  console.log(dist);

  return dist;
};

const curMinDistNode = (dist: number[], visited: boolean[]) => {
  let min: number = INF;
  let minIndex: number = -1;
  for (let i = 0; i < dist.length; i++) {
    if (!visited[i] && dist[i] <= min) {
      min = dist[i];
      minIndex = i;
    }
  }
  return minIndex;
};
dijkstra(graph, 0);
