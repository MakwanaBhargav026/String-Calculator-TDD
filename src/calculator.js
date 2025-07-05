function add(numbers) {
  if (handleEmptyInput(numbers)) return 0;
  const { delimiter, numberString } = extractDelimiter(numbers);
  const numberList = parseNumbers(numberString, delimiter);
  checkForNegatives(numberList);
  return numberList.reduce((sum, n) => sum + n, 0);
}

//Handles empty string
function handleEmptyInput(numbers) {
  return numbers.trim() === "";
}

//Extracts custom delimiter if present
function extractDelimiter(input) {
  const defaultDelimiter = /,|\n/;

  if (input.startsWith("//")) {
    const parts = input.split("\n");
    const rawDelimiter = parts[0].slice(2); // after "//"
    const escaped = escapeRegExp(rawDelimiter);
    const customDelimiter = new RegExp(escaped);
    const restOfString = parts.slice(1).join("\n");

    return {
      delimiter: customDelimiter,
      numberString: restOfString,
    };
  }

  return {
    delimiter: defaultDelimiter,
    numberString: input,
  };
}

// Escapes RegExp-special characters (for custom delimiters like *, +, etc.)
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Converts string to array of valid numbers
function parseNumbers(numbers, delimiter) {
  return numbers
    .split(delimiter)
    .map(num => parseInt(num.trim(), 10)) // trim to handle spaces
    .filter(n => !isNaN(n));              // skip invalid values
}

// Throws if any negatives are found
function checkForNegatives(numbers) {
  const negatives = numbers.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }
}

module.exports = add;
