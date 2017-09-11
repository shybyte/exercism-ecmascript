/* eslint-disable no-restricted-properties,no-plusplus */

function isPrim(x) {
  const sqrtX = Math.sqrt(x);
  for (let i = 2; i < sqrtX; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}

function assertInRange(x, name) {
  if (x < 2) {
    throw new RangeError(`${name} is out of range`);
  }
}

function assertIsPrim(x, name) {
  if (!isPrim(x)) {
    throw new Error(`${name} should be prim`);
  }
}

export default class DiffieHellman {
  constructor(p, g) {
    assertInRange(p, 'p');
    assertInRange(g, 'g');
    assertIsPrim(p, 'p');
    assertIsPrim(g, 'g');
    this.p = p;
    this.g = g;
  }

  getPublicKeyFromPrivateKey(privateKey) {
    if (privateKey <= 1 || privateKey >= this.p) {
      throw new RangeError('privateKey is out of range');
    }
    // ESLint throws a parsing error when using **, so let's use good old Math.pow
    return Math.pow(this.g, privateKey) % this.p;
  }

  getSharedSecret(privateKey, publicKey) {
    return Math.pow(publicKey, privateKey) % this.p;
  }
}
