function solution(n) {
  let val = 1;
  for (let i = 2; i <= n; i++) {
    val = val + ((i * 4) - 4);
  }
  return val;
}
