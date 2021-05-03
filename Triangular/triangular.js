/**
 * Calculates, and returns the given number's triangular number using
 * the following equation:
 *
 *    T(n) = (n(n+1))/2
 *
 * @param {number} inputNumber input value to calculate triangular number
 * @returns {number} calculated triangular number
 */
function triangular(inputNumber) {
  let triangularNumber;

  // Check for missing argument
  if (inputNumber === undefined) {
    throw new Error(`No argument passed. Please enter a number.`);
  }

  // Check for non number character inputs (eg. 'hi')
  const convertedInputNumber = Number(inputNumber);

  if (isNaN(convertedInputNumber)) {
    throw new Error(`Invalid argument passed. Please enter a number.`);
  }

  return triangularNumber;
}

module.exports = triangular;
