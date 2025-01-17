import max from "./index.js";
import { addPrototype, PathT } from "../../utils.js";

declare global {
  interface Array<T> {
    max(path?: T extends Record<string, unknown> ? PathT<T> : never): number;
  }
}

/**
 * Returns the maximum value of a given path
 * @memberof Array.prototype
 * @function max
 * @param {String} [path]
 * @returns {Number}
 * @example
 * [1, 2, 3].max(); // 3
 * [{a: 1}, {a: 2}, {a: 3}].max('a'); // 3
 * [{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].max('a.b'); // 3
 */
addPrototype(Array, "max", max);
