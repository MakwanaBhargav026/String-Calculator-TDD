function add(numbers) {
  if (handleEmptyInput(numbers)) return 0;

  const { delimiter, numberString, isDashDelimiter } = extractDelimiter(numbers);

  const tokens = isDashDelimiter
    ? smartSplitDashAware(numberString)
    : numberString.split(delimiter);

  const parsed = tokens
    .map(n => parseInt(n.trim(), 10))
    .filter(n => !isNaN(n));

  checkForNegatives(parsed);

  const valid = parsed.filter(n => n <= 1000);
  return valid.reduce((sum, n) => sum + n, 0);
}

function handleEmptyInput(numbers) {
  return numbers.trim() === "";
}

function extractDelimiter(input) {
  const defaultDelimiter = /,|\n/;

  if (input.startsWith("//")) {
    const parts = input.split("\n");
    const delimiterLine = parts[0].slice(2);
    const numberString = parts.slice(1).join("\n");

    // Case: multiple delimiters like [***][%]
    const multiMatch = delimiterLine.match(/\[(.+?)\]/g);
    if (multiMatch) {
      const escaped = multiMatch
        .map(d => escapeRegExp(d.slice(1, -1))) // remove brackets and escape
        .join("|");
      return {
        delimiter: new RegExp(`(?:${escaped})`),
        numberString,
        isDashDelimiter: multiMatch.length === 1 && multiMatch[0] === "[-]"
      };
    }

    // Case: single delimiter like `//;`
    return {
      delimiter: new RegExp(escapeRegExp(delimiterLine)),
      numberString,
      isDashDelimiter: delimiterLine === "-"
    };
  }

  return {
    delimiter: defaultDelimiter,
    numberString: input,
    isDashDelimiter: false
  };
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// For `-` delimiter: treat `--3` as -3
function smartSplitDashAware(str) {
  const result = [];
  let current = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-' && str[i + 1] === '-') {
      if (current) result.push(current);
      current = '-';
      i++;
    } else if (str[i] === '-') {
      if (current) result.push(current);
      current = '';
    } else {
      current += str[i];
    }
  }
  if (current) result.push(current);
  return result;
}

function checkForNegatives(numbers) {
  const negatives = numbers.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }
}

module.exports = add;
