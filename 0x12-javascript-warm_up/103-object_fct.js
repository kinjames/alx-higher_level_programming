#!/usr/bin/node
function myFunction() {
  let myVar = 0;

  function setValue(newValue) {
    myVar = newValue;
    console.log("myVar is now set to:", myVar);
  }

  function incr() {
    myVar++;
    console.log("myVar is now incremented to:", myVar);
  }

  setValue(5);
  incr();
}

myFunction();
