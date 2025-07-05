const add = require('../src/calculator');

// Test case for empty string.
test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

// Test case for return sum of single digit and multiple digit in string.
test('returns 0 for an empty string', () => {
  expect(add("0")).toBe(0);
});

test('returns digit for single digit in string', () => {
  expect(add("5")).toBe(5);
});

test('returns sum for multiple digit in string', () => {
  expect(add("5,4,3")).toBe(12);
});