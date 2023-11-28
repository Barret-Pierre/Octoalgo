function easyLine(n: number): number {
  const line = createBinomial(n).pop();
  if (line !== undefined) {
    const squares = line.map((number) => number * number);
    return Math.round(Math.log(squares.reduce((prev, curr) => prev + curr, 0)));
  } else {
    return 1;
  }
}

function createBinomial(n: number): number[][] {
  const binomial: number[][] = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      binomial.push([1]);
    }
    if (i === 1) {
      binomial.push([1, 1]);
    }
    if (i > 1) {
      binomial.push(createHorizontalLine(binomial[i - 1]));
    }
  }
  return binomial;
}

function createHorizontalLine(previousLine: number[]): number[] {
  const newLine: number[] = [];
  for (let i = 0; i <= previousLine.length; i++) {
    if (i === 0 || i === previousLine.length) {
      newLine.push(1);
    } else {
      newLine.push(previousLine[i - 1] + previousLine[i]);
    }
  }
  return newLine;
}

console.log(easyLine(50));
