const INVALID_NUMBER = '0000000000';

export default class PhoneNumber {
  constructor(rawPhoneNumber) {
    this._number = PhoneNumber.clean(rawPhoneNumber);
  }

  number() {
    return this._number;
  }

  static clean(rawPhoneNumber) {
    const numbersOnly = rawPhoneNumber.replace(/\D/g, '');
    switch (true) {
      case numbersOnly.length == 10:
        return numbersOnly;
      case numbersOnly.length == 11 && numbersOnly.startsWith('1'):
        return numbersOnly.slice(1);
      default:
        return INVALID_NUMBER;
    }
  }

}