const fibonacci = function (member) {
  member = Number(member);
  let defaults = [0, 1, 1];
  let count = 2;
  let previous = 0;
  let current = 1;
  let numbers = [1, 1];

  if (member < 3 && member >= 0) {
    return defaults[member];
  } else if (member < 0) {
    return "OOPS";
  }
  while (count < member) {
    numbers.push(numbers.at(-1) + numbers.at(-2));
    console.log(numbers);
    numbers.shift(1);
    count++;
  }
  return numbers.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
