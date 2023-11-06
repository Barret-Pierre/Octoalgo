function reverseArray(array) {
  const reversedArray = [];
  for (let element of array) {
    reversedArray.unshift(element);
  }
  return reversedArray;
}

function reverseArrayInPlace(array) {
  for (let index = 0; index < array.length / 2; index++) {
    const varTemp = array[index];
    array[index] = array[array.length - (1 + index)];
    array[array.length - (1 + index)] = varTemp;
  }
}

let testArray = ["A", 1, "D", "C"];

console.log("Reverse in new array: ", reverseArray(testArray));
console.log("Origin array: ", testArray);
reverseArrayInPlace(testArray);
console.log("Origin array: ", testArray);

/* -------------------------Performances tests---------------------------*/

// let start2 = performance.now();
// reverseArrayInPlace(testArray);
// let end2 = performance.now();
// console.log(end2 - start2);

// let start1 = performance.now();
// reverseArray(testArray);
// let end1 = performance.now();
// console.log(end1 - start1);
