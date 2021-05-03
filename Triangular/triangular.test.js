const { test, expect } = require('@jest/globals');
const triangular = require('./triangular.js');

describe('the triangular function', () => {
  /*
    Happy Path
  */
  test('should return 1 if the passed input is 1', () => {
    const result = triangular(1);
    expect(result).toBe(1);
  });

  test('should return 28 if the passed input is 7', () => {
    const result = triangular(7);
    expect(result).toBe(28);
  });

  /*
    Bad Input Path
  */
  test('should return 3 if the passed input is the string "2"', () => {
    const result = triangular('2');
    expect(result).toBe(3);
  });

  test('should return 21 if the passed input is the string "6"', () => {
    const result = triangular('6');
    expect(result).toBe(21);
  });

  test('should fail if given a letter character or string', () => {
    expect(() => {
      triangular('hi');
    }).toThrow(`Invalid argument passed. Please enter a number.`);
  });

  /*
    Missing Input Path
  */
  test('should fail if given no arguments', () => {
    triangular();
  }).toThrow(`No argument passed. Please enter a number.`);
});
