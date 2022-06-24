function solution(inputArray) {
  let num = 0;
  for (let i = 0; i < inputArray.length; i++) {
    let sum = inputArray[i] * inputArray[i + 1];
    if (i === 0) {
      num = sum;
    } else if (sum > num) {
      num = sum;
    }
  }
  console.log(num);
  return num;
}
