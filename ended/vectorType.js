class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vector) {
    return new Vec(this.x + vector.x, this.y + vector.y);
  }

  minus(vector) {
    return new Vec(this.x - vector.x, this.y - vector.y);
  }

  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

let vec1 = new Vec(1, 2);
let vec2 = new Vec(2, 3);
let vec3 = new Vec(3, 4);
console.log(vec1, vec2);
console.log(vec1.plus(vec2));
console.log(vec1.minus(vec2));
console.log(vec3.length);
