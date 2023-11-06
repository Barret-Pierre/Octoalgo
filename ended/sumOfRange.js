function range(start, target, step = start < target ? 1 : -1) {
  const rangeArray = [];
  if ((start < target && step < 0) || (start > target && step > 0)) {
    console.log("Error in parameters, step doesn't match with direction");
    return [];
  }

  for (
    let number = start;
    start < target ? number <= target : number >= target;
    number += step
  ) {
    rangeArray.push(number);
  }

  return rangeArray;
}

function sum(arrayOfNumber) {
  let result = 0;
  for (let number of arrayOfNumber) {
    result += number;
  }
  return result;
}

console.log(range(11, 2, -1));
console.log(sum(range(10, 1)));
console.log(sum(range(1, 10)));
console.log(sum(range(5, 2)));
