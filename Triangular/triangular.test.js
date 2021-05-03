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
  /*
    Missing Input Path
  */
});
