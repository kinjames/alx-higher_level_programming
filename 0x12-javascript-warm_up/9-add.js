#!/usr/bin/node
function add (c, d) {
  return c + d;
}

console.log(add(Number(process.argv[2]), Number(process.argv[3])));
