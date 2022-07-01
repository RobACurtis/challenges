/* exported capitalize */

function capitalize(word) {
  let capitalize = '';
for (let i = 0; i < word.length; i++) {
  if (i === 0) {
    const cap = word[i].toUpperCase()
    capitalize += cap;
  }
  else {
    const cap = word[i].toLowerCase()
    capitalize += cap;
  }
}
return capitalize;
}
