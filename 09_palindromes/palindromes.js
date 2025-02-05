const palindromes = function (str) {
  str = str.split("").filter((c) => !["!", ".", "?", ",", " "].includes(c));
  let rev = str.slice();
  rev = rev.reverse().join("").toLowerCase();
  str = str.join("").toLowerCase();
  console.log(`${str} === ${rev}`);
  return str === rev;
};

// Do not edit below this line
module.exports = palindromes;
