function add(numbers) {
  if (handleEmptyInput(numbers)) return 0;
  if (isSingleNumber(numbers)) return parseInt(numbers);
  const nums = parseNumbers(numbers);
  return nums.reduce((sum, n) => sum + n, 0);
}

// Handles empty string
function handleEmptyInput(numbers) {
  return numbers === "";
}

// Handles single number input like "5"
function isSingleNumber(numbers) {
  return !numbers.includes(",") && !numbers.includes("\n");                                                                                                                     
}

// Converts string to array of numbers
function parseNumbers(numbers) {
  return numbers.split(/\n|,/).map(num => parseInt(num));
}

module.exports = add ;