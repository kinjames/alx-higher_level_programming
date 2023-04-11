#!/usr/bin/node
function secondLargest() {
  let args = Array.from(arguments);
  if (args.length < 2) {
    console.log(0);
    return;
  }
  let max = Number.NEGATIVE_INFINITY;
  let secondMax = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < args.length; i++) {
    let num = parseInt(args[i]);
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num != max) {
      secondMax = num;
    }
  }
  console.log(secondMax);
}
