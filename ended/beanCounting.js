function countBs(string) {
  let countBInString = 0;
  for (let letter = 0; letter < string.length; letter++) {
    if (string[letter] === "B") {
      countBInString++;
    }
  }
  return countBInString;
}

function countChar(string, letterToCount) {
  let countInString = 0;
  for (let letter = 0; letter < string.length; letter++) {
    if (string[letter] === letterToCount) {
      countInString++;
    }
  }
  return countInString;
}

console.log(countBs("Hello there aBBBBways ready for algo mayBe !"));
console.log(countChar("kakkerlak", "k"));
