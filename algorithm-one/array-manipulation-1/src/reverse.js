/* exported reverse */
function reverse(array) {
  let counter = 0;
  const length = Math.floor(array.length / 2);
  for (let i = array.length - 1; i >= length; i--){
    const item = array[counter];
    array[counter] = array[i];
    array[i] = item;
    counter++;
  }
  return array;
}
