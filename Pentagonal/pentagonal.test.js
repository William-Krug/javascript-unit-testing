const { test, expect } = require('@jest/globals');
const { describe } = require('yargs');
const pentagonal = require('./pentagonal.js');

describe('the pentagonal function', () => {
  /*
    Happy Path
  */
  test('should return 1 if the passed input is 1', () => {
    const result = pentagonal(1);
    expect(result).toBe(1);
  });

  test('should return 70 if the passed input is 7', () => {
    const result = pentagonal(7);
    expect(result).toBe(70);
  });

  /*
    Bad Input Path
  */
  test('should return 5 if the passed input is "2"', () => {
    const result = pentagonal('2');
    expect(result).toBe(5);
  });

  test('should return 51 if the passed input is "6"', () => {
    const result = pentagonal('6');
    expect(result).toBe(51);
  });

  test('should fail if given a letter character or string', () => {
    expect(() => {
      pentagonal('hi');
    }).toThrow(`Invalid argument passed. Please enter a number.`);
  });

  /*
    Bad Input Path
  */
  test('should fail if given no arguments', () => {
    expect(() => {
      pentagonal();
    }).toThrow(`No argument passed. Please enter a number.`);
  });
});
