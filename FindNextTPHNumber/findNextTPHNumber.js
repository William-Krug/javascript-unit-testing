const triangular = require('../Triangular/triangular.js');
const pentagonal = require('../Pentagonal/pentagonal.js');
const hexagonal = require('../Hexagonal/hexagonal.js');

/**
 * Calculates and returns the next
 *
 *    Triangular Number === Pentagonal Number === Hexagonal Number
 *
 * from the starting numbers for each individual equation.
 *
 * @param {number} triangle starting point for Triangular Number calculations
 * @param {number} pentagon starting point for Pentagonal Number calculations
 * @param {number} hexagon starting point for Hexagonal Number calculations
 * @returns {object} starting values for triangular, pentagonal, and hexagonal equations and their equivalent Number
 */
function findNextTPHNumber(triangle, pentagon, hexagon) {
  // Check for missing arguments
  if (
    triangle === undefined ||
    pentagon === undefined ||
    hexagon === undefined
  ) {
    throw new Error(`1 or more missing arguments. Please enter 3 numbers.`);
  }

  // Check for non number character inputs (eg. 'a')
  const convertedTriangle = Number(triangle);
  const convertedPentagon = Number(pentagon);
  const convertedHexagon = Number(hexagon);

  if (
    isNaN(convertedTriangle) ||
    isNaN(convertedPentagon) ||
    isNaN(convertedHexagon)
  ) {
    throw new Error(`Invalid argument passed. Please enter only numbers.`);
  }

  // Storage array for all results
  const results = {
    t: 0,
    p: 0,
    h: 0,
    number: 0,
  };

  // Starting values
  let triangularStartingNumber = Number(triangle);
  let pentagonalStartingNumber = Number(pentagon);
  let hexagonalStartingNumber = Number(hexagon);
  let triangularNumber = 0;
  let pentagonalNumber = 0;
  let hexagonalNumber = 0;

  // Flag variables for loop control
  let numberFound = false;

  while (!numberFound) {
    // Calculate Hexagonal Number from its starting number
    hexagonalNumber = BigInt(hexagonal(hexagonalStartingNumber));

    // Calculate Pentagonal Number from its starting number
    pentagonalNumber = BigInt(pentagonal(pentagonalStartingNumber));

    // While the Pentagonal Number is less than or equal to the Hexagonal
    // Number, add 1 to the starting number and recalculate
    while (pentagonalNumber <= hexagonalNumber || pentagonalNumber === 0) {
      // If the Pentagonal Number is the same as the Hexagonal Number,
      // start check on the Triangular Number
      if (pentagonalNumber === hexagonalNumber) {
        // Calculate Triangular Number from its starting number
        triangularNumber = BigInt(triangular(triangularStartingNumber));

        // While the Triangular Number is less than or equal to the Pentagonal
        // Number, add 1 to the starting number and recalculate
        while (triangularNumber <= pentagonalNumber || triangularNumber === 0) {
          // If the Triangular Number is the same as the Pentagonal Number
          // (and by the associative property of mathematics, the Hexagonal
          // Number), store the shape's starting numbers and Triangular Number
          // in the results object and return the object.
          if (triangularNumber === pentagonalNumber) {
            results.t = triangularStartingNumber;
            results.p = pentagonalStartingNumber;
            results.h = hexagonalStartingNumber;
            results.number = triangularNumber;

            return results;
          }
          // Triangular Number is less than Pentagonal Number
          else {
            // Increment the starting triangular number by 1
            triangularStartingNumber += 1;

            // Calculate new Triangular Number with updated starting number
            triangularNumber = BigInt(triangular(triangularStartingNumber));
          }
        }
      }
      // Pentagonal Number is less than Hexagonal Number
      else {
        // Increment the starting pentagonal number by 1
        pentagonalStartingNumber += 1;

        // Calculate the new Pentagonal Number with updated starting number
        pentagonalNumber = BigInt(pentagonal(pentagonalStartingNumber));
      }
    }

    // Increment the starting hexagonal number by 1 for next iteration of loop
    hexagonalStartingNumber += 1;
  }
}

findNextTPHNumber(1, 1, 1);
findNextTPHNumber(2, 2, 2);
findNextTPHNumber(286, 166, 144);

module.exports = findNextTPHNumber;
