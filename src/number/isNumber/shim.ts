import isNumber from "./index.js";

declare global {
  interface NumberConstructor {
    isNumber(arg: unknown): arg is number;
  }
}

/**
 * Returns true if the given argument is a number
 * @memberof Number
 * @function isNumber
 * @param {*} arg
 * @returns {Boolean}
 * @example
 * Number.isNumber('foo bar'); // false
 * Number.isNumber(2); // true
 */
Number.isNumber = isNumber;
