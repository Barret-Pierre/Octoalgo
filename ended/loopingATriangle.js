function loopingATriangle(numberOfLine) {
  let rowContent = "";
  for (let row = 1; row <= numberOfLine; row++) {
    console.log((rowContent += "#"));
  }
}

loopingATriangle(7);
