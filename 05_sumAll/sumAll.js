const sumAll = function (a, b) {
  let sum = 0;
  let n1;
  let n2;
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
    return 'ERROR';
  }
  if (a > b) {
    n1 = b;
    n2 = a;
  } else {
    n1 = a;
    n2 = b;
  }
  for (let i = n1; i <= n2; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
