let counter = 10;
let numbers = [];

for (let i = 0; i < 10; i++) {
  counter += 73;
  numbers.push(counter);
}

console.log(numbers);

if (numbers > 740) {
  console.log("Maximum array number exceeded");
} else {
  console.log('Array values within specification');
}

const stats = {};


const getStats = (statsObj, numbersArr) => {
  let largest = 0;
  let arrTotal = null;
  for (let i = 0; i < numbersArr.length; i++) {
    if (numbersArr[i] > largest) {
      largest = numbersArr[i];
      statsObj.largestNum = numbersArr[i];
    }
    arrTotal += numbersArr[i];
  }
  const arrAverage = arrTotal / numbers.length;
  statsObj.arrAverage = arrAverage;
  return stats;
};

const returnedStats = getStats(stats, numbers);
console.log('The largest number was ' + returnedStats.largestNum + ' and the average of all the numbers was ' + returnedStats.arrAverage);
