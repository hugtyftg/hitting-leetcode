const graph: number[][] = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 1, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0],
];

function dijkstra(graph: number[][], src: number) {
  const dist = Array.from({ length: graph.length }, () => Infinity);
  const visited = Array.from({ length: graph.length }, () => false);
  // path[vi]始终存储最短路径上vi的前一个节点vi-1
  const path = Array.from({ length: graph.length }, () => -1);
  // 初始化
  dist[src] = 0;
  for (let i = 0; i < graph.length - 1; i++) {
    let u = minDist(dist, visited);
    visited[u] = true;
    for (let v = 0; v < graph.length; v++) {
      if (
        !visited[v] &&
        dist[u] !== Infinity &&
        graph[u][v] !== 0 &&
        dist[v] > dist[u] + graph[u][v]
      ) {
        dist[v] = dist[u] + graph[u][v];
        path[v] = u;
      }
    }
  }
  console.log(dist);
  console.log(path);

  return dist;
}
function minDist(dist: number[], visited: boolean[]) {
  let minIndex = -1;
  let d = Infinity;
  for (let i = 0; i < dist.length; i++) {
    if (d > dist[i] && !visited[i]) {
      d = dist[i];
      minIndex = i;
    }
  }
  return minIndex;
}
dijkstra(graph, 0);
