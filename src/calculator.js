function add(numbers) {
  if (handleEmptyInput(numbers)) return 0;

  const { delimiter, numberString } = extractDelimiter(numbers);

  if (isSingleNumber(numberString, delimiter)) {
    return parseInt(numberString, 10);
  }

  const nums = parseNumbers(numberString, delimiter);
  return nums.reduce((sum, n) => sum + n, 0);
}

// Handles empty string
function handleEmptyInput(numbers) {
  return numbers === "";
}

// Handles single number input
function isSingleNumber(numbers, delimiter) {
  return !delimiter.test(numbers);
}

// Extracts custom delimiter if present
function extractDelimiter(input) {
  const defaultDelimiter = /,|\n/;

  if (input.startsWith("//")) {
    const parts = input.split("\n");
    const delimiterLine = parts[0].slice(2); // remove "//"
    const escaped = escapeRegExp(delimiterLine);
    const customDelimiter = new RegExp(escaped);
    return {
      delimiter: customDelimiter,
      numberString: parts.slice(1).join("\n"),
    };
  }

  return {
    delimiter: defaultDelimiter,
    numberString: input,
  };
}

// Escape RegExp special characters (e.g., *, +, ?)
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Converts string to array of numbers
function parseNumbers(numbers, delimiter) {
  return numbers
    .split(delimiter)
    .map(num => parseInt(num, 10));
}

module.exports = add;
