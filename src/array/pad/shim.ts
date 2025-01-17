import pad from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Array<T> {
    pad(size: number, value?: T): T[];
  }
}

/**
 * FillS the array with the given value until the array reaches the specified size
 * @memberof Array.prototype
 * @function pad
 * @param {Number} size
 * @param {*} [value=0]
 * @returns {Array}
 * @example
 * [1, 2, 3].pad(5, 0); // [1, 2, 3, 0, 0]
 * [1, 2, 3].pad(-5, 0); // [0, 0, 1, 2, 3]
 */
addPrototype(Array, "pad", pad);
