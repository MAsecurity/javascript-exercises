const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  return num1 - num2;
	
};

const sum = function(array) {
  return array.reduce((total,item) => total += item,0);
	
};

const multiply = function(...array) {
  return array.reduce((total, item) => total *= item);


}

const power = function(num1, num2) {
  return num1 ** num2;

	
};

const factorial = function(number) {
  if (number===0) {
    return 1
  }else {
    return number * factorial(number - 1);
  }

	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
