/* exported getValues */
const getValues = object => {
  const newArr = [];
  for (key in object) {
    newArr.push(object[key]);
  }
  return newArr;
}
