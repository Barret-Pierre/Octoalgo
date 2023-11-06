//? =========== loop for and wile versions ===========
// function loop(value, test, update, body) {
//   let newValue = value;
//   while (test(newValue)) {
//     body(newValue);
//     newValue = update(newValue);
//   }
// }

// function loop(value, test, update, body) {
//   for (value; test(value); value = update(value)) {
//     body(value);
//   }
// }
//? ====================================================

function loop(value, test, update, body) {
  if (test(value)) {
    body(value);
    return loop(update(value), test, update, body);
  } else {
    return null;
  }
}

let value = 3;
loop(
  value,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
