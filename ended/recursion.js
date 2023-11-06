function recursion(numberToTest) {
  if (numberToTest < 0) {
    numberToTest *= -1;
  }

  if (numberToTest === 1) {
    return false;
  } else if (numberToTest === 0) {
    return true;
  } else {
    return recursion(numberToTest - 2);
  }
}

console.log(recursion(0));
