/* exported isLowerCased */
function isLowerCased(word) {
  let isLowerCased = true;
  for (let i = 0; i < word.length; i++) {
    if(word[i] !== word[i].toLowerCase()) {
      isLowerCased = false;
      return isLowerCased;
    }
  }
  return isLowerCased;
}
