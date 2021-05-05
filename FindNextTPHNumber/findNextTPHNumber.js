const triangular = require('../Triangular/triangular.js');
const pentagonal = require('../Pentagonal/pentagonal.js');
const hexagonal = require('../Hexagonal/hexagonal.js');

function findNextTPHNumber(triangle, pentagon, hexagon) {
  // Storage array for all results
  const results = {
    t: 0,
    p: 0,
    h: 0,
    number: 0,
  };

  // Starting values
  let triangularStartingNumber = triangle;
  let pentagonalStartingNumber = pentagon;
  let hexagonalStartingNumber = hexagon;
  let triangularNumber = 0;
  let pentagonalNumber = 0;
  let hexagonalNumber = 0;

  // Flag variables for loop control
  let numberFound = false;

  while (!numberFound) {
    // Calculate Hexagonal Number from its starting number
    hexagonalNumber = hexagonal(hexagonalStartingNumber);

    console.log('*** in hexagonal loop ***');
    console.log('\thexagonalStartingNumber:', hexagonalStartingNumber);
    console.log('\thexagonalNumber:', hexagonalNumber);

    // Calculate Pentagonal Number from its starting number
    pentagonalNumber = pentagonal(pentagonalStartingNumber);

    // While the Pentagonal Number is less than or equal to the Hexagonal
    // Number, add 1 to the starting number and recalculate
    while (pentagonalNumber < hexagonalNumber || pentagonalNumber === 0) {
      console.log('*** in pentagonal loop ***');
      console.log('\thexagonalStartingNumber:', hexagonalStartingNumber);
      console.log('\thexagonalNumber:', hexagonalNumber);
      console.log('\tpentagonalStartingNumber:', pentagonalStartingNumber);
      console.log('\tpentagonalNumber:', pentagonalNumber);

      // If the Pentagonal Number is the same as the Hexagonal Number,
      // start check on the Triangular Number
      if (pentagonalNumber === hexagonalNumber) {
        // Calculate Triangular Number from its starting number
        triangularNumber = triangular(triangularStartingNumber);

        // While the Triangular Number is less than or equal to the Pentagonal
        // Number, add 1 to the starting number and recalculate
        while (triangularNumber <= pentagonalNumber || triangularNumber === 0) {
          console.log('*** in triangular loop ***');
          console.log('\thexagonalStartingNumber:', hexagonalStartingNumber);
          console.log('\thexagonalNumber:', hexagonalNumber);
          console.log('\tpentagonalStartingNumber:', pentagonalStartingNumber);
          console.log('\tpentagonalNumber:', pentagonalNumber);
          console.log('\ttriangularStartingNumber:', triangularStartingNumber);
          console.log('\ttriangularNumber:', triangularNumber);

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
            triangularNumber = triangular(triangularStartingNumber);
          }
        }
      }
      // Pentagonal Number is less than Hexagonal Number
      else {
        // Increment the starting pentagonal number by 1
        pentagonalStartingNumber += 1;

        // Calculate the new Pentagonal Number with updated starting number
        pentagonalNumber = pentagonal(pentagonalStartingNumber);
      }
    }

    // Increment the starting hexagonal number by 1 for next iteration of loop
    hexagonalStartingNumber += 1;
  }
}

findNextTPHNumber(0, 0, 0);

module.exports = findNextTPHNumber;
