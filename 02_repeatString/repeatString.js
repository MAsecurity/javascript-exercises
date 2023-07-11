const repeatString = function(userInput, number) {
  if (number < 0) {
    return 'ERROR'
    
  }else {
    let string = "";

    for(let i=0; i < number; i++) {
      string += userInput; 
    }
    return string;
  }

};

// Do not edit below this line
module.exports = repeatString;
