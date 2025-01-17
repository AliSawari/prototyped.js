import isEmpty from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    isEmpty(): boolean;
  }
}

/**
 * Checks if the array is empty
 * @memberof Array.prototype
 * @function isEmpty
 * @returns {Boolean}
 * @example
 * [1,2].isEmpty(); // false
 * [].isEmpty(); // true
 */
addPrototype(Array, "isEmpty", isEmpty);
