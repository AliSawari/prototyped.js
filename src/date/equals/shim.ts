import equals from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Date {
    equals(value: unknown): boolean;
  }
}

/**
 * Checks if the date is equal to the given value
 * @memberof Date.prototype
 * @function equals
 * @param {*} value
 * @returns {Boolean}
 * @example
 * (new Date()).equals(new Date()); // false
 */
addPrototype(Date, "equals", equals);
