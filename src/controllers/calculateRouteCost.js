const calculateRouteCost = (graph, route) => {
  let totalCost = 0;

  for (let i = 0; i < route.length - 1; i += 1) {
    const start = route[i];
    const end = route[i + 1];

    if (!graph[start] || !graph[start][end]) {
      return 'No Such Route';
    }

    totalCost += graph[start][end];
  }

  return totalCost;
}

export default calculateRouteCost;
