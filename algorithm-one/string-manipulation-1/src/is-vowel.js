/* exported isVowel */
function isVowel(character) {
  const vowels = {
    'a': true,
    'A': true,
    'e': true,
    'E': true,
    'i': true,
    'I': true,
    'o': true,
    'O': true,
    'u': true,
    'U': true
  }
  if (vowels[character]) return true;
  return false;
}
