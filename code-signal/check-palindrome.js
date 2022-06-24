function solution(inputString) {
  const arr = inputString.split('');
  const reverse = arr.reverse();
  let revString = '';
  for (let i = 0; i < reverse.length; i++) {
    revString += reverse[i];
  }
  if (inputString === revString) {
    return true;
  } else {
    return false;
  }
}
