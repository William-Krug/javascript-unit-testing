/**
 * Calculates, and returns the given number's triangular number using
 * the following equation:
 *
 *    T(n) = (n(n+1))/2
 *
 * @param {number} number input value to calculate triangular number
 * @returns {number} calculated triangular number
 */
function triangular(number) {
  let triangularNumber;

  // Check for missing argument
  if (number === undefined) {
    throw new Error(`No argument passed. Please enter a number.`);
  }
  return triangularNumber;
}

module.exports = triangular;
