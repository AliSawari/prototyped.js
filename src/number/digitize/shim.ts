import digitize from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Number {
    digitize(): number[];
  }
}

/**
 * Converts the number to an array of digits
 * @memberof Number.prototype
 * @function digitize
 * @returns {Number[]}
 * @example
 * (123).digitize(); // [1, 2, 3]
 */
addPrototype(Number, "digitize", digitize);
