/* exported getKeys */
function getKeys(object) {
  let newArr = [];
    for (key in object) {
      newArr.push(key);
    }
    return newArr;
}
