import sample from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Array<T> {
    sample(): T;
  }
}

/**
 * Returns a random element from an array
 * @memberof Array.prototype
 * @function sample
 * @returns {*}
 * @example
 * [3, 7, 9, 11].sample(); // 9
 */
addPrototype(Array, "sample", sample);
