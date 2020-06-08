const findPossibleRoutes = (graph, start, destination, options) => {
  const { maxRepeats = 1, maxStops = Infinity, maxCost = Infinity } = options;

  const queue = Object.keys(graph[start]).map(i => {
    return { route: [start, i], cost: graph[start][i] };
  });

  const possibleRoutes = [];
  const usedRoutes = {};

  while (queue.length > 0) {
    const currentRoute = queue.shift();

    let isValid = true;
    const nNodes = currentRoute.route.length;
    const beforeLatestNode = currentRoute.route[nNodes - 2];
    const latestNode = currentRoute.route[nNodes - 1];

    if (nNodes - 1 > maxStops) isValid = false;
    if (currentRoute.cost > maxCost) isValid = false;

    if (isValid) {
      const currentRouteStr = currentRoute.route.join('');

      if (currentRoute.route[nNodes - 1] === destination) {
        if (!usedRoutes[currentRouteStr]) {
          usedRoutes[currentRouteStr] = 0;
        }

        usedRoutes[currentRouteStr] += 1;
        possibleRoutes.push(currentRoute);
      }

      if (usedRoutes[currentRouteStr] && usedRoutes[currentRouteStr] >= maxRepeats)
        continue;

      const nextNodes = Object.keys(graph[latestNode]);

      for (let i = 0; i < nextNodes.length; i += 1) {
        queue.push({
          route: [...currentRoute.route, nextNodes[i]],
          cost: currentRoute.cost + graph[latestNode][nextNodes[i]],
        });
      }
    }
  }

  return possibleRoutes;
}

export default findPossibleRoutes;
