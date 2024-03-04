const palindromes = function (str) {
  let strLow = str.toLowerCase();
  strClean = strLow.replace(/[^a-z0-9]/g, '');
  let strRev = strClean.split('').reverse().join('');
  return strClean === strRev;
};

// Do not edit below this line
module.exports = palindromes;
