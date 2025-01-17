import forEach from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Object {
    $forEach(
      fn: (
        value: unknown,
        key: string,
        object: Record<string, unknown>,
      ) => void,
    ): void;
  }
}

/**
 * Iterates the object by keys
 * @memberof Object.prototype
 * @function $forEach
 * @param {Function} fn
 * @example
 * const users = {
 *   fred: { user: "fred", age: 40 },
 *   pebbles: { user: "pebbles", age: 1 }
 * };
 * users.$forEach(u => console.log(u.age)); // console logs 40 and 1
 */
addPrototype(Object, "$forEach", forEach);
