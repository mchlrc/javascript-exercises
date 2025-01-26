const repeatString = function (string, num) {
  let temp = "";
  if (num < 0) {
    temp = "ERROR";
  } else {
    for (let i = 0; i < num; i++) {
      temp = temp.concat(string);
    }
  }
  return temp;
};

// Do not edit below this line
module.exports = repeatString;
