const findNextTPHNumber = require('./findNextTPHNumber');

describe('the findNextTPHNumber function', () => {
  /*
    Happy Path
  */
  test('should return {t: 1, p: 1, h: 1, number: 1n} if the passed input is (1, 1, 1)', () => {
    const result = findNextTPHNumber(1, 1, 1);

    expect(result).toMatchObject({
      t: 1,
      p: 1,
      h: 1,
      number: 1n,
    });
  });

  test('should return {t: 285, p: 165, h: 143, number: 40755n} if the passed input is (2, 2, 2)', () => {
    const result = findNextTPHNumber(2, 2, 2);

    expect(result).toMatchObject({
      t: 285,
      p: 165,
      h: 143,
      number: 40755n,
    });
  });
  /*
    Bad Input Path
  */
  /*
    Missing Input Path
  */
});
