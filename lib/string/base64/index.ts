export { }

declare global {
  interface String {
    base64(): string
  }
}

/**
 * Encodes data with MIME base64
 * @memberof String
 * @returns {string}
 * @example
 * 'prototyped.js'.base64(); // 'cHJvdG90eXBlZC5qcw=='
 */
String.prototype.base64 = function(): string {
  return new Buffer(`${this}`).toString('base64')
}
