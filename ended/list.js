//? =========== arrayToList recursiv version ===========
// function arrayToList(array) {
//   if (array.length === 0) {
//     return null;
//   } else {
//     const rest = { value: array[0], rest: arrayToList(array.slice(1)) };
//     return rest;
//   }
// }
//? ====================================================

function arrayToList(array) {
  let reverseArray = array.reverse();
  let list = null;
  for (let element of reverseArray) {
    list = { value: element, rest: list };
  }
  return list;
}

function listToArray(list) {
  const array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(number, list) {
  return { value: number, rest: list };
}

function nth(list, index) {
  if (index === 0) {
    return list.value || undefined;
  } else {
    if (list.rest) {
      return nth(list.rest, index - 1);
    } else {
      return undefined;
    }
  }
}

const array = [10, 30];
const list = arrayToList(array);
console.log(list);
console.log(listToArray(list));
console.log(prepend(10, list));
console.log(nth(list, 2));
