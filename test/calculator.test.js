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

// Test case of using delimeter as seprater.
test('returns sum for an multiple digit seprtaed by comas or delimeter in string', () => {
  expect(add("1,3\n2")).toBe(6);
});

test('returns sum for an multiple digit seprtaed by comas or delimeter in string', () => {
  expect(add("3\n2")).toBe(5);
});

// test for wrong test case
test('returns sum for an multiple digit seprtaed by comas or delimeter in string', () => {
  expect(add("\n2,4")).toBe(6);
});

// Test case of custom delimiter.
test('returns sum for an multiple digit seprtaed by comas or delimeter in string', () => {
  expect(add("//;\n1;2;3")).toBe(6);
  expect(add("//-\n1-2-3")).toBe(6);
  expect(add("//*\n1*2*3")).toBe(6);
});

// test for negative digit
test('expection for negative number', () => {
  expect(() => add("//-\n4--2--3")).toThrow("negatives not allowed: -2,-3");
  expect(() => add("4,-2,-3")).toThrow("negatives not allowed: -2,-3");
});

test('expection for negative number', () => {
  expect(() => add("-2")).toThrow("negatives not allowed: -2");
});
