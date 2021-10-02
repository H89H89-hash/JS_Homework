"use strict";
const formatString = function (string) {
  let strLength = string.length;
  if (strLength < 41) {
    return string;
  }
  let newStr = string.split("").slice(0, 40).join("");
  return newStr + "...";
};
console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

console.log(formatString("Curabitur ligula sapien."));

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
