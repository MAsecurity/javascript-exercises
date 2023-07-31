const findTheOldest = function(array) {
  return array.reduce((oldest,currentPerson) => {
    let ageOfOldest = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    let ageOfCurrentPerson = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    return (ageOfOldest < ageOfCurrentPerson) ? currentPerson : oldest;
  });

};

function getAge(birth,death) {
  if(!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}
  

// Do not edit below this line
module.exports = findTheOldest;
