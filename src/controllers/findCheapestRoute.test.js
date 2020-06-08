import findCheapestRoute from './findCheapestRoute';

test('findCheapestRoute()', () => {
  const graph = {
    A: { B: 1, C: 4, D: 10 },
    B: { E: 3 },
    C: { D: 4, F: 2 },
    D: { E: 1 },
    E: { B: 3, A: 2 },
    F: { D: 1 },
  }

  expect(findCheapestRoute(graph, 'E', 'D').cost).toBe(9);
  expect(findCheapestRoute(graph, 'E', 'E').cost).toBe(6);
});
