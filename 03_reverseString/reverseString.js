const reverseString = function (string) {
  let temp = "";
  for (let i = 0; i < string.length; i++) {
    temp = temp.concat(string.at(string.length - i - 1));
  }
  return temp;
};

// Do not edit below this line
module.exports = reverseString;
