/* exported toObject */
const toObject = keyValuePair => {
  let obj = {}
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
} ;
