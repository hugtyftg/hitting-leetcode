function graphBFS(list, startVet) {
  const res = [];
  const visited = new Set();
  visited.add(startVet);
  const queue = [startVet];
  while (queue.length) {
    const vet = queue.shift();
    res.push(vet);
    for (const adjVet of list.get(vet)) {
      if (visited[adjVet]) {
        continue
      } else {
        queue.push(adjVet);
        visited.add(adjVet);
      }
    }
  }
}
