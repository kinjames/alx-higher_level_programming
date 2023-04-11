#!/usr/bin/node
const languages = ["C", "Python", "JavaScript"];

for (let i = 0; i < languages.length; i++) {
  console.log(`${languages[i]} is ${getLanguageAdjective(languages[i])}`);
}

function getLanguageAdjective(language) {
  switch (language) {
    case "C":
      return "fun";
    case "Python":
      return "cool";
    case "JavaScript":
      return "amazing";
    default:
      return "";
  }
}
