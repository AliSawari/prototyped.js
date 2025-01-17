import equals from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Number {
    equals(value: unknown): boolean;
  }
}

/**
 * Checks if the number is equal to the given value
 * @memberof Number.prototype
 * @function equals
 * @param {*} value
 * @returns {Boolean}
 * @example
 * (22).equals("22"); // false
 */
addPrototype(Number, "equals", equals);
