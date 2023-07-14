const convertToCelsius = function(farenheit) {
  //Formula (F - 32) * 5/9 = C
  let celcius = (farenheit - 32) * 5/9;
  // Round to one decimal place
  let result = Math.round(celcius * 10 ) / 10;
  return result;


};

const convertToFahrenheit = function(celcius) {
  //Formula (C * 9/5 ) + 32 = F
  let farenheit = (celcius * 9/5) + 32;
  // Round to one decimal place
  let result = Math.round(farenheit * 10 ) / 10;
  return result;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
