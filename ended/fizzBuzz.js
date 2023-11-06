function fizzBuzz(min, max) {
  for (number = min; number <= max; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log("FizzBuzz");
    } else if (number % 3 === 0) {
      console.log("Fizz");
    } else if (number % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(number);
    }
  }
}

function fizzBuzzClever(min, max) {
  for (number = min; number <= max; number++) {
    let response = "";
    if (number % 3 === 0) {
      response += "Fizz";
    }
    if (number % 5 === 0) {
      response += "Buzz";
    }
    if (!response) {
      response = `${number}`;
    }
    console.log(response);
  }
}

fizzBuzz(1, 15);
