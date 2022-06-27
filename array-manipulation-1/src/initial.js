/* exported initial */
function initial(array) {
  if (!array[0]) return array;
  array.length = array.length - 1;
  return array;
}
