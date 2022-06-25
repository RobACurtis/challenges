/* exported reverseWord */
function reverseWord(word) {
  let reverseWord = word[word.length - 1]
  for (let i = word.length - 2; i >= 0; i--) {
      reverseWord += word[i];
  }
  return reverseWord;
}
