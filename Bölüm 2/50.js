const prime = require('50-prime.js');

const maxLength = function() {
  var sum = 0;
  var i = 1;
  while (sum < 1000000) {
    sum += prime.calculateNthPrime(i);
    i++;
  }
  return i;
}();

var reduceRange = function(begin, end) {
  return function(p, c, index) {
    if (index >= begin && index < end) {
      return p + c;
    } else {
      return p;
    }
  }
}

console.log(maxLength);

for (var i = maxLength;i > 0;i--) {
  var j = 0;
  while (j + i <= maxLength) {
    var ret = prime.primes.reduce(reduceRange(j, j + i), 0);
    if (prime.isPrime(ret)
        && ret < 1000000) {
      console.log(ret);
      return;
    }
    j++;
  }
}