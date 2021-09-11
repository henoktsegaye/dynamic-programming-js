const chalk = require("chalk");

/**
 * a naive approach for making a fibonacci call
 * time-complexity - 0(2)^n
 * space-complexity - 0(n)
 * @param {number} n thenth fibonacci series
 * @returns calculated fibonacci series
 */
function fibonacciCalculator(n) {

  if (n < 0) return false; //  constant time calculation , c

  if (n === 1 || n === 2) return 1;
  return fibonacciCalculator(n - 1) + fibonacciCalculator(n - 2); //creates a tree structure
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
    `122^th fibonacci series >  ${chalk.green.bold.italic(
      fibonacciCalculator(42)
    )} `
  )
);
