function solution(year) {
  var centuryMin = 0;
  var centuryMax = 100;
  var cen = 1;
  for (var i = 1; i <= 2005; i++) {
    if (year >= centuryMin && year <= centuryMax) {
      return cen;
    }
    else {
      cen++;
      centuryMin += 100;
      centuryMax += 100;
    }
  }
}
