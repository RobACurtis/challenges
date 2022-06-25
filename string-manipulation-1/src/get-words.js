/* exported getWords */
function getWords(string) {
  if (!string[0]) return [];
  const words = string.split(' ');
  return words;
}
