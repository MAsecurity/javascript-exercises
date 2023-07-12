const removeFromArray = function(array,...args) {
  let newString = [];

  for (let item of array) {
    if (!args.includes(item)) {
      newString.push(item);
    }
  }
  return newString;

};

// Do not edit below this line
module.exports = removeFromArray;
