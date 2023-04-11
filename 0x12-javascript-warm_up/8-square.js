#!/usr/bin/node
function printSquare(size) {
  let num = parseInt(size);
  if (isNaN(num)) {
    console.log("Missing size");
    return;
  }
  for (let i = 0; i < num; i++) {
    console.log("X".repeat(num));
  }
}

printSquare(process.argv[2]);
