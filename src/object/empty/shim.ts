import empty from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Object {
    $empty(): void;
  }
}

/**
 * Empty the object
 * @memberof Object.prototype
 * @function $empty
 * @example
 * const obj = { a: 1 };
 * obj.$empty();
 * // obj = {};
 */
addPrototype(Object, "$empty", empty);
