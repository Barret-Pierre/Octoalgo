function chessboard(width, height) {
  let chessboard = "";
  for (let row = 1; row <= height; row++) {
    for (let col = 1; col <= width; col++) {
      if ((row + col) % 2 === 0) {
        chessboard += " ";
      } else {
        chessboard += "#";
      }
    }
    if (row < height) {
      chessboard += "\n";
    }
  }
  console.log(chessboard);
}

chessboard(10, 10);
