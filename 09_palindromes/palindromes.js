const palindromes = function (string) {
  //Replace all non letters in array;
  let removeNonLetters = "";
  let la = "abcdefghijklmnopqrstuvwxyz";
  let ua = la.toUpperCase();
  let numbers = "0123456789";
  let splitString = string.split('');
  for (let i=0; i < splitString.length; i++) {
    if(la.includes(splitString[i]) || ua.includes(splitString[i]) || numbers.includes(splitString[i])) {
      removeNonLetters += splitString[i];
    }
  }
  // Turn new string into array
  let newArray = removeNonLetters.split("");
  // reverse string
  let reveresedArray = newArray.reverse();
  // join reversed array as a normal string
  let joinedReversedArray = reveresedArray.join("");
  // Now return comparison
  return removeNonLetters.toLowerCase() === joinedReversedArray.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
