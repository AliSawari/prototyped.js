import inRange from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Number {
    inRange(end: number, start?: number): boolean;
  }
}

/**
 * Checks if n is between start and up to end
 * @memberof Number.prototype
 * @function inRange
 * @param {Number} end
 * @param {Number} [start=0]
 * @returns {Boolean}
 * @example
 * (4).inRange(8); // true
 */
addPrototype(Number, "inRange", inRange);
