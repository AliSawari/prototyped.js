import isObject from "./index.js";

declare global {
  interface ObjectConstructor {
    isObject(arg: unknown): arg is Record<string, unknown>;
  }
}

/**
 * Returns true if the given argument is an object
 * @memberof Object
 * @function isObject
 * @param {*} arg
 * @returns {Boolean}
 * @example
 * Object.isObject(2); // false
 * Object.isObject({foo: 'bar'}); // true
 */
Object.isObject = isObject;
