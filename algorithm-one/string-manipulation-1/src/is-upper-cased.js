/* exported isUpperCased */
function isUpperCased(word) {
  let isUppercased;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      isUppercased = true;
    } else {
      isUppercased = false;
      return isUppercased;
    }
  }
  return isUppercased;
}
