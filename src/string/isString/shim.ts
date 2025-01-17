import isString from "./index.js";

declare global {
  interface StringConstructor {
    isString(arg: unknown): arg is string;
  }
}

/**
 * Returns true if the given argument is an string
 * @memberof String
 * @function isString
 * @param {*} arg
 * @returns {Boolean}
 * @example
 * String.isString(2); // false
 * String.isString("foo bar"); // true
 */
String.isString = isString;
