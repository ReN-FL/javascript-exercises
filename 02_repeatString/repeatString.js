const repeatString = function (string, num) {
  if (num < 0) {
    return 'ERROR';
  }
  let completeString = '';
  for (let i = 0; i < num; i++) {
    completeString += string;
  }
  return completeString;
};

// Do not edit below this line
module.exports = repeatString;
