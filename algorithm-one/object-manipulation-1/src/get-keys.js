/* exported getKeys */
function getKeys(object) {
  const newArr = [];
    for (key in object) {
      newArr.push(key);
    }
    return newArr;
}
