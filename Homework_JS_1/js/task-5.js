"use strict";

console.debug("Welcome to check for spam program!");
console.debug("Made in Ukraine");
console.debug("\n");

const checkForSpam = function (message) {
  console.info(message);
  let haveSpam = message.toLowerCase();
  if (haveSpam.includes("sale") || haveSpam.includes("spam")) {
    return true;
  }
  return false;
};

console.info(checkForSpam("Latest technology news"));
console.info(checkForSpam("JavaScript weekly newsletter"));
console.info(checkForSpam("Get best sale offers now!"));
console.info(checkForSpam("[SPAM] How to earn fast money?"));
