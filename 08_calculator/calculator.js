const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((total, number) => total + number, 0);
};

const multiply = function (arr) {
  return arr.reduce((product, number) => product * number);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  let n = 1;
  console.log({ n });
  for (let i = num; i > 0; i--) {
    console.log({ i });
    n *= i;
  }

  return n;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
