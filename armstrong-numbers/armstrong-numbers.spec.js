import ArmstrongNumber from './armstrong-numbers';

describe('ArmstrongNumber', () => {
  test('Single digit numbers are Armstrong numbers', () => {
    const input = 5;
    expect(ArmstrongNumber.validate(input)).toBe(true);
  });

  test('There are no 2 digit Armstrong numbers', () => {
    const input = 10;
    expect(ArmstrongNumber.validate(input)).toBe(false);
  });

  test('Three digit number that is an Armstrong number', () => {
    const input = 153;
    expect(ArmstrongNumber.validate(input)).toBe(true);
  });

  test('Three digit number that is not an Armstrong number', () => {
    const input = 100;
    expect(ArmstrongNumber.validate(input)).toBe(false);
  });

  test('Four digit number that is an Armstrong number', () => {
    const input = 9474;
    expect(ArmstrongNumber.validate(input)).toBe(true);
  });

  test('Four digit number that is not an Armstrong number', () => {
    const input = 9475;
    expect(ArmstrongNumber.validate(input)).toBe(false);
  });

  test('Seven digit number that is an Armstrong number', () => {
    const input = 9926315;
    expect(ArmstrongNumber.validate(input)).toBe(true);
  });

  test('Seven digit number that is not an Armstrong number', () => {
    const input = 9926314;
    expect(ArmstrongNumber.validate(input)).toBe(false);
  });
});
