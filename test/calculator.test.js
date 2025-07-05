const add = require('../src/calculator');

// Test case for empty string.
test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});