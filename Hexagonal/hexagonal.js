/**
 * Calculates, and returns, the given number's hexagonal number using
 * the following equation:
 *
 *    H(n) = n(2n-1)
 *
 * @param {number} inputNumber input value to calculate hexagonal number
 * @returns {number} calculated hexagonal number
 */
function hexagonal(inputNumber) {
  // Check for missing argument
  if (inputNumber === undefined) {
    throw new Error(`No argument passed. Please enter a number.`);
  }

  // Check for non number character inputs (eg. 'hi')
  const convertedInputNumber = Number(inputNumber);

  if (isNaN(convertedInputNumber)) {
    throw new Error(`Invalid argument passed. Please enter a number.`);
  }

  // Calculate input's triangular number
  const hexagonalNumber = BigInt(
    Number(inputNumber) * (2 * Number(inputNumber) - 1)
  );

  return hexagonalNumber;
}

module.exports = hexagonal;
