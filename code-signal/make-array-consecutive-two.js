function solution(statues) {
  let difference = 0;
  let lowestToHighest = statues.sort((a, b) => a - b);
  for (let i = 0; i < lowestToHighest.length; i++) {
    let result = ((lowestToHighest[i + 1]) - lowestToHighest[i]) - 1;
    if (result > 0) {
      difference += result;
    };
  }
  return difference;
}
