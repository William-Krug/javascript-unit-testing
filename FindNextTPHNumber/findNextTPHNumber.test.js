const { test, expect } = require('@jest/globals');
const { describe } = require('yargs');
const findNextTPHNumber = require('./findNextTPHNumber');

describe('the findNextTPHNumber function', () => {
  /*
    Happy Path
  */
  test('should return {t: 1, p: 1, h: 1, number: 1} if the passed input is (1, 1, 1)', () => {
    const result = findNextTPHNumber(1, 1, 1);
    expect(result).toBe({ t: 1, p: 1, h: 1, number: 1n });
  });
  /*
    Bad Input Path
  */
  /*
    Missing Input Path
  */
});
