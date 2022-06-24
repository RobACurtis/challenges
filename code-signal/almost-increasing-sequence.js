function solution(sequence) {
  let strictlyIncreasing;

  for (let i = 0; i < sequence.length - 1; i++) {
    if (sequence[i] < sequence[i + 1]) {
      continue;
    } else {
      if (strictlyIncreasing === undefined) {
        if (i === 0 || sequence[i + 1] > sequence[i - 1]) {
          strictlyIncreasing = sequence.splice(i, 1);
        } else {
          strictlyIncreasing = sequence.splice(i + 1, 1);
        }
        i = -1;
      } else {
        return false;
      }
    }
  }
  return true;
}
