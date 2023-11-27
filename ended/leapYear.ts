function isLeap(year: number): boolean {
  if (year < 1600 || year > 4000) {
    return false;
  }

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeap(400));
