import countBy from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Array<T> {
    countBy(
      fn: string | ((value: T, index: number, arr: T[]) => any),
    ): { [key: string]: number };
  }
}

/**
 * Groups the elements of an array based on the given function and
 * returns the count of elements in each group
 * @memberof Array.prototype
 * @function countBy
 * @param {String|Function} fn
 * @returns {Object}
 * @example
 * [6.1, 4.2, 6.3].countBy(Math.floor); // {4: 1, 6: 2}
 * ['one', 'two', 'three'].countBy('length'); // {3: 2, 5: 1}
 */
addPrototype(Array, "countBy", countBy);
