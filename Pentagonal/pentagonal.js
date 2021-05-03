/**
 * Calculates, and returns, the given numbers' pentagonal number using
 * the following equation:
 *
 *    P(n) = (n(3n-1))/2
 *
 * @param {number} inputNumber input value to calculate pentagonal number
 * @returns {number} calculated pentagonal number
 */
function pentagonal(inputNumber) {
  // Check for missing argument
  if (inputNumber === undefined) {
    throw new Error(`No argument passed. Please enter a number.`);
  }

  return pentagonalNumber;
}

module.exports = pentagonal;
