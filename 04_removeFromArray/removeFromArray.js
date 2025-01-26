const removeFromArray = function (arr, ...args) {
  for (const arg of [...args]) {
    let index = arr.indexOf(arg);
    while (index != -1) {
      console.log(`${arg} found at index ${index} in ${arr}`);
      arr.splice(index, 1);
      index = arr.indexOf(arg);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
