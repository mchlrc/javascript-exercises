const sumAll = function (start, end) {
  let sum = "ERROR";
  console.log(start);
  console.log(end);
  console.log(typeof start);
  console.log(typeof end);
  console.log(Number.isInteger(start));
  console.log(Number.isInteger(end));

  if (typeof start === "number" && typeof end === "number") {
    if (
      Number.isInteger(start) &&
      Number.isInteger(end) &&
      start >= 0 &&
      end >= 0
    ) {
      if (start > end) {
        [start, end] = [end, start];
      }
      sum = 0;
      for (let i = start; i <= end; i++) {
        sum += i;
      }
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
