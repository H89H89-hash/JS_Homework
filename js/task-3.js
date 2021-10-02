"use strict";
const findLongestWord = function (string) {
  let words = string.split(" ");
  let longestWord;
  let check = 0;
  for (let i = 0; i < words.length; i += 1) {
    let wordLength = words[i].length;
    if (wordLength > check) {
      check = wordLength;
      longestWord = words[i];
    }
  }
  return longestWord;
};
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
