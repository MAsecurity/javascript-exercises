const fibonacci = function(num) {
  //convert input to number
  let number = +num;
  if(number === 1) {
    return 1;
  }else if (number < 0) {
    return "OOPS";
  }

  let secondPrevious= 0;
  let firstPrevious = 1;
  let sum;
  for (i=2; i<=number; i++) {
    sum = secondPrevious + firstPrevious;
    secondPrevious = firstPrevious;
    firstPrevious = sum;
  }
  return firstPrevious;


};

// Do not edit below this line
module.exports = fibonacci;
