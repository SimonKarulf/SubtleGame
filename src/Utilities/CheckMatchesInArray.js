export function checkArray(possibleCodes, enteredCodes, maxMatches) {
  let matches = 0;

  enteredCodes.forEach(enteredCode => {
    if (possibleCodes.includes(enteredCode)) {
      matches++;
    }
  });

  if (matches > 5) {
    matches = 5;
  }

  return matches;
}