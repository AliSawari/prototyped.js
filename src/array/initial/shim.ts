import initial from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Array<T> {
    initial(): T[];
  }
}

/**
 * Returns all the elements of an array except the last one
 * @memberof Array.prototype
 * @function initial
 * @returns {Array}
 * @example
 * [1, 2, 3].initial(); // [1, 2]
 */
addPrototype(Array, "initial", initial);
