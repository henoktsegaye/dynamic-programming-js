const chalk = require("chalk");

/**
 * a memoization approach for making a fibonacci call
 * time-complexity - 0(n)
 * space-complexity - 0(n)
 * @param {number} n thenth fibonacci series
 * @returns calculated fibonacci series
 */
function fibonacciCalculator(n, obj) {
  if (n < 0) return false; //  constant time calculation , c

  if (!obj[n]) {
    var i = 3;
    while (i <= n) {
      obj[i] =
        fibonacciCalculator(i - 2, obj) + fibonacciCalculator(i - 1, obj);
      i++;
    }
    return obj[n];
  }

  return obj[n]; //returns the memoized value if it already exists
}

//this needs to be global as it has to be refereed everywhere and its like a global data store for each function call
var obj = { 1: 1, 2: 1 };


console.log(
  chalk.magenta(
    `4^th fibonacci series >  ${chalk.green.bold.italic(
      fibonacciCalculator(4, obj)
    )} `
  )
);
console.log(
  chalk.magenta(
    `122^th fibonacci series >  ${chalk.green.bold.italic(
      fibonacciCalculator(42, obj)
    )} `
  )
);
