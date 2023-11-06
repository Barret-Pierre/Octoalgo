function deepEqual(firstObject, secondObject) {
  const firstObjectProperties = Object.keys(firstObject);
  for (let propertie of firstObjectProperties) {
    if (typeof firstObject[propertie] !== typeof secondObject[propertie]) {
      return false;
    }
    if (
      typeof firstObject[propertie] === "object" &&
      firstObject[propertie] &&
      secondObject[propertie]
    ) {
      return deepEqual(firstObject[propertie], secondObject[propertie]);
    }
    if (firstObject[propertie] !== secondObject[propertie]) {
      return false;
    }
  }
  return true;
}

let obj1 = { here: { j: { i: { h: "J" } } }, object: 2 };
let obj2 = { here: { j: {} }, object: 2 };
console.log(deepEqual(obj1, obj2));
