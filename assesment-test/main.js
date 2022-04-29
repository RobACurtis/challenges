var counter = 10;
numbers = [];
for (var i = 0; i < 10; i++) {
  counter += 73;
  numbers.push(counter);
}

console.log(numbers);

if (numbers > 740) {
  console.log("Maximum array number exceeded");
} else {
  console.log('Array values within specification');
}

var stats = {};

function getStats(statsObj, numbersArr) {
 var largest = 0;
 var arrTotal = null;
  for (var i = 0; i < numbersArr.length; i++) {
    if (numbersArr[i] > largest) {
      largest = numbersArr[i];
      statsObj.largestNum = numbersArr[i];
    }
    arrTotal += numbersArr[i];
  }
  var arrAverage = arrTotal / numbersArr.length;
  statsObj.arrAverage = arrAverage;
  return statsObj;
}

var returnedStats = getStats(stats, numbers);

console.log('The largest number was ' + returnedStats.largestNum + ' and the average of all the numbers was ' + returnedStats.arrAverage);
