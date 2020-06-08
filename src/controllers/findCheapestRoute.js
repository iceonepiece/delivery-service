const findCheapestNode = (costs, visited) => {
  let shortestNode = null;

  for (let node in costs) {
    const valid = shortestNode === null || costs[node] < costs[shortestNode];

    if (valid && !visited[node]) {
			shortestNode = node;
		}
  }

  return shortestNode;
}

const findCheapestRoute = (graph, from, to) => {
  const costs = { [to]: Infinity, ...graph[from] };

  const parents = { [to]: null };
  for (let child in graph[from]) {
    parents[child] = from;
  }

  const visited = {};

  let node = findCheapestNode(costs, visited);

  while (node) {
    const cost = costs[node];
    const children = graph[node];

    for (let i in children) {
      const newCost = cost + children[i];

      if (!costs[i] || newCost < costs[i]) {
        costs[i] = newCost;
        parents[i] = node;
      }
    }

    visited[node] = true;
    node = findCheapestNode(costs, visited);
  }

  const cheapestRoute = [to];
  let nextNode = parents[to];

  while (nextNode) {
    cheapestRoute.push(nextNode);
    if (nextNode === from) break;

    nextNode = parents[nextNode];
  }

  return {
    route: cheapestRoute,
    cost: costs[to],
  };
}

export default findCheapestRoute;
