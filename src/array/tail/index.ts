import { addPrototype } from "../../utils";
import method from "./method";

declare global {
  interface Array<T> {
    tail(): T[];
  }
}

/**
 * Returns all elements in an array except for the first one
 * @memberof Array.prototype
 * @function tail
 * @returns {Array}
 * @example
 * [1, 2, 3].tail(); // [2, 3]
 */
addPrototype(Array, "tail", method);
