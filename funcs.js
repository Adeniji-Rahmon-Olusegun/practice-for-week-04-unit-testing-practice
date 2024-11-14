function isFive(num) {
  // Your code here
  if (num === 5) {
    return true;
  } else {
    return false;
  }
}

function isOdd(number) {
  // Your code here
  if (number < 0) {
    number = -number;
  }

  if(number % 2 === 1) {
    return true;
  } else if (number % 2 === 0) {
    return false
  } else if(typeof number !== 'number') {
    throw new Error;
  }
}

function myRange(min, max, step = 1) {
  // Your code here

  if (min > max) return [];

  let rangeArr = [];

  for (let idx = min; idx <= max; idx += step) {
    rangeArr.push(idx);
  }

  return rangeArr;
}

console.log(myRange(0, 5));

module.exports = { isFive, isOdd, myRange };