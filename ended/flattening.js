function flattening(array) {
  const reduced = array.reduce(
    (firstArray, secondArray) => firstArray.concat(secondArray),
    []
  );
  return reduced;
}

let array = [[1, 2, 3], [4, 5], 6];
console.log(flattening(array));
