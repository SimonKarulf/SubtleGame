export function checkArray(arr, strings, maxMatches) {
  let matches = 0;
  for (let i = 0; i < arr.length; i++) {
    if (strings.includes(arr[i]) && matches < maxMatches) {
      matches++;
    }
  }
  return matches;
}