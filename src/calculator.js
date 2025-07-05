function add(numbers) {
  if (handleEmptyInput(numbers)) return 0;

  const { delimiter, numberString, isDashDelimiter } = extractDelimiter(numbers);

  const tokens = isDashDelimiter
    ? smartSplitDashAware(numberString)
    : numberString.split(delimiter); // already a regex

  const parsed = tokens
    .map(n => parseInt(n.trim(), 10))
    .filter(n => !isNaN(n));

  checkForNegatives(parsed);

  const valid = parsed.filter(n => n <= 1000);
  return valid.reduce((sum, n) => sum + n, 0);
}

//Empty input
function handleEmptyInput(numbers) {
  return numbers.trim() === "";
}

//Extract delimiter from string
function extractDelimiter(input) {
  const defaultDelimiter = /,|\n/;

  if (input.startsWith("//")) {
    const parts = input.split("\n");
    const header = parts[0].slice(2);
    const rest = parts.slice(1).join("\n");

    // Case: multi-length delimiter: //[***]
    const bracketMatch = header.match(/^\[(.+)]$/);
    if (bracketMatch) {
      const raw = escapeRegExp(bracketMatch[1]);
      return {
        delimiter: new RegExp(raw),
        numberString: rest,
        isDashDelimiter: false
      };
    }

    // Case: single-char delimiter like `//-`
    const raw = escapeRegExp(header);
    return {
      delimiter: new RegExp(raw),
      numberString: rest,
      isDashDelimiter: header === "-"
    };
  }

  return {
    delimiter: defaultDelimiter,
    numberString: input,
    isDashDelimiter: false
  };
}

//Escape regex chars
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

//Custom split logic for `-` delimiter with negative detection
function smartSplitDashAware(str) {
  const result = [];
  let current = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-' && str[i + 1] === '-') {
      if (current) result.push(current);
      current = '-';
      i++; // skip next -
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

//Throw if any negative number
function checkForNegatives(numbers) {
  const negatives = numbers.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }
}

module.exports = add;
