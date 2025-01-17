import assign from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Object {
    $assign(...sources: Record<string, unknown>[]): Record<string, unknown>;
  }
}

/**
 * Assigns object like Object.assign
 * @memberof Object.prototype
 * @function $assign
 * @param {...Object} sources
 * @returns {Object}
 * @example
 * ({ a: 0 }).$assign({ a: 1 }, { b: 2 }); // { a: 1, b: 2 }
 */
addPrototype(Object, "$assign", assign);
