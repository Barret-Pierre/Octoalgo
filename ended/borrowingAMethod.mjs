// function greet(greetings) {
//   console.log(greetings);
// }

// greet("Hello there always ready for algo !");

class Map {
  constructor(one, two, hasOwnProperty) {
    this.one = one;
    this.two = two;
    this.hasOwnProperty = hasOwnProperty;
  }
}

let map = new Map(true, true, true);

Map.prototype.hasOwnProperty = (key) => {
  let keys = Object.keys(this);
  if (keys.includes(key)) {
    return true;
  } else {
    return false;
  }
};

// Fix this call
console.log(hasOwnProperty.call(map, "one"));
// → true
