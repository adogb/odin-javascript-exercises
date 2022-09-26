const reverseString = function(string) {
  // String.split() makes array with each letter
  const arr = string.split("").reverse();
  // Array.join() makes string using separator
  let reversedString = arr.join("");
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
