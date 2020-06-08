import findPossibleRoutes_2 from './findPossibleRoutes_2';

test('findPossibleRoutes_2()', () => {
  const graph = {
    A: { B: 1, C: 4, D: 10 },
    B: { E: 3 },
    C: { D: 4, F: 2 },
    D: { E: 1 },
    E: { B: 3, A: 2 },
    F: { D: 1 },
  }

  expect(findPossibleRoutes_2(graph, 'E', 'D', { maxRepeats: 1, maxStops: 4 })).toHaveLength(4);
  expect(findPossibleRoutes_2(graph, 'E', 'E', { maxRepeats: 1 })).toHaveLength(5);
  expect(findPossibleRoutes_2(graph, 'E', 'E', { maxRepeats: 3, maxCost: 19 })).toHaveLength(29);
});
