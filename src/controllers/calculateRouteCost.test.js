import calculateRouteCost from './calculateRouteCost';

test('calculateRouteCost()', () => {
  const graph = {
    A: { B: 1, C: 4, D: 10 },
    B: { E: 3 },
    C: { D: 4, F: 2 },
    D: { E: 1 },
    E: { B: 3, A: 2 },
    F: { D: 1 },
  }

  expect(calculateRouteCost(graph, ['A', 'B', 'E'])).toBe(4);
  expect(calculateRouteCost(graph, ['A', 'D'])).toBe(10);
  expect(calculateRouteCost(graph, ['E', 'A', 'C', 'F'])).toBe(8);
  expect(calculateRouteCost(graph, ['A', 'D', 'F'])).toBe('No Such Route');
});
