export default class Group {
  constructor(set = []) {
    this.set = [...set];
  }

  add(value) {
    if (this.set.indexOf(value) < 0) {
      this.set.push(value);
    }
  }

  delete(value) {
    const index = this.set.indexOf(value);
    if (index >= 0) {
      this.set = this.set.filter((element) => element != value);
    }
  }

  has(value) {
    return this.set.indexOf(value) < 0 ? false : true;
  }

  static from(iterable) {
    const group = new Group();
    for (let element of iterable) {
      group.add(element);
    }
    return group;
  }
}

//TODO TEST ==========================================

// let group = Group.from([10, 20]);
// console.log(group);
// console.log(group.has(10));
// → true
// console.log(group.has(30));
// → false
// group.add(10);
// group.delete(10);
// console.log(group.has(10));
// → false

//TODO ===============================================
