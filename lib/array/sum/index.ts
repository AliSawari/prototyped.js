import * as method from "./method";

declare global {
  interface Array<T> {
    sum(key?: string): number;
  }
}

/**
 * Returns the minimum value of a given key
 * @memberof Array
 * @param {String} [key]
 * @returns {number}
 * @example
 * [1, 2, 3].sum(); // 6
 * [{a: 1}, {a: 2}, {a: 3}].sum('a'); // 6
 * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].sum('a.b'); // 6
 */
Array.prototype.sum = function(key) {
  return method(this, key);
};
