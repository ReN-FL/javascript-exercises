const findTheOldest = function (arr) {
  let greatestId;
  let current = 0;
  let greatest = 0;
  arr.forEach((e) => {
    if (e.yearOfDeath != undefined) {
      current = e.yearOfDeath - e.yearOfBirth;
      if (current > greatest) {
        greatest = current;
        greatestId = e;
      }
    } else {
      let year = new Date().getFullYear();
      current = year - e.yearOfBirth;
      if (current > greatest) {
        greatest = current;
        greatestId = e;
      }
    }
  });
  return greatestId;
};
// yearOfBirth:
// yearOfDeath:

// Do not edit below this line
module.exports = findTheOldest;
