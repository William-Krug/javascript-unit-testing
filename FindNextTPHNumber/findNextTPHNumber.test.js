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
  test('should return {t: 285, p: 165, h: 143, number: 40755n} if the passed input is ("2", 2, 2)', () => {
    const result = findNextTPHNumber('2', 2, 2);

    expect(result).toMatchObject({
      t: 285,
      p: 165,
      h: 143,
      number: 40755n,
    });
  });

  test('should return {t: 285, p: 165, h: 143, number: 40755n} if the passed input is ("2", 2, 2)', () => {
    const result = findNextTPHNumber(2, '2', 2);

    expect(result).toMatchObject({
      t: 285,
      p: 165,
      h: 143,
      number: 40755n,
    });
  });

  test('should return {t: 285, p: 165, h: 143, number: 40755n} if the passed input is ("2", 2, 2)', () => {
    const result = findNextTPHNumber(2, 2, '2');

    expect(result).toMatchObject({
      t: 285,
      p: 165,
      h: 143,
      number: 40755n,
    });
  });

  test('should return {t: 285, p: 165, h: 143, number: 40755n} if the passed input is ("2", 2, 2)', () => {
    const result = findNextTPHNumber('2', '2', 2);

    expect(result).toMatchObject({
      t: 285,
      p: 165,
      h: 143,
      number: 40755n,
    });
  });

  test('should return {t: 285, p: 165, h: 143, number: 40755n} if the passed input is ("2", 2, 2)', () => {
    const result = findNextTPHNumber('2', 2, '2');

    expect(result).toMatchObject({
      t: 285,
      p: 165,
      h: 143,
      number: 40755n,
    });
  });

  test('should return {t: 285, p: 165, h: 143, number: 40755n} if the passed input is ("2", 2, 2)', () => {
    const result = findNextTPHNumber(2, '2', '2');

    expect(result).toMatchObject({
      t: 285,
      p: 165,
      h: 143,
      number: 40755n,
    });
  });

  test('should return {t: 285, p: 165, h: 143, number: 40755n} if the passed input is ("2", 2, 2)', () => {
    const result = findNextTPHNumber('2', '2', '2');

    expect(result).toMatchObject({
      t: 285,
      p: 165,
      h: 143,
      number: 40755n,
    });
  });

  test('should fail if given a letter character or string as an input (eg ("a", 2, 2))', () => {
    expect(() => {
      findNextTPHNumber('a', 2, 2);
    }).toThrow(`Invalid argument passed. Please enter only numbers.`);
  });

  test('should fail if given a letter character or string as an input (eg (2, "a", 2))', () => {
    expect(() => {
      findNextTPHNumber(2, 'a', 2);
    }).toThrow(`Invalid argument passed. Please enter only numbers.`);
  });

  test('should fail if given a letter character or string as an input (eg (2, 2, "a"))', () => {
    expect(() => {
      findNextTPHNumber(2, 2, 'a');
    }).toThrow(`Invalid argument passed. Please enter only numbers.`);
  });

  test('should fail if given a letter character or string as an input (eg ("a", "a", 2))', () => {
    expect(() => {
      findNextTPHNumber('a', 'a', 2);
    }).toThrow(`Invalid argument passed. Please enter only numbers.`);
  });

  test('should fail if given a letter character or string as an input (eg ("a", 2, "a"))', () => {
    expect(() => {
      findNextTPHNumber('a', 2, 'a');
    }).toThrow(`Invalid argument passed. Please enter only numbers.`);
  });

  test('should fail if given a letter character or string as an input (eg (2, "a", "a"))', () => {
    expect(() => {
      findNextTPHNumber(2, 'a', 'a');
    }).toThrow(`Invalid argument passed. Please enter only numbers.`);
  });

  test('should fail if given a letter character or string as an input (eg ("a", "a", "a"))', () => {
    expect(() => {
      findNextTPHNumber('a', 'a', 'a');
    }).toThrow(`Invalid argument passed. Please enter only numbers.`);
  });

  /*
    Missing Input Path
  */
  test('should fail if given no arguments', () => {
    expect(() => {
      findNextTPHNumber();
    }).toThrow(`1 or more missing arguments. Please enter 3 numbers.`);
  });

  test('should fail if one argument is missing', () => {
    expect(() => {
      findNextTPHNumber(1, 1);
    }).toThrow(`1 or more missing arguments. Please enter 3 numbers.`);
  });

  test('should fail if two arguments are missing', () => {
    expect(() => {
      findNextTPHNumber(1);
    }).toThrow(`1 or more missing arguments. Please enter 3 numbers.`);
  });
});
