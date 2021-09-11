const chalk = require("chalk");

/**
 * a tabulation approach for making a fibonacci call
 * time-complexity - 0(n)
 * space-complexity - 0(n)
 * @param {number} n thenth fibonacci series
 * @returns calculated fibonacci series
 */
function fibonacciCalculator(n, obj = { 1: 1, 2: 1 }) {
  if (n < 0) return false; //  constant time calculation , c

  if (!obj[n]) {
    var i = 3;
    while (i <= n) {
      obj[i] = obj[i - 2] + obj[i - 1];
      i++;
    }
    return obj[n];
  }

  return obj[n]; //returns the memoized value if it already exists
}

console.log(
  chalk.magenta(
    `4^th fibonacci series >  ${chalk.green.bold.italic(
      fibonacciCalculator(4)
    )} `
  )
);
console.log(
  chalk.magenta(
    `42^th fibonacci series >  ${chalk.green.bold.italic(
      fibonacciCalculator(42)
    )} `
  )
);
